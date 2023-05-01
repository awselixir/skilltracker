<template>
  <q-page padding>
    <transition
      appear
      enter-active-class="animated fadeIn"
      leave-active-class="animated fadeOut"
    >
      <div v-if="!scoreStore.dashboardLoading">
        <div class="row q-col-gutter-sm">
          <HighlightCard
            icon="mdi-certificate"
            class="col-12 col-md"
            color="purple"
            text-color="white"
            :label="scoreStore.totalCerts"
            text="Certs Earned"
            :to="{ name: 'certs' }"
          />
          <HighlightCard
            icon="mdi-account"
            class="col-12 col-md"
            color="red"
            text-color="white"
            :label="scoreStore.certifiedUsers"
            text="Certified Users"
            :to="{ name: 'users' }"
          />
          <HighlightCard
            icon="mdi-scoreboard"
            class="col-12 col-md"
            color="blue"
            text-color="white"
            :label="scoreStore.totalScore"
            text="Total Score"
          />
          <HighlightCard
            icon="mdi-domain"
            class="col-12 col-md"
            color="green"
            text-color="white"
            label="AWS"
            text="Top Provider"
            :to="{ name: 'providers' }"
          />
        </div>
        <div class="row q-col-gutter-sm q-pt-md">
          <div class="col-12 col-md">
            <q-card class="col-12 col-md bg-teal-6" square>
              <q-card-section class="text-h6 text-white"
                >Popular Certs</q-card-section
              >
              <q-card-section>
                <BarChart :dataset="scoreStore.topCerts" color="teal" />
              </q-card-section>
            </q-card>
          </div>
          <div class="col-12 col-md">
            <q-card class="col-12 col-md bg-orange-6" square>
              <q-card-section class="text-h6 text-white"
                >Score by State</q-card-section
              >
              <q-card-section>
                <GeoChart
                  color="orange"
                  :dataset="scoreStore.scoreByState"
                  :max="scoreStore.scoreByStateMax"
                />
              </q-card-section>
            </q-card>
          </div>
          <div class="col-12 col-md">
            <q-card class="col-12 col-md bg-indigo-6" square>
              <q-card-section class="text-h6 text-white"
                >Popular Skills</q-card-section
              >
              <q-card-section>
                <BarChart :dataset="scoreStore.topCerts" color="indigo" />
              </q-card-section>
            </q-card>
          </div>
        </div>
        <div class="row q-col-gutter-sm q-pt-md">
          <div class="col-12 col-md">
            <q-table
              :columns="[
                {
                  name: 'name',
                  field: (row) => `${row.firstName} ${row.lastName}`,
                  label: 'Name',
                  required: true,
                  align: 'left',
                  sortable: false,
                },
                {
                  name: 'certs',
                  field: (row) =>
                    row.certifications.items.length > 0
                      ? row.certifications.items.length
                      : '-',
                  label: 'Certs',
                  required: false,
                  align: 'center',
                  sortable: false,
                },
                {
                  name: 'score',
                  field: (row) => {
                    if (row.certifications.items.length > 0) {
                      return row.certifications.items.reduce(
                        (acc, cert) =>
                          acc + cert.certification.certificationLevel.score,
                        0
                      );
                    } else {
                      return '-';
                    }
                  },
                  label: 'Score',
                  required: false,
                  align: 'center',
                  sortable: false,
                },
              ]"
              square
              :rows="userStore.users"
              binary-state-sort
              title="User Leaderboard"
              :pagination="{
                sortBy: 'score',
                rowsPerPage: 10,
                descending: true,
              }"
              hide-bottom
              no-data-label="No users yet"
              :loading="userStore.usersLoading"
              row-key="id"
              @row-click="
                (_event, row) =>
                  router.push({ name: 'user', params: { id: row.id } })
              "
            >
              <template v-slot:body-cell-name="props">
                <q-td :props="props">
                  <q-item class="q-pa-none" dense>
                    <q-item-section avatar>
                      <q-avatar
                        :color="props.row.color"
                        text-color="white"
                        size="md"
                        >{{ props.row.firstName[0] }}</q-avatar
                      >
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
            </q-table>
          </div>
          <div class="col-12 col-md">
            <q-table
              :columns="[
                {
                  name: 'name',
                  field: 'name',
                  label: 'Name',
                  required: true,
                  align: 'left',
                  sortable: false,
                },
                {
                  name: 'certs',
                  field: (row) =>
                    calculateTeamsCerts(row) > 0
                      ? calculateTeamsCerts(row)
                      : '-',
                  label: 'Certs',
                  required: false,
                  align: 'center',
                  sortable: false,
                },
              ]"
              square
              :rows="teamStore.teams"
              binary-state-sort
              title="Team Leaderboard"
              :pagination="{
                sortBy: 'certs',
                rowsPerPage: 10,
                descending: true,
              }"
              hide-bottom
              no-data-label="No teams yet"
              :loading="teamStore.teamsLoading"
              row-key="id"
              @row-click="
                (_event, row) =>
                  router.push({ name: 'user', params: { id: row.id } })
              "
            >
              <template v-slot:body-cell-name="props">
                <q-td :props="props">
                  <q-item class="q-pa-none" dense>
                    <q-item-section avatar>
                      <q-avatar
                        :color="props.row.color"
                        text-color="white"
                        size="md"
                        >{{ props.row.name[0] }}</q-avatar
                      >
                    </q-item-section>
                    <q-item-section>{{ props.value }}</q-item-section>
                  </q-item>
                </q-td>
              </template>
              <template v-slot:body-cell-certs="props">
                <q-td auto-width :props="props">
                  {{ props.value }}
                </q-td>
              </template>
            </q-table>
          </div>
        </div>
      </div>
    </transition>
    <q-inner-loading :showing="scoreStore.dashboardLoading">
      <q-spinner size="50px" color="primary" />
    </q-inner-loading>
  </q-page>
</template>

<script setup>
import BarChart from 'components/BarChart.vue';
import GeoChart from 'src/components/GeoChart.vue';
import HighlightCard from 'src/components/HighlightCard.vue';
import { useRouter } from 'vue-router';
import { useScoreStore } from 'src/stores/score-store';
import { useTeamStore } from 'src/stores/team-store';
import { useUserStore } from 'src/stores/user-store';
import { calculateTeamsCerts } from 'src/shared/functions';

const router = useRouter();
const scoreStore = useScoreStore();
const teamStore = useTeamStore();
const userStore = useUserStore();
</script>
