<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<template>
  <q-page padding>
    <transition
      appear
      enter-active-class="animated fadeIn"
      leave-active-class="animated fadeOut"
    >
      <div v-show="!loading">
        <q-card class="q-mb-md">
          <q-card-section>
            <div class="row items-center q-col-gutter-md">
              <div class="col-md-1 col-auto">
                <q-img
                  height="100px"
                  width="100px"
                  :src="`/icons/${item.provider.shortName.toLowerCase()}-${item.shortName.toLowerCase()}.png`"
                />
              </div>
              <div class="col-md col-12">
                <div class="text-h4 q-mb-sm">{{ item.name }}</div>
                <div class="text-caption text-grey-8">
                  {{ item.description }}
                </div>
              </div>
              <div class="col-md-auto col-12">
                <q-list>
                  <q-item :to="{ name: 'certifications' }" class="q-px-none">
                    <q-item-section>
                      <q-item-label class="text-black">Provider</q-item-label>
                      <q-item-label class="text-primary">{{
                        item.provider.name
                      }}</q-item-label>
                    </q-item-section>
                  </q-item>
                  <q-item :to="{ name: 'levels' }" class="q-px-none">
                    <q-item-section>
                      <q-item-label class="text-black">Level</q-item-label>
                      <q-item-label class="text-primary">{{
                        item.level.name
                      }}</q-item-label>
                    </q-item-section>
                  </q-item>
                </q-list>
              </div>
            </div>
          </q-card-section>
        </q-card>
        <q-table
          title="Earned"
          :columns="columns"
          no-data-label="No users have earned this certification yet"
          :pagination="pagination"
          binary-state-sort
          :rows="item.users"
          @row-click="
            (_event, row) =>
              router.push({ name: 'user', params: { id: row.user.id } })
          "
        >
          <template v-slot:top="props">
            <div class="q-table__title">Earned</div>
            <q-space></q-space>
            <q-btn
              flat
              round
              icon="mdi-plus"
              @click="
                router.push({
                  name: 'addUserCert',
                  params: { id: route.params.id },
                })
              "
              class="q-ml-sm"
              v-if="filteredAvailableUsers.length > 0 && userStore.isAdmin"
            />
            <q-btn
              flat
              round
              icon="mdi-pencil"
              @click="
                router.push({
                  name: 'editCert',
                  params: { id: route.params.id },
                })
              "
              class="q-ml-sm"
              v-if="userStore.isAdmin"
            />
            <q-btn
              flat
              round
              :icon="
                props.inFullscreen ? 'mdi-fullscreen-exit' : 'mdi-fullscreen'
              "
              @click="props.toggleFullscreen"
              class="q-ml-sm"
              v-if="$q.screen.gt.sm"
            />
          </template>
          <template v-slot:body-cell-name="props">
            <q-td :props="props">
              <q-item>
                <q-item-section avatar>
                  <q-avatar
                    :color="props.row.user.color"
                    text-color="white"
                    size="md"
                    >{{ props.row.user.firstName[0] }}</q-avatar
                  >
                </q-item-section>
                <q-item-section>{{ props.value }}</q-item-section>
              </q-item>
            </q-td>
          </template>
        </q-table>
      </div>
    </transition>
    <q-inner-loading :showing="loading">
      <q-spinner size="50px" color="primary" />
    </q-inner-loading>
    <router-view @updated="fetchCert" />
  </q-page>
</template>
<script setup>
import { computed, onMounted, reactive, ref } from 'vue';
import { useQuasar } from 'quasar';
import { orderBy } from 'lodash';
import { useRoute, useRouter } from 'vue-router';
import { useCertificationStore } from 'src/stores/certification-store';
import { useUserStore } from 'src/stores/user-store';

const $q = useQuasar();

const route = useRoute();
const router = useRouter();

const certStore = useCertificationStore();
const userStore = useUserStore();

const loading = ref(true);

const item = reactive({
  id: '',
  name: '',
  description: '',
  shortName: '',
  level: {
    id: '',
    name: '',
  },
  provider: {
    id: '',
    name: '',
    shortName: '',
  },
  users: [],
});

const sortedUsers = computed(() => {
  return orderBy(userStore.users, 'firstName', 'asc');
});

const existingUserIds = computed(() => {
  return item.users.map((item) => item.user.id);
});

const filteredAvailableUsers = computed(() => {
  return sortedUsers.value.filter(
    (user) => !existingUserIds.value.includes(user.id)
  );
});

const columns = [
  {
    name: 'name',
    field: (row) => `${row.user.firstName} ${row.user.lastName}`,
    label: 'Name',
    required: true,
    align: 'left',
    sortable: true,
  },
];

const pagination = reactive({
  sortBy: 'name',
  rowsPerPage: 10,
});

const fetchCert = async () => {
  // const cert = await API.graphql({
  //   query: getCertification,
  //   variables: { id: route.params.id },
  // });

  const cert = await certStore.fetchCertification(route.params.id);

  if (cert) {
    const {
      id,
      name,
      description,
      provider,
      shortName,
      certificationLevel,
      users,
    } = cert.data?.getCertification;
    item.id = id;
    item.name = name;
    item.description = description;
    item.shortName = shortName;
    item.provider.id = provider.id;
    item.provider.name = provider.name;
    item.provider.shortName = provider.shortName;
    item.level.id = certificationLevel.id;
    item.level.name = certificationLevel.name;
    item.users = users.items;
    loading.value = false;
  }
};

onMounted(async () => {
  await fetchCert();
});
</script>
