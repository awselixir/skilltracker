<template>
  <ModalWrapper
    @submit="newCertificationLevel"
    v-model="levelStore.certLevelModal"
    @cancel="goBack"
    title="New Cert Level"
    action="new"
  >
    <template #default>
      <div class="column q-col-gutter-md">
        <q-input v-model="input.name" label="Name" color="primary" autofocus />
        <q-input
          v-model="input.description"
          autogrow
          label="Description"
          color="primary"
          type="textarea"
        />
        <q-input
          v-model.number="input.score"
          label="Score"
          color="primary"
          type="number"
        />
      </div>
    </template>
  </ModalWrapper>
</template>
<script setup>
import ModalWrapper from './ModalWrapper.vue';
import { reactive } from 'vue';
import { useRouter } from 'vue-router';
import { useLevelStore } from '../../stores/level-store';

const router = useRouter();
const levelStore = useLevelStore();

const goBack = () => {
  router.push({ name: 'levels' });
};

const input = reactive({
  name: '',
  description: '',
  score: '',
});

const newCertificationLevel = async () => {
  await levelStore.newCertLevel(input);
  goBack();
};
</script>
