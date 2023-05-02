<template>
  <ModalWrapper
    @cancel="goBack"
    title="Update Skill"
    action="update"
    @delete="skillDeleteHandler"
    @submit="skillUpdateHandler"
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
            v-model="input.name"
            label="Name"
            color="primary"
            bottom-slots
            autofocus
            :rules="[
              (val) => val.length >= 3 || 'Must be at least 3 characters',
            ]"
          />
          <q-input
            v-model="input.shortName"
            label="Short Name"
            color="primary"
            bottom-slots
            dense
            :rules="[
              (val) =>
                (val.length >= 2 && val.length <= 10) ||
                'Must be beteen 2-10 characters',
            ]"
          />
          <q-select
            v-model="input.providerId"
            label="Provider"
            color="primary"
            bottom-slots
            :options="providerStore.providersSorted"
            dense
            option-value="id"
            option-label="shortName"
            emit-value
            map-options
            :rules="[
              (val) => (val != null && val != '') || 'Must make a selection',
            ]"
          />
          <q-input
            v-model="input.description"
            label="Description"
            color="primary"
            bottom-slots
            type="textarea"
            autogrow
            dense
          />
        </div>
      </transition>
    </template>
  </ModalWrapper>
</template>
<script setup>
import ModalWrapper from '../../components/modals/ModalWrapper.vue';
import { onMounted, reactive, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useSkillStore} from 'src/stores/skill-store'
import { useProviderStore } from '../../stores/provider-store';
import { error, success } from 'components/messages';

const emit = defineEmits(['updated']);

const route = useRoute();
const router = useRouter();

const providerStore = useProviderStore();
const skillStore = useSkillStore();

const loading = ref(true);
const input = reactive({
  id: '',
  name: '',
  shortName: '',
  description: '',
  providerId: '',
});

const fetchSkill = async () => {
  const skill = await skillStore.fetchSkill(route.params.id);
  const {
    id,
    name,
    description,
    shortName,
    providerId,
  } = skill.data.getSkill;
  input.id = id;
  input.name = name;
  input.description = description;
  input.providerId = providerId;
  input.shortName = shortName;
  loading.value = false;
};

const goBack = () => {
  router.push({ name: 'skill', params: { id: route.params.id } });
};

const skillDeleteHandler = async () => {
  try {
    await skillStore.deleteSkill(input);
    success(`Skill ${input.name} deleted`);
    router.push({ name: 'skills' });
  } catch (err) {
    error('Something went wrong');
  }
};

const skillUpdateHandler = async () => {
  try {
    await skillStore.updateSkill(input);
    success(`Skill ${input.name} updated`);
    goBack();
    emit('updated');
  } catch (err) {
    error('Something went wrong');
  }
};

onMounted(async () => {
  await fetchSkill();
});
</script>
