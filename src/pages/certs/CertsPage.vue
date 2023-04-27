<template>
  <q-page padding>
    <q-table
      :columns="certsPageColumns"
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
      <template v-slot:body-cell-name="props">
        <q-td :props="props">
          <q-item class="q-pa-none" dense>
            <q-item-section avatar>
              <q-avatar size="sm">
              <q-img :src="`/icons/${props.row.provider.shortName.toLowerCase()}-${props.row.shortName.toLowerCase()}.png`" height="24px" width="24px" />
            </q-avatar>
            </q-item-section>
            <q-item-section>{{  props.value }} ({{ props.row.shortName }})</q-item-section>
          </q-item>
        </q-td>
      </template>
      <template v-slot:body-cell-earned="props">
        <q-td auto-width :props="props">
          {{ props.value }}
        </q-td>
      </template>
    </q-table>
  </q-page>
  <router-view :returnTo="{ name: 'certifications' }"></router-view>
</template>
<script setup>
import { onMounted } from 'vue';
import { useCertificationStore } from '../../stores/certification-store';
import { useRouter } from 'vue-router';
import { certsPageColumns } from 'src/components/columns';

const router = useRouter();
const certificationStore = useCertificationStore();

onMounted(async () => {
  await certificationStore.fetchCertifications();
});

const newCertification = () => router.push({ name: 'newCertification' });

const rowClickHandler = (_event, row) => {
  router.push({ name: 'cert', params: { id: row.id } });
};

const pagination = {
  sortBy: 'name',
  rowsPerPage: 0,
};
</script>
