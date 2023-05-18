<template>
  <q-page padding>
    <q-table
      :columns="certsPageColumns"
      square
      :rows="certificationStore.certifications"
      binary-state-sort
      :pagination="pagination"
      no-data-label="No certifications yet"
      :loading="certificationStore.certificationsLoading"
      row-key="id"
      @row-click="rowClickHandler"
      :grid="$q.screen.lt.md"
      grid-header
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
          v-if="userStore.isAdmin"
        ></q-btn>
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
              <q-avatar size="sm">
                <q-img
                  :src="`/icons/${props.row.provider.shortName.toLowerCase()}-${props.row.shortName.toLowerCase()}.png`"
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
      <template v-slot:body-cell-earned="props">
        <q-td auto-width :props="props">
          {{ props.value }}
        </q-td>
      </template>
      <template v-slot:item="props">
        <div
          class="q-pa-xs col-xs-12 col-sm-6"
          @click="router.push({ name: 'cert', params: { id: props.row.id } })"
        >
          <q-card>
            <q-card-section class="q-py-none">
              <q-item class="q-pa-none">
                <q-item-section avatar>
                  <q-avatar size="md">
                    <q-img
                      :src="`/icons/${props.row.provider.shortName.toLowerCase()}-${props.row.shortName.toLowerCase()}.png`"
                      height="30px"
                      width="30px"
                    />
                  </q-avatar>
                </q-item-section>
                <q-item-section
                  >{{ props.row.name }} ({{
                    props.row.shortName
                  }})</q-item-section
                >
              </q-item>
            </q-card-section>
            <q-separator></q-separator>
            <q-card-section class="q-py-none">
              <q-item dense class="q-px-none">
                <q-item-section> Provider </q-item-section>
                <q-item-section side>
                  {{ props.row.provider.shortName }}
                </q-item-section>
              </q-item>
              <q-item dense class="q-px-none">
                <q-item-section> Level </q-item-section>
                <q-item-section side>
                  {{ props.row.certificationLevel.name }}
                </q-item-section>
              </q-item>
              <q-item dense class="q-px-none">
                <q-item-section> Earned </q-item-section>
                <q-item-section side>
                  {{
                    props.row.users.items.length > 0
                      ? props.row.users.items.length
                      : '-'
                  }}
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
import { useCertificationStore } from '../../stores/certification-store';
import { useUserStore } from 'src/stores/user-store';
import { useRouter } from 'vue-router';
import { certsPageColumns } from 'src/shared/columns';

const $q = useQuasar();
const router = useRouter();

const certificationStore = useCertificationStore();
const userStore = useUserStore();

onMounted(async () => {
  await certificationStore.fetchCertifications();
});

const newCertification = () => router.push({ name: 'newCertification' });

const rowClickHandler = (_event, row) => {
  router.push({ name: 'cert', params: { id: row.id } });
};

const pagination = reactive({
  sortBy: 'name',
  rowsPerPage: 20,
});
</script>
