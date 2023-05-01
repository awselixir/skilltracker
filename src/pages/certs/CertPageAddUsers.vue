<template>
  <ModalWrapper
    @cancel="goBack"
    title="Add User"
    action="addUser"
    @submit="newUserCertificationHandler"
    :loading="loading"
  >
    <template #default>
      <transition
        appear
        enter-active-class="animated fadeIn"
        leave-active-class="animated fadeOut"
      >
        <div v-show="!loading">
          <q-select
            v-model="input.userId"
            label="User"
            color="primary"
            bottom-slots
            :options="filteredAvailableUsers"
            option-value="id"
            :option-label="
              (option) =>
                option.length === 0
                  ? ''
                  : `${option.firstName} ${option.lastName}`
            "
            emit-value
            map-options
            :rules="[
              (val) => (val != null && val != '') || 'Must make a selection',
            ]"
          />
          <q-input
            mask="date"
            :rules="['date']"
            label="Earned Date"
            bottom-slots
            v-model="input.earnedAt"
            placeholder="YYYY/MM/DD"
          >
            <template v-slot:append>
              <q-icon name="mdi-calendar-outline" class="cursor-pointer">
                <q-popup-proxy
                  cover
                  transition-show="scale"
                  transition-hide="scale"
                >
                  <q-date v-model="input.earnedAt">
                    <div class="row items-center justify-end">
                      <q-btn
                        v-close-popup
                        label="Close"
                        color="primary"
                        flat
                      ></q-btn>
                    </div>
                  </q-date>
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>
        </div>
      </transition>
    </template>
  </ModalWrapper>
</template>
<script setup>
import { computed, reactive, ref, onMounted } from 'vue';
import { date } from 'quasar';
import { orderBy } from 'lodash';
import { useRoute, useRouter } from 'vue-router';
import { useCertificationStore } from 'src/stores/certification-store';
import { useUserStore } from 'src/stores/user-store';
import { error, success } from 'components/messages';
import ModalWrapper from '../../components/modals/ModalWrapper.vue';

const emit = defineEmits(['updated']);

const route = useRoute();
const router = useRouter();

const certificationStore = useCertificationStore();
const userStore = useUserStore();

const input = reactive({
  userId: '',
  earnedAt: '',
});

const existingUsers = ref([]);
const loading = ref(true);

const sortedUsers = computed(() => {
  return orderBy(userStore.users, 'firstName', 'asc');
});

const existingUserIds = computed(() => {
  return existingUsers.value.map((item) => item.user.id);
});

const filteredAvailableUsers = computed(() => {
  return [...sortedUsers.value].filter(
    (user) => !existingUserIds.value.includes(user.id)
  );
});

const fetchCertification = async () => {
  const cert = await certificationStore.fetchCertification(route.params.id);
  const { users } = cert.data.getCertification;
  existingUsers.value = users.items;
  loading.value = false;
};

const newUserCertificationHandler = async () => {
  try {
    await userStore.newUserCertification({
      userId: input.userId,
      certificationId: route.params.id,
      earnedAt: date.formatDate(input.earnedAt, 'YYYY-MM-DD'),
    });
    success('User added');
    goBack();
    emit('updated');
  } catch (err) {
    error('Something went wrong');
  }
};

const goBack = () => {
  router.push({ name: 'cert', params: { id: route.params.id } });
};

onMounted(async () => {
  await fetchCertification();
});
</script>
