<template>
  <ModalWrapper
    @submit="newSkillHandler"
    @cancel="goBack"
    title="New Skill"
    action="new"
  >
    <template #default>
      <div>
        <q-input
          dense
          v-model="input.name"
          label="Name"
          color="primary"
          bottom-slots
          autofocus
          :rules="[(val) => val.length >= 3 || 'Must be at least 3 characters']"
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
    </template>
  </ModalWrapper>
</template>
<script setup lang="ts">
import ModalWrapper from '../../components/modals/ModalWrapper.vue';
import { reactive } from 'vue';
import { useRouter } from 'vue-router';
import { useSkillStore } from 'src/stores/skill-store';
import { useProviderStore } from '../../stores/provider-store';
import { error, success } from 'components/messages';

const router = useRouter();
const skillStore = useSkillStore();
const providerStore = useProviderStore();

const goBack = () => {
  router.push({ name: 'skills' });
};

const input = reactive({
  name: '',
  shortName: '',
  description: '',
  providerId: '',
});

const newSkillHandler = async () => {
  try {
    await skillStore.newSkill(input);
    success(`Skill ${input.name} created`);
    router.push({ name: 'skills' });
    await skillStore.fetchSkills();
  } catch (err) {
    error('Something went wrong');
  }
};
</script>
