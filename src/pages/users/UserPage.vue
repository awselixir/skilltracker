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
              <div class="col-md-auto col-12">
                <q-avatar :color="item.color" text-color="white" size="75px">{{
                  item.firstName[0]
                }}</q-avatar>
              </div>
              <div class="col-md col-12">
                <div class="text-h4 q-mb-sm">
                  {{ item.firstName }} {{ item.lastName }}
                </div>
                <div class="row q-col-gutter-sm items-center">
                  <div class="col-md-auto col-2">
                    Email:
                  </div>
                  <div class="col-10 text-grey-8 col-md-auto">{{  item.email }}</div>
                  <div class="col-md-auto col-2" v-if="item.title">
                    Title:
                  </div>
                  <div class="col-md-auto col-10 text-grey-8" v-if="item.title">{{  item.title }}</div>
                  <div class="col-md-auto col-2" v-if="item.state">
                    State:
                  </div>
                  <div class="col-md-auto col-10 text-grey-8" v-if="item.state">{{  item.state }}</div>
                  <div class="col-md-auto col-2">Certs</div>
                  <div class="col-md-auto col-10 text-grey-8">
                    {{ item.certifications.length > 0 ? item.certifications.length : '-' }}
                  </div>
                  <div class="col-md-auto col-2">Score</div>
                  <div class="col-md-auto col-10 text-grey-8">{{calculateScore()}}</div>
                </div>
              </div>
            </div>
          </q-card-section>
        </q-card>
        <q-table
          title="Certs"
          :visible-columns="visibleColumns"
          :columns="columns"
          no-data-label="No certifications earned yet"
          :pagination="pagination"
          binary-state-sort
          :rows="item.certifications"
          @row-click="
            (_event, row) =>
              router.push({
                name: 'cert',
                params: { id: row.certification.id },
              })
          "
        >
          <template v-slot:top="props">
            <div class="q-table__title">Certs</div>
            <q-space></q-space>
            <q-btn
              flat
              round
              icon="mdi-pencil"
              @click="
                router.push({
                  name: 'editUser',
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
                  <q-avatar size="md">
                    <q-img
                      :src="`/icons/${props.row.certification.provider.shortName.toLowerCase()}-${props.row.certification.shortName.toLowerCase()}.png`"
                      height="30px"
                      width="30px"
                    />
                  </q-avatar>
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
    <router-view @updated="fetchUser" />
  </q-page>
</template>
<script setup>
import { computed, onMounted, reactive, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useQuasar } from 'quasar';
import { useUserStore } from 'src/stores/user-store';

const route = useRoute();
const router = useRouter();
const userStore = useUserStore();
const $q = useQuasar();

const loading = ref(true);

const visibleColumns = computed(() => {
  return $q.screen.lt.md ? ['name'] : ['name', 'earnedAt']
});

const item = reactive({
  id: '',
  firstName: '',
  lastName: '',
  email: '',
  color: '',
  state: '',
  title: '',
  certifications: []
});

const calculateScore = () => {
  if (item.certifications.length > 0) {
    return item.certifications.reduce(
      (acc, cert) => acc + cert.certification.certificationLevel.score,
      0
    );
  } else {
    return '-';
  }
};

const columns = [
  {
    name: 'name',
    field: (row) => row.certification.name,
    label: 'Name',
    required: true,
    align: 'left',
    sortable: true,
  },
  {
    name: 'earnedAt',
    field: 'earnedAt',
    label: 'Earned',
    required: false,
    align: 'center',
    sortable: true,
  },
];

const pagination = reactive({
  sortBy: 'name',
  rowsPerPage: 10,
});

const fetchUser = async () => {
  const user = await userStore.fetchUser(route.params.id);

  const { id, firstName, lastName, color, certifications, email, state, title } = user.data?.getUser;
  item.id = id;
  item.firstName = firstName;
  item.lastName = lastName;
  item.email = email;
  item.color = color;
  item.state = state;
  item.title = title
  item.certifications = certifications.items;
  loading.value = false;
};

onMounted(async () => {
  await fetchUser();
});
</script>
