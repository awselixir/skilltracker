<template>
  <ModalWrapper
    @cancel="goBack"
    title="Add Certs"
    action="updateUser"
    @submit="userCertCreateHandler"
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
            v-model="newCerts"
            label="Certifications"
            color="primary"
            :options="filteredAvailableCerts"
            dense
            option-value="id"
            :option-label="(item) => (item.length === 0 ? '' : item.name)"
            multiple
            use-chips
          />
        </div>
      </transition>
    </template>
  </ModalWrapper>
</template>
<script setup>
import ModalWrapper from '../../components/modals/ModalWrapper.vue';
import { computed, onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useCertificationStore } from 'src/stores/certification-store';
import { useUserStore } from '../../stores/user-store';
import { error, success } from 'components/messages';

const emit = defineEmits(['updated']);

const route = useRoute();
const router = useRouter();

const certStore = useCertificationStore();
const userStore = useUserStore();

const loading = ref(true);

const existingCerts = ref([]);
const newCerts = ref([]);

const existingCertIds = computed(() => {
  return existingCerts.value.map((item) => item.certification.id);
});

const filteredAvailableCerts = computed(() => {
  return certStore.certificationsSorted.filter(
    (cert) => !existingCertIds.value.includes(cert.id)
  );
});

const fetchUser = async () => {
  const user = await userStore.fetchUser(route.params.id);
  const { certifications } = user.data.getUser;
  existingCerts.value = certifications.items;
  loading.value = false;
};

const goBack = () => {
  router.push({ name: 'user', params: { id: route.params.id } });
};

const userCertCreateHandler = async () => {
  const userCertInputs = newCerts.value.map((newCert) => {
    userStore.newUserCert({
      userId: route.params.id,
      certificationId: newCert.id,
      owner: route.params.id,
    });
  });

  try {
    await Promise.allSettled(userCertInputs);
    success('Certifications added');
    emit('updated');
    goBack()
  } catch (err) {
    error('Something went wrong');
  }
};

onMounted(async () => {
  await fetchUser();
});
</script>
