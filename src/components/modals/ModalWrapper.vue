<template>
  <q-dialog
    square
    :position="small ? 'standard' : 'right'"
    full-height
    :model-value="modal"
    @hide="cancel"
    :maximized="small"
    :transition-show="small ? 'slide-up' : 'slide-left'"
  >
    <div class="bg-white q-pa-md" :style="{ width: small ? '' : '800px' }">
      <div class="column" style="height: 100%">
        <div class="col-auto">
          <div class="row items-center">
            <div class="col text-h6">{{ props.title }}</div>
            <div class="col-1" v-if="props.action == 'update'">
              <q-btn
                @click="deleteBox = true"
                icon="mdi-delete"
                dense
                round
                flat
              />
            </div>
            <div class="col-1">
              <q-btn @click="cancel" icon="mdi-close" dense round flat />
            </div>
          </div>
        </div>
        <div
          v-if="props.action == 'update'"
          v-show="deleteBox"
          class="col-auto bg-negative q-pa-md text-white"
        >
          <div class="row items-center">
            <div class="col">Permanently delete?</div>
            <div class="col-auto">
              <q-btn flat unelevated @click="emit('delete')">Yes</q-btn>
            </div>
          </div>
        </div>

        <div class="col relative-position">
          <q-form ref="myForm" @submit="submit"><slot /></q-form>
          <q-inner-loading :showing="props.loading" v-if="action == 'update'">
            <q-spinner size="50px" color="primary" />
          </q-inner-loading>
        </div>
        <div class="col-auto">
          <q-btn
            color="primary"
            square
            unelevated
            class="q-mr-md"
            type="submit"
            @click="triggerForm"
            >Submit</q-btn
          >
          <q-btn color="grey-5" square unelevated @click="cancel">Close</q-btn>
        </div>
      </div>
    </div>
  </q-dialog>
</template>
<script setup>
import { computed, ref } from 'vue';
import { useQuasar } from 'quasar';

const modal = ref(true);
const deleteBox = ref(false);
const myForm = ref(null);

const props = defineProps({
  modelValue: {
    type: Boolean,
  },
  action: {
    type: String,
    required: true,
  },
  loading: {
    type: Boolean,
    required: true
  },
  title: {
    type: String,
    required: true,
  },
});

const emit = defineEmits(['cancel', 'delete', 'submit', 'update:modelValue']);

const triggerForm = () => {
  myForm.value.submit();
};
const submit = () => {
  emit('submit');
};

const cancel = () => {
  emit('cancel');
};

const $q = useQuasar();
const small = computed(() => {
  return $q.screen.lt.md ? true : false;
});
</script>
