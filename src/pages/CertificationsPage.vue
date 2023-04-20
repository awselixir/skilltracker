<template>
  <q-page padding>
    <q-table
      :columns="columns"
      square
      :rows="certificationStore.certifications"
      binary-state-sort
      :pagination="pagination"
      hide-bottom
      no-data-label="No certifications yet"
      :loading="certificationStore.certificationsLoading"
      row-key="id"
      @row-click="rowClickHandler"
      :grid="$q.screen.lt.md"
      class="certifications-table"
    >
      <template v-slot:top="props">
        <div class="q-table__title">Certifications</div>
        <q-space></q-space>
        <q-btn
          flat
          round
          icon="mdi-plus"
          @click="newCertification"
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
      <!-- <template v-slot:body-cell-description="props">
        <q-td :props="props">
          <div class="description-cell text-grey-8"> {{ props.row.description }}</div>
        </q-td>
      </template> -->
    </q-table>
  </q-page>
  <router-view :returnTo="{ name: 'certifications' }"></router-view>
</template>
<script setup>
import { onMounted } from 'vue';
import { useCertificationStore } from '../stores/certification-store';
import { useRouter } from 'vue-router';
const router = useRouter();
const certificationStore = useCertificationStore();

onMounted(async () => {
  await certificationStore.fetchCertifications();
});

const newCertification = () => router.push({ name: 'newCertification' });

const rowClickHandler = (_event, row) => {
  router.push({ name: 'updateCertification', params: { id: row.id } });
};

const pagination = {
  sortBy: 'shortName',
  rowsPerPage: 0,
};

const columns = [
  {
    name: 'shortName',
    field: 'shortName',
    label: 'Short Name',
    required: true,
    align: 'center',
    sortable: true,
    style: 'width: 200px',
  },
  {
    name: 'name',
    field: 'name',
    label: 'Name',
    required: true,
    align: 'left',
    sortable: true,
  },
  {
    name: 'provider',
    field: row => row.provider.shortName,
    label: 'Provider',
    required: true,
    align: 'left',
    sortable: true,
  },
  {
    name: 'level',
    field: row => row.certificationLevel.name,
    label: 'Level',
    required: true,
    align: 'left',
    sortable: true,
  },
];
</script>
