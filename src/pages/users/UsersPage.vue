<template>
  <q-page padding>
    <q-table
      :columns="usersPageColumns"
      square
      :rows="userStore.users"
      binary-state-sort
      :pagination="pagination"
      no-data-label="No users yet"
      :loading="userStore.usersLoading"
      row-key="id"
      @row-click="rowClickHandler"
      :grid="$q.screen.lt.md"
    >
      <template v-slot:top="props">
        <div class="q-table__title">Users</div>
        <q-space></q-space>
        <q-btn
          flat
          round
          :icon="props.inFullscreen ? 'mdi-fullscreen-exit' : 'mdi-fullscreen'"
          @click="props.toggleFullscreen"
          class="q-ml-md"
          v-if="$q.screen.gt.sm"
        >
        </q-btn>
      </template>
      <template v-slot:body-cell-name="props">
        <q-td :props="props">
          <q-item class="q-pa-none" dense>
            <q-item-section avatar>
              <q-avatar :color="props.row.color" text-color="white" size="md">{{
                props.row.firstName[0]
              }}</q-avatar>
            </q-item-section>
            <q-item-section>{{ props.value }}</q-item-section>
          </q-item>
        </q-td>
      </template>
      <template v-slot:body-cell-earned="props">
        <q-td auto-width :props="props">
          {{ props.value }}
        </q-td>
      </template>
      <template v-slot:item="props">
        <div
          class="q-pa-xs col-xs-12 col-sm-6"
          @click="router.push({ name: 'user', params: { id: props.row.id } })"
        >
          <q-card>
            <q-card-section class="q-py-none">
              <q-item class="q-pa-none">
                <q-item-section avatar>
                  <q-avatar
                    :color="props.row.color"
                    text-color="white"
                    size="md"
                    >{{ props.row.firstName[0] }}</q-avatar
                  >
                </q-item-section>
                <q-item-section
                  >{{ props.row.firstName }}
                  {{ props.row.lastName }}</q-item-section
                >
              </q-item>
            </q-card-section>
            <q-separator></q-separator>
            <q-card-section class="q-py-none">
              <q-item dense class="q-px-none">
                <q-item-section> Certs </q-item-section>
                <q-item-section side>
                  {{
                    props.row.certifications.items.length > 0
                      ? props.row.certifications.items.length
                      : '-'
                  }}
                </q-item-section>
              </q-item>
              <q-item dense class="q-px-none">
                <q-item-section>Score</q-item-section>
                <q-item-section side>
                  {{ calculateScore(props.row) }}
                </q-item-section>
              </q-item>
            </q-card-section>
          </q-card>
        </div>
      </template>
    </q-table>
  </q-page>
  <router-view></router-view>
</template>
<script setup>
import { reactive, onMounted } from 'vue';
import { useQuasar } from 'quasar';
import { useUserStore } from 'src/stores/user-store';
import { useRouter } from 'vue-router';
import { usersPageColumns } from 'src/shared/columns';

const $q = useQuasar();
const router = useRouter();
const userStore = useUserStore();

onMounted(async () => {
  await userStore.fetchUsers();
});

const calculateScore = (row) => {
  if (row.certifications.items.length > 0) {
    return row.certifications.items.reduce(
      (acc, cert) => acc + cert.certification.certificationLevel.score,
      0
    );
  } else {
    return '-';
  }
};

const rowClickHandler = (_event, row) => {
  router.push({ name: 'user', params: { id: row.id } });
};

const pagination = reactive({
  sortBy: 'name',
  rowsPerPage: 20,
});
</script>
