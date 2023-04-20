<template>
  <q-page padding>
    <q-table
      :columns="columns"
      square
      :rows="teamStore.teams"
      binary-state-sort
      :pagination="pagination"
      no-data-label="No teams yet"
      hide-pagination
      :loading="teamStore.teamsLoading"
      row-key="id"
      @row-click="rowClickHandler"
      :grid="$q.screen.lt.md"
      class="teams-table"
    >
      <template v-slot:top="props">
        <div class="q-table__title">Teams</div>
        <q-space></q-space>
        <q-btn
          flat
          round
          icon="mdi-plus"
          @click="newTeam"
          class="q-ml-md"
        ></q-btn>
        <q-btn
          flat
          round
          :icon="props.inFullscreen ? 'mdi-fullscreen-exit' : 'mdi-fullscreen'"
          @click="props.toggleFullscreen"
          class="q-ml-md"
        >
        </q-btn>
      </template>
    </q-table>
  </q-page>
  <router-view :returnTo="{ name: 'teams' }"></router-view>
</template>
<script setup>
import { onMounted } from 'vue';
import { useTeamStore } from '../stores/team-store';
import { useRouter } from 'vue-router';
const router = useRouter();
const teamStore = useTeamStore();

onMounted(async () => {
  await teamStore.fetchTeams();
});

const newTeam = () => router.push({ name: 'newTeam' });

const rowClickHandler = (_event, row) => {
  router.push({ name: 'updateTeam', params: { id: row.id } });
};

const pagination = {
  sortBy: 'shortName',
  rowsPerPage: 0,
};

const columns = [
  {
    name: 'name',
    field: 'name',
    label: 'Name',
    required: true,
    align: 'left',
    sortable: true,
  },
  {
    name: 'users',
    field: row => row.users.items.length > 0 ? row.users.items.length : '-',
    label: 'Users',
    required: true,
    align: 'center',
    sortable: true,
  },
];
</script>
