<template>
  <ModalWrapper
    @cancel="goBack"
    title="Update Certification"
    action="update"
    @delete="certDeleteHandler"
    @submit="certUpdateHandler"
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
              (val) => val.length >= 3 || 'Must be at least 3 characters',
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
          <div v-if="existingUsers.length > 0">
            <div class="text-caption">Earned</div>
            <q-item v-for="item in sortedUsers" :key="item.id" class="q-px-xs">
              <q-item-section avatar>
                <q-avatar
                  :color="item.user.color"
                  text-color="white"
                  size="md"
                  >{{ item.user.firstName[0] }}</q-avatar
                >
              </q-item-section>
              <q-item-section
                >{{ item.user.firstName }}
                {{ item.user.lastName }}</q-item-section
              >
              <q-item-section side>
                <q-btn
                  icon="mdi-close"
                  round
                  dense
                  flat
                  @click="userCertDeleteHandler(item.id)"
                />
              </q-item-section>
            </q-item>
          </div>
        </div>
      </transition>
    </template>
  </ModalWrapper>
</template>
<script setup>
import ModalWrapper from '../../components/modals/ModalWrapper.vue';
import { computed, onMounted, reactive, ref } from 'vue';
import { orderBy } from 'lodash';
import { useRoute, useRouter } from 'vue-router';
import { useCertificationStore } from '../../stores/certification-store';
import { useLevelStore } from '../../stores/level-store';
import { useProviderStore } from '../../stores/provider-store';
import { useUserStore } from '../../stores/user-store';
import { error, success } from 'components/messages';

const emit = defineEmits(['updated']);

const route = useRoute();
const router = useRouter();

const certificationStore = useCertificationStore();
const levelStore = useLevelStore();
const providerStore = useProviderStore();
const userStore = useUserStore();

const loading = ref(true);
const input = reactive({
  id: '',
  name: '',
  shortName: '',
  description: '',
  providerID: '',
  certificationlevelID: '',
});

const existingUsers = ref([]);

const sortedUsers = computed(() => {
  return orderBy([...existingUsers.value], 'user.firstName', 'asc');
});

const fetchCertification = async () => {
  const cert = await certificationStore.fetchCertification(route.params.id);
  const {
    id,
    name,
    description,
    shortName,
    providerID,
    certificationlevelID,
    users,
  } = cert.data.getCertification;
  input.id = id;
  input.name = name;
  input.description = description;
  input.certificationlevelID = certificationlevelID;
  input.providerID = providerID;
  input.shortName = shortName;
  existingUsers.value = users.items;
  loading.value = false;
};

const goBack = () => {
  router.push({ name: 'cert', params: { id: route.params.id } });
};

const certDeleteHandler = async () => {
  try {
    await certificationStore.deleteCert(input);
    success(`Certification ${input.name} deleted`);
    router.push({ name: 'certs' });
  } catch (err) {
    error('Something went wrong');
  }
};

const certUpdateHandler = async () => {
  try {
    await certificationStore.updateCert(input);
    success(`Certification ${input.name} updated`);
    goBack();
    emit('updated');
  } catch (err) {
    error('Something went wrong');
  }
};

const userCertDeleteHandler = async (id) => {
  try {
    await userStore.deleteUserCert(id);
    success('User removed from certification');
    emit('updated');
    await fetchCertification();
  } catch (err) {
    error('Something went wrong');
  }
};
onMounted(async () => {
  await fetchCertification();
});
</script>
