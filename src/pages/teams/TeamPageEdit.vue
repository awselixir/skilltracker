<template>
  <ModalWrapper
    @cancel="goBack"
    title="Update Team"
    action="update"
    @delete="teamDeleteHandler"
    @submit="teamUpdateHandler"
    :loading="false"
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
          <q-toolbar>
            <q-toolbar-title>Users</q-toolbar-title>
            <q-btn
              icon="mdi-account-plus"
              flat
              round
              size="sm"
              @click="addUserBox = true"
            />
          </q-toolbar>
          <q-list dense>
            <q-item v-if="addUserBox">
              <q-item-section>
                <q-select
                  v-model="input.users"
                  label="Add Users"
                  color="primary"
                  bottom-slots
                  :options="filteredAvailableUsers"
                  dense
                  option-value="id"
                  :option-label="
                    (item) =>
                      item.length === 0
                        ? ''
                        : `${item.firstName} ${item.lastName}`
                  "
                  multiple
                  use-chips
                  filled
                />
              </q-item-section>
            </q-item>
            <div v-if="!addUserBox">
              <q-item v-for="item in existingUsersSorted" :key="item.id">
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
                    @click="userTeamDeleteHandler(item.id)"
                  />
                </q-item-section>
              </q-item>
            </div>
          </q-list>
        </div>
      </transition>
    </template>
  </ModalWrapper>
</template>
<script setup>
import ModalWrapper from '../../components/modals/ModalWrapper.vue';
import { computed, onMounted, reactive, ref } from 'vue';
import { orderBy } from 'lodash';
import { API } from 'aws-amplify';
import { getTeam } from 'src/graphql/queries';
import { useRoute, useRouter } from 'vue-router';
import { useTeamStore } from '../../stores/team-store';
import { useUserStore } from 'src/stores/user-store';
import { error, success } from 'components/messages';

const emit = defineEmits(['updated']);

const route = useRoute();
const router = useRouter();

const teamStore = useTeamStore();
const userStore = useUserStore();

const loading = ref(true);
const addUserBox = ref(false);

const input = reactive({
  id: '',
  name: '',
  description: '',
  existingUsers: [],
  users: [],
});

const fetchTeam = async () => {
  const team = await API.graphql({
    query: getTeam,
    variables: { id: route.params.id },
  });
  const { id, name, description, users } = team.data?.getTeam;
  input.id = id;
  input.name = name;
  input.description = description;
  input.existingUsers = users.items;
  loading.value = false;
};

const existingUsersSorted = computed(() => {
  return orderBy(input.existingUsers, 'user.firstName', 'asc');
});

const existingUserIds = computed(() => {
  return input.existingUsers.map((item) => item.user.id);
});

const filteredAvailableUsers = computed(() => {
  return userStore.usersSortedByName.filter(
    (user) => !existingUserIds.value.includes(user.id)
  );
});
const goBack = () => {
  router.push({ name: 'team', params: { id: route.params.id } });
};

const teamDeleteHandler = async () => {
  try {
    await teamStore.deleteTeam(input);
    success(`Team ${input.name} deleted`);
    router.push({ name: 'teams' });
  } catch (err) {
    console.log(err)
    error('Something went wrong');
  }
};

const userTeamDeleteHandler = async (id) => {
  try {
    await teamStore.deleteUserTeam(id);
    success('User removed');
    emit('updated');
    await fetchTeam();
  } catch (err) {
    error('Something went wrong');
  }
};

const teamUpdateHandler = async () => {
  try {
    await teamStore.updateTeam({
      id: input.id,
      name: input.name,
      description: input.description,
      users: input.users,
    });
    success(`Team ${input.name} updated`);
    goBack();
    emit('updated');
  } catch (err) {
    console.log(err);
    error('Something went wrong');
  }
};
onMounted(async () => {
  await fetchTeam();
});
</script>
