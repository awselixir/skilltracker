<template>
  <div :class="[props.class, 'cursor-pointer']">
  <q-card square>
    <q-card-section class="q-pa-none">
      <q-item class="q-pa-none">
        <q-item-section
          avatar
          :class="[`bg-${props.color}-8`, 'q-pa-lg', 'q-mr-none']"
        >
          <q-icon :name="props.icon" :color="props.textColor" size="md" />
        </q-item-section>
        <q-item-section :class="['q-pa-md', `text-${textColor}`, `bg-${color}-6`]">
          <q-item-label lines="1" class="text-h6 text-weight-bolder">{{
            props.label
          }}</q-item-label>
          <q-item-label lines="1">{{ props.text }}</q-item-label>
        </q-item-section>
      </q-item>
    </q-card-section>
  </q-card>
</div>
</template>
<script setup>
const props = defineProps({
  class: {
    type: String,
    required: false,
  },
  color: {
    type: String,
    default: "grey",
  },
  icon: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: false,
  },
  textColor: {
    type: String,
    default: "white",
    required: false,
  },
});
</script>
