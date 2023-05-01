<template>
  <q-page padding>
    <transition
      appear
      enter-active-class="animated fadeIn"
      leave-active-class="animated fadeOut"
    >
      <div v-show="!loading">
        <q-card class="q-mb-md">
          <q-card-section>
            <div class="row items-center q-col-gutter-md">
              <div class="col-md-auto col-12">
                <q-avatar :color="item.color" text-color="white" size="75px">{{
                  item.name[0]
                }}</q-avatar>
              </div>
              <div class="col-md col-12">
                <div class="text-h4 q-mb-sm">{{ item.name }}</div>
                <div class="text-caption text-grey-8">
                  {{ item.description }}
                </div>
              </div>
            </div>
          </q-card-section>
        </q-card>
        <q-table
          title="Members"
          :columns="columns"
          no-data-label="No members"
          :pagination="pagination"
          binary-state-sort
          :rows="item.users"
          @row-click="
            (_event, row) =>
              router.push({ name: 'user', params: { id: row.user.id } })
          "
        >
          <template v-slot:top="props">
            <div class="q-table__title">Members</div>
            <q-space></q-space>
            <q-btn
              flat
              round
              icon="mdi-plus"
              @click="
                router.push({
                  name: 'addUserCert',
                  params: { id: route.params.id },
                })
              "
              class="q-ml-sm"
              v-if="filteredAvailableUsers.length > 0 && userStore.isAdmin"
            />
            <q-btn
              flat
              round
              icon="mdi-pencil"
              @click="
                router.push({
                  name: 'editTeam',
                  params: { id: route.params.id },
                })
              "
              class="q-ml-sm"
              v-if="userStore.isAdmin"
            />
            <q-btn
              flat
              round
              :icon="
                props.inFullscreen ? 'mdi-fullscreen-exit' : 'mdi-fullscreen'
              "
              @click="props.toggleFullscreen"
              class="q-ml-sm"
            />
          </template>
          <template v-slot:body-cell-name="props">
            <q-td :props="props">
              <q-item>
                <q-item-section avatar>
                  <q-avatar
                    :color="props.row.user.color"
                    text-color="white"
                    size="md"
                    >{{ props.row.user.firstName[0] }}</q-avatar
                  >
                </q-item-section>
                <q-item-section>{{ props.value }}</q-item-section>
              </q-item>
            </q-td>
          </template>
        </q-table>
      </div>
    </transition>
    <q-inner-loading :showing="loading">
      <q-spinner size="50px" color="primary" />
    </q-inner-loading>
    <router-view @updated="fetchTeam" />
  </q-page>
</template>
<script setup>
import { computed, onMounted, reactive, ref } from 'vue';
import { orderBy } from 'lodash';
import { useRoute, useRouter } from 'vue-router';
import { useTeamStore } from 'src/stores/team-store';
import { useUserStore } from 'src/stores/user-store';

const route = useRoute();
const router = useRouter();
const teamStore = useTeamStore();
const userStore = useUserStore();

const loading = ref(true);

const item = reactive({
  id: '',
  name: '',
  description: '',
  color: '',
  users: [],
});

const sortedUsers = computed(() => {
  return orderBy(userStore.users, 'firstName', 'asc');
});

const existingUserIds = computed(() => {
  return item.users.map((item) => item.user.id);
});

const filteredAvailableUsers = computed(() => {
  return sortedUsers.value.filter(
    (user) => !existingUserIds.value.includes(user.id)
  );
});

const columns = [
  {
    name: 'name',
    field: (row) => `${row.user.firstName} ${row.user.lastName}`,
    label: 'Name',
    required: true,
    align: 'left',
    sortable: true,
  },
  {
    name: 'certs',
    field: (row) =>
      row.user.certifications.items.length > 0
        ? row.user.certifications.items.length
        : '-',
    label: 'Certs',
    required: true,
    align: 'center',
    sortable: true,
  },
  {
    name: 'score',
    field: (row) => {
      if (row.user.certifications.items.length > 0) {
        return row.user.certifications.items.reduce(
          (acc, cert) => acc + cert.certification.certificationLevel.score,
          0
        );
      } else {
        return '-';
      }
    },
    label: 'Score',
    required: true,
    align: 'center',
    sortable: true,
  },
];

const pagination = reactive({
  sortBy: 'name',
  rowsPerPage: 10,
});

const fetchTeam = async () => {
  // const cert = await API.graphql({
  //   query: getCertification,
  //   variables: { id: route.params.id },
  // });

  const team = await teamStore.fetchTeam(route.params.id);

  const { id, name, color, description, users } = team.data?.getTeam;
  item.id = id;
  item.name = name;
  item.color = color;
  item.description = description;
  item.users = users.items;
  loading.value = false;
};

onMounted(async () => {
  await fetchTeam();
});
</script>
