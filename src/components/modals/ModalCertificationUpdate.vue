<template>
  <ModalWrapper
    @cancel="goBack"
    title="Update Certification"
    action="update"
    @delete="callDelete"
    @submit="updateHandler"
    :loading="loading"
  >
    <template #default>
      <transition
        appear
        enter-active-class="animated fadeIn"
        leave-active-class="animated fadeOut"
      >
        <div v-show="!loading">
          <q-input
            dense
            v-model="input.name"
            label="Name"
            color="primary"
            bottom-slots
            autofocus
            :rules="[
              (val) => val.length > 3 || 'Must be at least 3 characters',
            ]"
          />
          <q-input
            v-model="input.shortName"
            label="Short Name"
            color="primary"
            bottom-slots
            dense
            :rules="[
              (val) =>
                (val.length >= 2 && val.length <= 10) ||
                'Must be beteen 2-10 characters',
            ]"
          />
          <q-select
            v-model="input.providerID"
            label="Provider"
            color="primary"
            bottom-slots
            :options="providerStore.providersSorted"
            dense
            option-value="id"
            option-label="shortName"
            emit-value
            map-options
          />
          <q-select
            v-model="input.certificationlevelID"
            label="Level"
            color="primary"
            bottom-slots
            :options="levelStore.certsLevels"
            dense
            option-value="id"
            option-label="name"
            emit-value
            map-options
          />
          <q-input
            v-model="input.description"
            label="Description"
            color="primary"
            bottom-slots
            type="textarea"
            autogrow
            dense
          />
        </div>
      </transition>
    </template>
  </ModalWrapper>
</template>
<script setup>
import ModalWrapper from './ModalWrapper.vue';
import { onMounted, reactive, ref } from 'vue';
import { API } from 'aws-amplify';
import { getCertification } from 'src/graphql/queries';
import { useRoute, useRouter } from 'vue-router';
import { useCertificationStore } from '../../stores/certification-store';
import { useLevelStore } from '../../stores/level-store';
import { useProviderStore } from '../../stores/provider-store';

defineEmits(['done'])

const route = useRoute();
const router = useRouter();

const certificationStore = useCertificationStore();
const levelStore = useLevelStore();
const providerStore = useProviderStore();

const loading = ref(true);
const input = reactive({
  id: '',
  name: '',
  shortName: '',
  description: '',
  providerID: '',
  certificationlevelID: ''
});

const fetchCertification = async () => {
  const certification = await API.graphql({
    query: getCertification,
    variables: { id: route.params.id },
  });
  const { id, name, description, shortName, providerID, certificationlevelID } =
    certification.data?.getCertification;
  input.id = id;
  input.name = name;
  input.description = description;
  input.certificationlevelID = certificationlevelID
  input.providerID = providerID;
  input.shortName = shortName;
  loading.value = false;
};

const goBack = () => {
  router.push({ name: 'certifications' });
};

const callDelete = async () => {
  await certificationStore.deleteCertification(input, {name: 'certifications'});
};

const updateHandler = async () => {
  await certificationStore.updateCertification(input, {name: 'certifications'});
};
onMounted(async () => {
  await fetchCertification();
});
</script>
