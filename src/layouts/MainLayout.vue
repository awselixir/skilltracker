<template>
  <Authenticator :form-fields="formFields">
    <q-layout view="lHh Lpr lFf">
      <q-header elevated>
        <q-toolbar class="bg-blue-grey-10">
          <q-btn
            flat
            dense
            round
            icon="mdi-menu"
            aria-label="Menu"
            @click="toggleLeftDrawer"
          />

          <q-toolbar-title> Skill Tracker </q-toolbar-title>
          <q-btn-dropdown
            rounded
            :color="userStore.me.color"
            :label="`${userStore.me.firstName[0]}`"
            unelevated
            class="without-icon"
            v-if="userStore.me.firstName.length > 0"
          >
            <q-list>
              <q-item
                clickable
                v-close-popup
                @click="
                  router.push({ name: 'user', params: { id: userStore.me.id } })
                "
              >
                <q-item-section avatar>
                  <q-icon name="mdi-account" />
                </q-item-section>
                <q-item-section> My Profile </q-item-section>
              </q-item>
              <q-separator />
              <q-item clickable v-close-popup @click="auth.signOut">
                <q-item-section avatar>
                  <q-icon name="mdi-logout" />
                </q-item-section>
                <q-item-section> Sign Out </q-item-section>
              </q-item>
            </q-list>
          </q-btn-dropdown>
          <q-btn
            icon="mdi-filter"
            flat
            dense
            round
            @click="toggleRightDrawer"
          />
        </q-toolbar>
      </q-header>

      <q-drawer v-model="leftDrawerOpen" show-if-above class="bg-blue-grey-10">
        <q-list>
          <q-item clickable :to="{ name: 'index' }" class="text-white">
            <q-item-section avatar>
              <q-icon name="mdi-view-dashboard" color="white" />
            </q-item-section>

            <q-item-section>
              <q-item-label>Dashboard</q-item-label>
            </q-item-section>
          </q-item>
          <q-item clickable :to="{ name: 'providers' }" class="text-white">
            <q-item-section avatar>
              <q-icon name="mdi-domain" color="white" />
            </q-item-section>

            <q-item-section>
              <q-item-label>Providers</q-item-label>
            </q-item-section>
          </q-item>
          <q-item clickable :to="{ name: 'users' }" class="text-white">
            <q-item-section avatar>
              <q-icon name="mdi-account" color="white" />
            </q-item-section>

            <q-item-section>
              <q-item-label>Users</q-item-label>
            </q-item-section>
          </q-item>
          <q-item :to="{ name: 'teams' }" class="text-white">
            <q-item-section avatar>
              <q-icon name="mdi-account-group" color="white" />
            </q-item-section>

            <q-item-section>
              <q-item-label>Teams</q-item-label>
            </q-item-section>
          </q-item>
          <q-item clickable :to="{ name: 'certs' }" class="text-white">
            <q-item-section avatar>
              <q-icon name="mdi-certificate" color="white" />
            </q-item-section>

            <q-item-section>
              <q-item-label>Certifications</q-item-label>
            </q-item-section>
          </q-item>
          <q-item clickable :to="{ name: 'skills' }" class="text-white">
            <q-item-section avatar>
              <q-icon name="mdi-school" color="white" />
            </q-item-section>

            <q-item-section>
              <q-item-label>Skills</q-item-label>
            </q-item-section>
          </q-item>
          <q-item
            :to="{ name: 'levels' }"
            class="text-white"
            v-if="userStore.me.isAdmin"
          >
            <q-item-section avatar>
              <q-icon name="mdi-stairs-box" color="white" />
            </q-item-section>

            <q-item-section>
              <q-item-label>Levels</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-drawer>

      <q-page-container>
        <router-view />
      </q-page-container>
      <q-drawer
        side="right"
        class="bg-blue-grey-3 q-pa-md"
        v-model="rightDrawerOpen"
      >
        <q-list separator>
          <!-- <q-item-label>Filters</q-item-label>
        <q-select multiple v-model="filters.domains" label="Domains" color="primary" :options="filtersOptions.domains"></q-select>
        <q-select multiple v-model="filters.levels" label="Levels" color="primary" :options="filtersOptions.levels"></q-select>
        <q-select multiple v-model="filters.teams" label="Teams" color="primary" :options="filtersOptions.teams"></q-select> -->
        </q-list>
      </q-drawer>
    </q-layout>
  </Authenticator>
</template>

<script setup>
import { ref, watch } from 'vue';
import { useRouter } from 'vue-router';
import { useCertificationStore } from 'src/stores/certification-store';
import { useLevelStore } from '../stores/level-store';
import { useProviderStore } from '../stores/provider-store';
import { useScoreStore } from '../stores/score-store';
import { useSkillStore } from 'src/stores/skill-store';
import { useTeamStore } from 'src/stores/team-store';
import { useUserStore } from '../stores/user-store';
import '@aws-amplify/ui-vue/styles.css';
import { Amplify } from 'aws-amplify';
import { Authenticator, useAuthenticator } from '@aws-amplify/ui-vue';
import awsconfig from '../aws-exports';

const auth = useAuthenticator();

// const groups = user.value.getSignInUserSession()?.getAccessToken()?.payload[
//   'cognito:groups'
// ];

Amplify.configure(awsconfig);

const router = useRouter();

const certificationStore = useCertificationStore();
const levelStore = useLevelStore();
const providerStore = useProviderStore();
const scoreStore = useScoreStore();
const skillStore = useSkillStore();
const teamStore = useTeamStore();
const userStore = useUserStore();

const formFields = {
  signUp: {
    given_name: {
      order: 1,
      placeholder: 'Enter your first name',
      label: 'First Name',
    },
    family_name: {
      order: 2,
      placeholder: 'Enter your last name',
      label: 'Last Name',
    },
    email: {
      order: 3,
      placeholder: 'Enter your email address',
      label: 'Email',
    },
    password: {
      order: 4,
    },
    confirm_password: {
      order: 5,
    },
  },
};

const leftDrawerOpen = ref(false);
const rightDrawerOpen = ref(false);

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}

function toggleRightDrawer() {
  rightDrawerOpen.value = !rightDrawerOpen.value;
}

const fetchData = async () => {
  await Promise.allSettled([
    certificationStore.fetchCertifications(),
    providerStore.fetchProviders(),
    levelStore.fetchCertsLevels(),
    userStore.fetchUsers(),
    skillStore.fetchSkills(),
    teamStore.fetchTeams(),
    userStore.fetchMe(auth.user.username),
  ]);
  scoreStore.dashboardLoading = false;
};

watch(
  auth,
  async (newAuth) => {
    if (newAuth.route === 'authenticated') {
      await fetchData();
    }
    if (
      typeof newAuth.user !== 'undefined' &&
      newAuth.user.signInUserSession !== 'undefined'
    ) {
      const groups =
        newAuth.user.signInUserSession.accessToken.payload['cognito:groups'];
      if (groups.includes('admins')) {
        userStore.isAdmin = true;
      }
    }
  },
  { deep: true }
);

// onMounted(async () => {
//   await Promise.allSettled([
//     certificationStore.fetchCertifications(),
//     providerStore.fetchProviders(),
//     levelStore.fetchCertsLevels(),
//     userStore.fetchUsers(),
//   ]);
//   scoreStore.dashboardLoading = false
//   const myId = me.value.username;
//   await userStore.fetchMe(myId);
// });
</script>
