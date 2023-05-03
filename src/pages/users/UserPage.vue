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
                <div class="row">
                  <div class="col">
                    <q-avatar
                      :color="item.color"
                      text-color="white"
                      size="75px"
                      >{{ item.firstName[0] }}</q-avatar
                    >
                  </div>
                  <div class="col-auto text-center lt-md">
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
                      v-if="userStore.isAdmin || item.id === userStore.me.id"
                    />
                  </div>
                </div>
              </div>
              <div class="col-md col-12">
                <div class="text-h4 q-mb-sm">
                  {{ item.firstName }} {{ item.lastName }}
                </div>
                <div class="row q-col-gutter-sm items-center">
                  <div class="col-md-auto col-2">Email:</div>
                  <div class="col-10 text-grey-8 col-md-auto">
                    {{ item.email }}
                  </div>
                  <div class="col-md-auto col-2" v-if="item.title">Title:</div>
                  <div class="col-md-auto col-10 text-grey-8" v-if="item.title">
                    {{ item.title }}
                  </div>
                  <div class="col-md-auto col-2" v-if="item.state">State:</div>
                  <div class="col-md-auto col-10 text-grey-8" v-if="item.state">
                    {{ item.state }}
                  </div>
                  <div class="col-md-auto col-2">Certs:</div>
                  <div class="col-md-auto col-10 text-grey-8">
                    {{
                      item.certifications.length > 0
                        ? item.certifications.length
                        : '-'
                    }}
                  </div>
                  <div class="col-md-auto col-2">Score:</div>
                  <div class="col-md-auto col-10 text-grey-8">
                    {{ calculateScore() }}
                  </div>
                </div>
              </div>
              <div class="col-auto text-center gt-sm">
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
                  v-if="userStore.isAdmin || item.id === userStore.me.id"
                />
              </div>
            </div>
          </q-card-section>
        </q-card>
        <q-table
          title="Certs"
          :visible-columns="$q.screen.lt.md ? ['name'] : ['name', 'earnedAt']"
          :columns="userPageCertsColumns"
          no-data-label="No certifications earned yet"
          :pagination="certPagination"
          binary-state-sort
          :rows="item.certifications"
          @row-click="
            (_event, row) =>
              router.push({
                name: 'cert',
                params: { id: row.certification.id },
              })
          "
          class="q-mb-md"
          dense
        >
          <template v-slot:top="props">
            <div class="q-table__title">Certs</div>
            <q-space></q-space>
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
              <q-item dense class="q-px-none">
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
        <q-table
          title="Skills"
          :visible-columns="$q.screen.lt.md ? ['name'] : ['name']"
          :columns="userPageSkillsColumns"
          no-data-label="No skills earned yet"
          :pagination="skillPagination"
          binary-state-sort
          :rows="item.skills"
          @row-click="
            (_event, row) =>
              router.push({
                name: 'skill',
                params: { id: row.skill.id },
              })
          "
          dense
        >
          <template v-slot:top="props">
            <div class="q-table__title">Skills</div>
            <q-space></q-space>
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
              <q-item dense class="q-px-none">
                <q-item-section avatar>
                  <q-avatar size="md" square>
                    <q-img
                      :src="`/skills/${props.row.skill.provider.shortName.toLowerCase()}-${props.row.skill.shortName.toLowerCase()}.png`"
                      height="30px"
                      width="30px"
                    />
                  </q-avatar>
                </q-item-section>
                <q-item-section>{{ props.value }}</q-item-section>
              </q-item>
            </q-td>
          </template>
          <template v-slot:body-cell-level="props">
            <q-td :props="props">
              <q-btn-toggle
                :options="skillOptions"
                color="grey-2"
                text-color="grey-8"
                v-model="props.row.level"
                @click.stop
                toggle-color="primary"
                toggle-text-color="white"
                unelevated
                @update:model-value="
                  (value) => userSkillUpdateHandler(props.row.id, value)
                "
              ></q-btn-toggle>
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
import { onMounted, reactive, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useQuasar } from 'quasar';
import { useUserStore } from 'src/stores/user-store';
import _ from 'lodash';
import { error, success } from 'components/messages';
import {
  userPageCertsColumns,
  userPageSkillsColumns,
} from 'src/shared/columns';

const route = useRoute();
const router = useRouter();
const userStore = useUserStore();
const $q = useQuasar();

const loading = ref(true);

const item = reactive({
  id: '',
  firstName: '',
  lastName: '',
  email: '',
  color: '',
  state: '',
  title: '',
  certifications: [],
  skills: [],
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

const certPagination = reactive({
  sortBy: 'name',
  rowsPerPage: 5,
});

const skillPagination = reactive({
  sortBy: 'name',
  rowsPerPage: 5,
  descending: true,
});

const skillOptions = [
  { label: '1', value: 'l1' },
  { label: '2', value: 'l2' },
  { label: '3', value: 'l3' },
];

const fetchUser = async () => {
  const user = await userStore.fetchUser(route.params.id);

  const {
    id,
    firstName,
    lastName,
    color,
    certifications,
    email,
    skills,
    state,
    title,
  } = user.data?.getUser;
  item.id = id;
  item.firstName = firstName;
  item.lastName = lastName;
  item.email = email;
  item.color = color;
  item.state = state;
  item.title = title;
  item.certifications = certifications.items;
  item.skills = _.orderBy(skills.items, 'skill.name', 'asc');
  loading.value = false;
};

const userSkillUpdateHandler = async (id, level) => {
  try {
    await userStore.updateUserSkill({ id: id, level: level });
    success('Skill level updated');
    await fetchUser();
  } catch (err) {
    error('Something went wrong');
  }
};

onMounted(async () => {
  await fetchUser();
});
</script>
