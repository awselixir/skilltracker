<template>
  <ModalWrapper
    @submit="newCertHandler"
    @cancel="goBack"
    title="New Certification"
    action="new"
  >
    <template #default>
      <div>
        <q-input
          dense
          v-model="input.name"
          label="Name"
          color="primary"
          bottom-slots
          autofocus
          :rules="[(val) => val.length >= 3 || 'Must be at least 3 characters']"
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
          :rules="[
            (val) => (val != null && val != '') || 'Must make a selection',
          ]"
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
          :rules="[
            (val) => (val != null && val != '') || 'Must make a selection',
          ]"
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
    </template>
  </ModalWrapper>
</template>
<script setup>
import ModalWrapper from '../../components/modals/ModalWrapper.vue';
import { reactive } from 'vue';
import { useRouter } from 'vue-router';
import { useCertificationStore } from '../../stores/certification-store';
import { useLevelStore } from '../../stores/level-store';
import { useProviderStore } from '../../stores/provider-store';
import { error, success } from 'components/messages'

const router = useRouter();
const certificationStore = useCertificationStore();
const levelStore = useLevelStore();
const providerStore = useProviderStore();

const goBack = () => {
  router.push({ name: 'certs' });
};

const input = reactive({
  name: '',
  shortName: '',
  description: '',
  providerID: '',
  certificationlevelID: '',
});

const newCertHandler = async () => {
  try {
    await certificationStore.newCert(input);
    success(`Certification ${input.name} created`);
    router.push({ name: 'certs' });
    await certificationStore.fetchCertifications();
  } catch (err) {
    error('Something went wrong');
  }
};
</script>
