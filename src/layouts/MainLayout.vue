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
        <q-btn icon="mdi-filter" flat dense round @click="toggleRightDrawer"/>
      </q-toolbar>
      </q-header>

      <q-drawer v-model="leftDrawerOpen" show-if-above class="bg-blue-grey-10">
      <q-list>
        <q-item clickable tag="a" target="_blank" href="" class="text-white">
          <q-item-section avatar>
            <q-icon name="mdi-view-dashboard" color="white" />
          </q-item-section>

          <q-item-section>
            <q-item-label>Dashboard</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" target="_blank" href="" class="text-white">
          <q-item-section avatar>
            <q-icon name="mdi-account" color="white" />
          </q-item-section>

          <q-item-section>
            <q-item-label>Users</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" target="_blank" href="" class="text-white">
          <q-item-section avatar>
            <q-icon name="mdi-account-group" color="white" />
          </q-item-section>

          <q-item-section>
            <q-item-label>Teams</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" target="_blank" href="" class="text-white">
          <q-item-section avatar>
            <q-icon name="mdi-domain" color="white" />
          </q-item-section>

          <q-item-section>
            <q-item-label>Domains</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" target="_blank" href="" class="text-white">
          <q-item-section avatar>
            <q-icon name="mdi-certificate" color="white" />
          </q-item-section>

          <q-item-section>
            <q-item-label>Certificates</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

      <q-page-container>
        <router-view />
      </q-page-container>
      <q-drawer side="right" class="bg-blue-grey-3 q-pa-md" v-model="rightDrawerOpen">
      <q-list separator>
        <q-item-label>Filters</q-item-label>
        <q-select multiple v-model="filters.domains" label="Domains" color="primary" :options="filtersOptions.domains"></q-select>
        <q-select multiple v-model="filters.levels" label="Levels" color="primary" :options="filtersOptions.levels"></q-select>
        <q-select multiple v-model="filters.teams" label="Teams" color="primary" :options="filtersOptions.teams"></q-select>
      </q-list>
    </q-drawer>
    </q-layout>
  </Authenticator>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import EssentialLink from 'components/EssentialLink.vue';
import '@aws-amplify/ui-vue/styles.css';
import { Amplify } from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-vue';
import awsconfig from '../aws-exports';

Amplify.configure(awsconfig);

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
      label: 'Last Name'
    },
    email: {
      order: 3,
      placeholder: 'Enter your email address',
      label: 'Email'
    },
    password: {
      order: 4
    },
    confirm_password: {
      order: 5
    }
  },
};

const essentialLinks = [
  {
    title: 'Docs',
    caption: 'quasar.dev',
    icon: 'school',
    link: 'https://quasar.dev',
  },
  {
    title: 'Github',
    caption: 'github.com/quasarframework',
    icon: 'code',
    link: 'https://github.com/quasarframework',
  },
  {
    title: 'Discord Chat Channel',
    caption: 'chat.quasar.dev',
    icon: 'chat',
    link: 'https://chat.quasar.dev',
  },
  {
    title: 'Forum',
    caption: 'forum.quasar.dev',
    icon: 'record_voice_over',
    link: 'https://forum.quasar.dev',
  },
  {
    title: 'Twitter',
    caption: '@quasarframework',
    icon: 'rss_feed',
    link: 'https://twitter.quasar.dev',
  },
  {
    title: 'Facebook',
    caption: '@QuasarFramework',
    icon: 'public',
    link: 'https://facebook.quasar.dev',
  },
  {
    title: 'Quasar Awesome',
    caption: 'Community Quasar projects',
    icon: 'favorite',
    link: 'https://awesome.quasar.dev',
  },
];

const leftDrawerOpen = ref(false);

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}
</script>
