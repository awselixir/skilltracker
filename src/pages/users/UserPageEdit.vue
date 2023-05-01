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
          <div v-if="existingCerts.length > 0">
            <div class="text-caption">Certs</div>
            <q-item v-for="item in sortedCerts" :key="item.id" class="q-px-xs">
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
          </div>
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
import { useUserStore } from '../../stores/user-store';
import { error, success } from 'components/messages';
import states from 'src/shared/states';

const emit = defineEmits(['updated']);

const route = useRoute();
const router = useRouter();

const userStore = useUserStore();

const loading = ref(true);
const input = reactive({
  id: '',
  firstName: '',
  lastName: '',
  state: '',
  title: '',
});

const existingCerts = ref([]);

const sortedCerts = computed(() => {
  return orderBy(existingCerts.value, 'name', 'asc');
});

const fetchUser = async () => {
  const user = await userStore.fetchUser(route.params.id);
  const { id, firstName, lastName, state, title, certifications } =
    user.data.getUser;
  input.id = id;
  input.firstName = firstName;
  input.lastName = lastName;
  input.state = state;
  input.title = title;
  existingCerts.value = certifications.items;
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
