<template>
  <q-page padding>
    <q-table
      :columns="certsLevelsColumns"
      square
      :rows="levelStore.certsLevels"
      binary-state-sort
      :pagination="certsLevelsPagination"
      hide-bottom
      no-data-label="No certification levels yet"
      :loading="levelStore.certLevelsLoading"
      row-key="id"
      @row-click="rowClickHandler"
      :grid="$q.screen.lt.md"
      ><template v-slot:top="props">
        <div class="q-table__title">Certification Levels</div>
        <q-space></q-space>
        <q-btn
          flat
          round
          icon="mdi-plus"
          @click="newCertLevel"
          class="q-ml-md"
        ></q-btn>
        <q-btn
          flat
          round
          :icon="props.inFullscreen ? 'mdi-fullscreen-exit' : 'mdi-fullscreen'"
          @click="props.toggleFullscreen"
          class="q-ml-md"
        ></q-btn> </template
    ></q-table>
  </q-page>
  <router-view :returnTo="{ name: 'levels' }"></router-view>
</template>
<script setup>
import { onMounted } from 'vue';
import { useLevelStore } from '../stores/level-store';
import { useRouter } from 'vue-router';
const router = useRouter();
const levelStore = useLevelStore();

const newCertLevel = () => router.push({ name: 'newCertLevel' });

const rowClickHandler = (_event, row) => {
  router.push({name: 'updateCertLevel', params: {id: row.id}})
}

onMounted(async () => {
  await levelStore.fetchCertsLevels();
});

const certsLevelsPagination = {
  sortBy: 'score',
  rowsPerPage: 0,
};

const certsLevelsColumns = [
  {
    name: 'name',
    field: 'name',
    label: 'Name',
    required: true,
    align: 'left',
    sortable: true,
  },
  {
    name: 'description',
    field: 'description',
    label: 'Description',
    required: false,
    align: 'left',
    sortable: false,
  },
  {
    name: 'score',
    field: 'score',
    label: 'Score',
    required: true,
    align: 'center',
    sortable: true,
  },
];
</script>
