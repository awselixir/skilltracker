<template>
  <ModalWrapper
    @submit="newProvider"
    @cancel="goBack"
    title="New Provider"
    action="new"
  >
    <template #default>
      <div class="column q-col-gutter-md">
        <q-input v-model="input.name" label="Name" color="primary" autofocus bottom-slots :rules="[val => val.length > 3 || 'Must be at least 3 characters']" />
        <q-input
          v-model="input.shortName"
          label="Short Name"
          color="primary"
          bottom-slots
          :rules="[val => (val.length >= 3 && val.length <= 10) || 'Must be beteen 3-10 characters']"
        />
        <q-input
          v-model="input.description"
          label="Description"
          color="primary"
          bottom-slots
          type="textarea"
          autogrow
        />
      </div>
    </template>
  </ModalWrapper>
</template>
<script setup>
import ModalWrapper from './ModalWrapper.vue';
import { reactive } from 'vue';
import { useRouter } from 'vue-router';
import { useProviderStore } from '../../stores/provider-store';

const router = useRouter();
const providerStore = useProviderStore();

const goBack = () => {
  router.push({ name: 'providers' });
};

const input = reactive({
  name: '',
  shortName: '',
  description: '',
});

const newProvider = async () => {
  await providerStore.newProvider(input);
  goBack();
};
</script>
