<template>
  <ModalWrapper
    @submit="newTeam"
    @cancel="goBack"
    title="New Team"
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
        <q-select
          v-model="input.users"
          label="Add Users"
          color="primary"
          bottom-slots
          :options="userStore.usersSortedByName"
          dense
          option-value="id"
          :option-label="(item) => item.length === 0 ? '' : `${item.firstName} ${item.lastName}`"
          multiple
          use-chips
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
import ModalWrapper from './ModalWrapper.vue';
import { reactive } from 'vue';
import { useRouter } from 'vue-router';
import { useTeamStore } from '../../stores/team-store';
import { useUserStore} from '../../stores/user-store';

const router = useRouter();
const teamStore = useTeamStore();
const userStore = useUserStore()

const goBack = () => {
  router.push({ name: 'teams' });
};

const input = reactive({
  name: '',
  description: '',
  users: []
});

const newTeam = async () => {
  await teamStore.newTeam(input, {name: 'teams'});
};
</script>
