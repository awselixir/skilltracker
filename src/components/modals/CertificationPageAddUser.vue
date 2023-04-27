<template>
  <q-dialog
    square
    :position="small ? 'standard' : 'right'"
    full-height
    :model-value="showCreateModal"
    @hide="showCreateModal = false"
    :maximized="small"
    :transition-show="small ? 'slide-up' : 'slide-left'"
  >
    <div class="bg-white q-pa-md" :style="{ width: small ? '' : '800px' }">
      <div class="column" style="height: 100%">
        <div class="col-auto">
          <div class="row items-center">
            <div class="col text-h6">Add Users</div>
            <div class="col-1">
              <q-btn v-close-popup icon="mdi-close" dense round flat />
            </div>
          </div>
        </div>

        <div class="col">
          <q-form ref="addUserForm" @submit="newUserCertificationHandler">
            <q-select
              v-model="input.userId"
              label="User"
              color="primary"
              bottom-slots
              :options="props.users"
              option-value="id"
              option-label="firstName"
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
          </q-form>
        </div>
        <div class="col-auto">
          <q-btn
            color="primary"
            square
            unelevated
            class="q-mr-md"
            type="submit"
            @click="triggerSubmit"
            >Submit</q-btn
          >
          <q-btn color="grey-5" square unelevated v-close-popup>Close</q-btn>
        </div>
      </div>
    </div>
  </q-dialog>
</template>
<script setup>
import { computed, reactive } from 'vue';
import { useQuasar } from 'quasar';

const $q = useQuasar();

const props = defineProps({
  users: {
    required: true,
    type: Array
  }
})

defineEmits(['submit'])

const input = reactive({
  userId: '',
  earnedAt: '',
});

const triggerSubmit = () => {
  addUserForm.value.submit();
};


const small = computed(() => {
  return $q.screen.lt.md ? true : false;
});

</script>
