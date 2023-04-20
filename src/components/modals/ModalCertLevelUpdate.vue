<template>
  <ModalWrapper
    v-model="levelStore.certLevelModal"
    @cancel="goBack"
    title="Update Cert Level"
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
            v-model="input.name"
            label="Name"
            color="primary"
            bottom-slots
            :rules="[val => val.length > 3 || 'Must be at least 3 characters']"
          />
          <q-input
            v-model="input.description"
            autogrow
            label="Description"
            color="primary"
            type="textarea"
            bottom-slots
          />
          <q-input
            v-model.number="input.score"
            label="Score"
            color="primary"
            type="number"
            bottom-slots
            :rules="[val => (val > 0 && val < 101) || 'Must be between 1-100']"
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
import { useRoute, useRouter } from 'vue-router';
import { useLevelStore } from '../../stores/level-store';

const route = useRoute();
const router = useRouter();

const levelStore = useLevelStore();
const loading = ref(true);
const input = reactive({
  id: '',
  name: '',
  description: '',
  score: '',
});
const query = `
  query GetCertificationLevel($id: ID!) {
    getCertificationLevel(id: $id) {
      id
      name
      description
      score
    }
  }
`;
const fetchCertLevel = async () => {
  const certLevel = await API.graphql({
    query: query,
    variables: { id: route.params.id },
  });
  const { id, name, description, score } =
    certLevel.data?.getCertificationLevel;
  input.id = id;
  input.name = name;
  input.description = description;
  input.score = score;
  loading.value = false;
};

const goBack = () => {
  router.push({ name: 'levels' });
};

const callDelete = async () => {
  await levelStore.deleteCertLevel(input);
  goBack();
};

const updateHandler = async () => {
  await levelStore.updateCertLevel(input);
  goBack();
};
onMounted(async () => {
  await fetchCertLevel();
});
</script>
