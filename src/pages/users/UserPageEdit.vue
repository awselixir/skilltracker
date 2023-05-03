<template>
  <ModalWrapper
    @cancel="goBack"
    title="Update User"
    action="updateUser"
    @submit="userUpdateHandler"
    :loading="loading"
  >
    <template #default>
      <transition
        appear
        enter-active-class="animated fadeIn"
        leave-active-class="animated fadeOut"
      >
        <div v-show="!loading">
          <q-input
            dense
            v-model="input.firstName"
            label="First Name"
            color="primary"
            bottom-slots
            autofocus
            :rules="[
              (val) => val.length >= 3 || 'Must be at least 3 characters',
            ]"
          />
          <q-input
            v-model="input.lastName"
            label="Last Name"
            color="primary"
            bottom-slots
            dense
            :rules="[
              (val) => val.length > 3 || 'Must be at least 3 characters',
            ]"
          />
          <q-input
            v-model="input.title"
            label="Title"
            color="primary"
            bottom-slots
            dense
            :rules="[
              (val) => val.length > 3 || 'Must be at least 3 characters',
            ]"
          />
          <q-select
            v-model="input.state"
            label="State"
            color="primary"
            bottom-slots
            :options="states"
            dense
          />
          <q-expansion-item icon="mdi-certificate" label="Certifications">
            <q-list>
              <q-item v-if="addCertsBox">
                <q-item-section>
                  <q-select
                    v-model="newCerts"
                    label="Add Certs"
                    color="primary"
                    :options="filteredAvailableCerts"
                    dense
                    option-value="id"
                    :option-label="
                      (item) => (item.length === 0 ? '' : item.name)
                    "
                    multiple
                    use-chips
                  />
                </q-item-section>
              </q-item>
              <q-item>
                <q-item-section
                  ><q-btn
                    icon="mdi-plus"
                    label="Add Certs"
                    dense
                    color="primary"
                    unelevated
                    v-if="!addCertsBox"
                    @click="addCertsBox = true"
                  />
                  <q-btn
                    label="Submit"
                    dense
                    color="primary"
                    unelevated
                    v-else
                    @click="userCertCreateHandler"
                  />
                </q-item-section>
              </q-item>
              <q-item v-for="item in sortedCerts" :key="item.id">
                <q-item-section avatar>
                  <q-avatar size="md">
                    <q-img
                      :src="`/icons/${item.certification.provider.shortName.toLowerCase()}-${item.certification.shortName.toLowerCase()}.png`"
                      height="30px"
                      width="30px"
                    />
                  </q-avatar>
                </q-item-section>
                <q-item-section>{{ item.certification.name }}</q-item-section>
                <q-item-section side>
                  <q-btn
                    icon="mdi-close"
                    round
                    dense
                    flat
                    @click="userCertDeleteHandler(item.id)"
                  />
                </q-item-section>
              </q-item>
            </q-list>
          </q-expansion-item>
          <q-expansion-item icon="mdi-school" label="Skills">
            <q-list>
              <q-item v-if="addSkillsBox">
                <q-item-section>
                  <q-select
                    v-model="newSkills"
                    label="Add Skills"
                    color="primary"
                    :options="filteredAvailableSkills"
                    dense
                    option-value="id"
                    :option-label="
                      (item) => (item.length === 0 ? '' : item.name)
                    "
                    multiple
                    use-chips
                  />
                </q-item-section>
              </q-item>
              <q-item>
                <q-item-section
                  ><q-btn
                    icon="mdi-plus"
                    label="Add Skills"
                    dense
                    color="primary"
                    unelevated
                    v-if="!addSkillsBox"
                    @click="addSkillsBox = true"
                  />
                  <q-btn
                    label="Submit"
                    dense
                    color="primary"
                    unelevated
                    v-else
                    @click="userSkillCreateHandler"
                  />
                </q-item-section>
              </q-item>
              <q-item v-for="item in sortedSkills" :key="item.id">
                <q-item-section avatar>
                  <q-avatar size="md">
                    <q-img
                      :src="`/skills/${item.skill.provider.shortName.toLowerCase()}-${item.skill.shortName.toLowerCase()}.png`"
                      height="30px"
                      width="30px"
                    />
                  </q-avatar>
                </q-item-section>
                <q-item-section>{{ item.skill.name }}</q-item-section>
                <!-- <q-item-section side>
                  <q-btn
                    icon="mdi-close"
                    round
                    dense
                    flat
                    @click="userCertDeleteHandler(item.id)"
                  />
                </q-item-section> -->
              </q-item>
            </q-list>
          </q-expansion-item>
        </div>
      </transition>
    </template>
  </ModalWrapper>
</template>
<script setup>
import ModalWrapper from '../../components/modals/ModalWrapper.vue';
import { computed, onMounted, reactive, ref } from 'vue';
import { orderBy } from 'lodash';
import { useRoute, useRouter } from 'vue-router';
import { useCertificationStore } from 'src/stores/certification-store';
import { useSkillStore } from 'src/stores/skill-store';
import { useUserStore } from '../../stores/user-store';
import { error, success } from 'components/messages';
import states from 'src/shared/states';

const emit = defineEmits(['updated']);

const route = useRoute();
const router = useRouter();

const certStore = useCertificationStore();
const skillStore = useSkillStore();
const userStore = useUserStore();

const loading = ref(true);
const addCertsBox = ref(false);
const addSkillsBox = ref(false);

const input = reactive({
  id: '',
  firstName: '',
  lastName: '',
  state: '',
  title: '',
});

const existingCerts = ref([]);
const newCerts = ref([]);

const existingSkills = ref([]);
const newSkills = ref([]);

const sortedCerts = computed(() => {
  return orderBy(existingCerts.value, 'certification.name', 'asc');
});

const existingCertIds = computed(() => {
  return existingCerts.value.map((item) => item.certification.id);
});

const filteredAvailableCerts = computed(() => {
  return certStore.certifications.filter(
    (cert) => !existingCertIds.value.includes(cert.id)
  );
});

const sortedSkills = computed(() => {
  return orderBy(existingSkills.value, 'skill.name', 'asc');
});

const existingSkillIds = computed(() => {
  return existingSkills.value.map((item) => item.skill.id);
});

const filteredAvailableSkills = computed(() => {
  return skillStore.skills.filter(
    (skill) => !existingSkillIds.value.includes(skill.id)
  );
});

const fetchUser = async () => {
  const user = await userStore.fetchUser(route.params.id);
  const { id, firstName, lastName, state, title, certifications, skills } =
    user.data.getUser;
  input.id = id;
  input.firstName = firstName;
  input.lastName = lastName;
  input.state = state;
  input.title = title;
  existingCerts.value = certifications.items;
  existingSkills.value = skills.items;
  loading.value = false;
};

const goBack = () => {
  router.push({ name: 'user', params: { id: route.params.id } });
};

const userUpdateHandler = async () => {
  try {
    await userStore.updateUser(input);
    success(`User ${input.firstName} ${input.lastName} updated`);
    goBack();
    emit('updated');
  } catch (err) {
    error('Something went wrong');
  }
};

const userCertCreateHandler = async () => {
  const userCertInputs = newCerts.value.map((newCert) => {
    userStore.newUserCert({
      userId: input.id,
      certificationId: newCert.id,
      owner: input.id,
    });
  });

  try {
    await Promise.allSettled(userCertInputs);
    success('Certifications added');
    emit('updated');
    await fetchUser();
    newCerts.value = [];
    addCertsBox.value = false;
  } catch (err) {
    error('Something went wrong');
  }
};

const userSkillCreateHandler = async () => {
  const userSkillInputs = newSkills.value.map((newSkill) => {
    userStore.newUserSkill({
      userId: input.id,
      skillId: newSkill.id,
      owner: input.id,
      level: 'l1'
    });
  });

  try {
    await Promise.allSettled(userSkillInputs);
    success('Skills added');
    emit('updated');
    await fetchUser();
    newSkills.value = [];
    addSkillsBox.value = false;
  } catch (err) {
    error('Something went wrong');
  }
};

const userCertDeleteHandler = async (id) => {
  try {
    await userStore.deleteUserCert(id);
    success('Certification removed');
    emit('updated');
    await fetchUser();
  } catch (err) {
    error('Something went wrong');
  }
};
onMounted(async () => {
  await fetchUser();
});
</script>
