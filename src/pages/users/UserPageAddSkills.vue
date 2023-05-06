<template>
  <ModalWrapper
    @cancel="goBack"
    title="Add Skills"
    action="updateUser"
    @submit="userSkillCreateHandler"
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
            v-model="newSkills"
            label="Skills"
            color="primary"
            :options="filteredAvailableSkills"
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
//import { orderBy } from 'lodash';
import { useRoute, useRouter } from 'vue-router';
import { useSkillStore } from 'src/stores/skill-store';
import { useUserStore } from '../../stores/user-store';
import { error, success } from 'components/messages';

const emit = defineEmits(['updated']);

const route = useRoute();
const router = useRouter();

const skillStore = useSkillStore();
const userStore = useUserStore();

const loading = ref(true);

const existingSkills = ref([]);
const newSkills = ref([]);

const existingSkillIds = computed(() => {
  return existingSkills.value.map((item) => item.skill.id);
});

const filteredAvailableSkills = computed(() => {
  return skillStore.skillsSorted.filter(
    (skill) => !existingSkillIds.value.includes(skill.id)
  );
});

const fetchUser = async () => {
  const user = await userStore.fetchUser(route.params.id);
  const { skills } = user.data.getUser;

  existingSkills.value = skills.items;
  loading.value = false;
};

const goBack = () => {
  router.push({ name: 'user', params: { id: route.params.id } });
};

const userSkillCreateHandler = async () => {
  const userSkillInputs = newSkills.value.map((newSkill) => {
    userStore.newUserSkill({
      userId: route.params.id,
      skillId: newSkill.id,
      owner: route.params.id,
      level: 'l1',
    });
  });

  try {
    await Promise.allSettled(userSkillInputs);
    success('Skills added');
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
