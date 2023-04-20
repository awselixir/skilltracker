<template>
  <ModalWrapper
    @cancel="goBack"
    title="Update Provider"
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
            :rules="[
              (val) => val.length > 3 || 'Must be at least 3 characters',
            ]"
          />
          <q-input
            v-model="input.shortName"
            label="Short Name"
            color="primary"
            bottom-slots
            :rules="[
              (val) =>
                (val.length >= 3 && val.length <= 10) ||
                'Must be beteen 3-10 characters',
            ]"
          />
          <q-input
            v-model="input.description"
            label="Description"
            color="primary"
            type="textarea"
            bottom-slots
            autogrow
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
import { useProviderStore } from '../../stores/provider-store';

const route = useRoute();
const router = useRouter();

const providerStore = useProviderStore();
const loading = ref(true);
const input = reactive({
  id: '',
  name: '',
  shortName: '',
  description: '',
});
const query = `
  query GetProvider($id: ID!) {
    getProvider(id: $id) {
      id
      name
      description
      shortName
    }
  }
`;
const fetchProvider = async () => {
  const provider = await API.graphql({
    query: query,
    variables: { id: route.params.id },
  });
  const { id, name, description, shortName } =
    provider.data?.getProvider;
  input.id = id;
  input.name = name;
  input.description = description;
  input.shortName = shortName;
  loading.value = false;
};

const goBack = () => {
  router.push({ name: 'providers' });
};

const callDelete = async () => {
  await providerStore.deleteProvider(input);
  goBack();
};

const updateHandler = async () => {
  await providerStore.updateProvider(input);
  goBack();
};
onMounted(async () => {
  await fetchProvider();
});
</script>
