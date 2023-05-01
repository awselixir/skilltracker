<template>
  <VChart
    ref="myChart"
    class="dashboard-chart"
    :option="option"
    manual-update
    autoresize
  />
</template>
<script setup>
import { ref, watch } from 'vue';
import { colors } from 'quasar';
import * as echarts from 'echarts/core';

// Import bar charts, all suffixed with Chart
import { BarChart } from 'echarts/charts';

// Import the tooltip, title, rectangular coordinate system, dataset and transform components
import {
  TooltipComponent,
  GridComponent,
  DatasetComponent,
  TransformComponent,
} from 'echarts/components';

// Features like Universal Transition and Label Layout
import { LabelLayout, UniversalTransition } from 'echarts/features';

// Import the Canvas renderer
// Note that including the CanvasRenderer or SVGRenderer is a required step
import { SVGRenderer } from 'echarts/renderers';
import VChart from 'vue-echarts';
const props = defineProps({
  color: {
    type: String,
    default: 'grey',
  },
  filters: {
    type: Object,
    required: false,
  },
  dataset: {
    type: Array,
    required: true,
  },
});

const myChart = ref(null);
const { getPaletteColor } = colors;

const option = {
  tooltip: {
    trigger: 'axis',
  },
  color: getPaletteColor(`${props.color}-10`),
  responsive: true,
  grid: {
    left: 25,
    top: 0,
    right: 25,
    bottom: 25,
    containLabel: true,
    tooltip: {
      show: true,
      trigger: 'axis',
    },
  },
  xAxis: {
    type: 'category',
    data: props.dataset.map((cert) => cert.name),
    axisLabel: {
      color: 'white',
      interval: 0,
      rotate: 45,
    },
  },
  yAxis: {
    type: 'value',
    show: false,
    axisLabel: {
      show: false,
    },
  },
  series: [
    {
      data: props.dataset.map((cert) => cert.value),
      type: 'bar',
      showBackground: true,
      backgroundStyle: {
        //color: "rgba(180, 180, 180, 0.2)",
        color: getPaletteColor(`${props.color}-4`),
      },
    },
  ],
};
// Register the required components
echarts.use([
  BarChart,
  TooltipComponent,
  GridComponent,
  DatasetComponent,
  TransformComponent,
  LabelLayout,
  UniversalTransition,
  SVGRenderer,
]);

watch(
  props,
  () => {
    option.xAxis.data = props.dataset.map((cert) => cert.name);
    option.series[0].data = props.dataset.map((cert) => cert.value);
    myChart.value.setOption(option, true);
  },
  { deep: true }
);
</script>
