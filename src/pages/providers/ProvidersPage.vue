<template>
  <q-page padding>
    <q-table
      :columns="columns"
      square
      :rows="providerStore.providers"
      binary-state-sort
      :pagination="pagination"
      hide-bottom
      no-data-label="No providers yet"
      :loading="providerStore.providersLoading"
      row-key="id"
      @row-click="rowClickHandler"
      :grid="$q.screen.lt.md"
      class="providers-table"
    >
      <template v-slot:top="props">
        <div class="q-table__title">Providers</div>
        <q-space></q-space>
        <q-btn
          flat
          round
          icon="mdi-plus"
          @click="newProvider"
          class="q-ml-md"
          v-if="userStore.isAdmin"
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
                <q-img
                  :src="`/icons/${props.row.shortName.toLowerCase()}.png`"
                  height="24px"
                  width="24px"
                />
              </q-avatar>
            </q-item-section>
            <q-item-section
              >{{ props.value }} ({{ props.row.shortName }})</q-item-section
            >
          </q-item>
        </q-td>
      </template>
    </q-table>
  </q-page>
  <router-view :returnTo="{ name: 'providers' }"></router-view>
</template>
<script setup>
import { onMounted } from 'vue';
import { useProviderStore } from '../../stores/provider-store';
import { useUserStore } from 'src/stores/user-store';
import { useRouter } from 'vue-router';

const router = useRouter();

const providerStore = useProviderStore();
const userStore = useUserStore();

onMounted(async () => {
  await providerStore.fetchProviders();
});

const newProvider = () => router.push({ name: 'newProvider' });

const rowClickHandler = (_event, row) => {
  router.push({ name: 'updateProvider', params: { id: row.id } });
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
    name: 'availableCerts',
    field: (row) => row.certifications.items.length,
    label: 'Available Certs',
    required: false,
    align: 'center',
    sortable: true,
  },
];
</script>
