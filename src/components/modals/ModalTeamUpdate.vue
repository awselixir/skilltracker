<template>
  <ModalWrapper
    @cancel="goBack"
    title="Update Team"
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
              (val) => val.length >= 3 || 'Must be at least 3 characters',
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
      </transition>
    </template>
  </ModalWrapper>
</template>
<script setup>
import ModalWrapper from './ModalWrapper.vue';
import { onMounted, reactive, ref } from 'vue';
import { API } from 'aws-amplify';
import { getTeam } from 'src/graphql/queries';
import { useRoute, useRouter } from 'vue-router';
import { useTeamStore } from '../../stores/team-store';

defineEmits(['done']);

const route = useRoute();
const router = useRouter();

const teamStore = useTeamStore();

const loading = ref(true);
const input = reactive({
  id: '',
  name: '',
  description: '',
});

const fetchTeam = async () => {
  const team = await API.graphql({
    query: getTeam,
    variables: { id: route.params.id },
  });
  const { id, name, description } = team.data?.getTeam;
  input.id = id;
  input.name = name;
  input.description = description;
  loading.value = false;
};

const goBack = () => {
  router.push({ name: 'teams' });
};

const callDelete = async () => {
  await teamStore.deleteTeam(input, { name: 'teams' });
};

const updateHandler = async () => {
  await teamStore.updateTeam(input, { name: 'teams' });
};
onMounted(async () => {
  await fetchTeam();
});
</script>
