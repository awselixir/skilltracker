<template>
  <q-page padding>
    <q-table
      :columns="teamsPageColumns"
      square
      :rows="teamStore.teams"
      binary-state-sort
      :pagination="pagination"
      no-data-label="No teams yet"
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
          v-if="$q.screen.gt.sm"
        >
        </q-btn>
      </template>
      <template v-slot:body-cell-name="props">
        <q-td :props="props">
          <q-item class="q-pa-none" dense>
            <q-item-section avatar>
              <q-avatar :color="props.row.color" text-color="white" size="md">{{
                props.row.name[0]
              }}</q-avatar>
            </q-item-section>
            <q-item-section>{{ props.value }}</q-item-section>
          </q-item>
        </q-td>
      </template>
      <template v-slot:item="props">
        <div
          class="q-pa-xs col-xs-12 col-sm-6"
          @click="router.push({ name: 'team', params: { id: props.row.id } })"
        >
          <q-card>
            <q-card-section class="q-py-none">
              <q-item class="q-pa-none">
                <q-item-section avatar>
                  <q-avatar
                    :color="props.row.color"
                    text-color="white"
                    size="md"
                    >{{ props.row.name[0] }}</q-avatar
                  >
                </q-item-section>
                <q-item-section>{{ props.row.name }}</q-item-section>
              </q-item>
            </q-card-section>
            <q-separator></q-separator>
            <q-card-section class="q-py-none">
              <q-item dense class="q-px-none">
                <q-item-section> Users </q-item-section>
                <q-item-section side>
                  {{
                    props.row.users.items.length > 0
                      ? props.row.users.items.length
                      : '-'
                  }}
                </q-item-section>
              </q-item>
              <q-item dense class="q-px-none">
                <q-item-section> Certs </q-item-section>
                <q-item-section side>
                  {{
                    calculateTeamsCerts(props.row) > 0
                      ? calculateTeamsCerts(props.row)
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
  <router-view :returnTo="{ name: 'teams' }"></router-view>
</template>
<script setup>
import { reactive, onMounted } from 'vue';
import { useQuasar } from 'quasar';
import { useTeamStore } from '../../stores/team-store';
import { useRouter } from 'vue-router';
import { teamsPageColumns } from 'src/shared/columns';
import { calculateTeamsCerts } from 'src/shared/functions';

const $q = useQuasar();
const router = useRouter();
const teamStore = useTeamStore();

onMounted(async () => {
  await teamStore.fetchTeams();
});

const newTeam = () => router.push({ name: 'newTeam' });

const rowClickHandler = (_event, row) => {
  router.push({ name: 'team', params: { id: row.id } });
};

const pagination = reactive({
  sortBy: 'name',
  rowsPerPage: 10,
});
</script>
