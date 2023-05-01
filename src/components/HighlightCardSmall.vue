<template>
  <div :class="[props.class, 'cursor-pointer']">
  <q-card square flat>
    <q-card-section class="q-pa-none">
      <q-item class="q-pa-none" :to="props.to">
        <q-item-section
          avatar
          :class="[`bg-${props.color}-8`, 'q-py-xs','q-px-md', 'q-mr-none']"
        >
          <q-icon :name="props.icon" :color="props.textColor" size="sm" />
        </q-item-section>
        <q-item-section :class="['q-px-md','q-py-xs', `text-${textColor}`, `bg-${color}-6`]">
          <q-item-label lines="1" class="text-h6 text-weight-bolder">{{
            props.label
          }}</q-item-label>
          <q-item-label lines="1" class="text-caption">{{ props.text }}</q-item-label>
        </q-item-section>
      </q-item>
    </q-card-section>
  </q-card>
</div>
</template>
<script setup lang="ts">
const props = defineProps({
  class: {
    type: String,
    required: false,
  },
  color: {
    type: String,
    default: 'grey',
  },
  icon: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
  to: {
    type: Object,
    required: false
  },
  text: {
    type: String,
    required: false,
  },
  textColor: {
    type: String,
    default: 'white',
    required: false,
  },
});
</script>
