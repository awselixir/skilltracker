<template>
  <VChart
    class="dashboard-chart"
    :option="option"
    ref="myChart"
    manual-update
    autoresize
    :update-options="{ notMerge: false, lazyUpdate: true }"
  />
</template>
<script setup>
import { ref, watch } from 'vue';
import * as echarts from 'echarts/core';

// Import bar charts, all suffixed with Chart
import { TreemapChart } from 'echarts/charts';

// Import the tooltip, title, rectangular coordinate system, dataset and transform components
import {
  TooltipComponent,
  TransformComponent,
  VisualMapComponent,
} from 'echarts/components';

// Features like Universal Transition and Label Layout
import { LabelLayout, UniversalTransition } from 'echarts/features';

// Import the Canvas renderer
// Note that including the CanvasRenderer or SVGRenderer is a required step
import { SVGRenderer } from 'echarts/renderers';
import VChart from 'vue-echarts';

const myChart = ref(null);

const props = defineProps({
  color: {
    type: String,
    default: 'blue',
  },
  filters: {
    type: Object,
    required: false,
  },
  dataset: {
    type: Object,
    required: true,
  },
});

echarts.use([
  TreemapChart,
  TooltipComponent,
  TransformComponent,
  LabelLayout,
  UniversalTransition,
  SVGRenderer,
  VisualMapComponent,
]);

const option = {
  tooltip: {
    trigger: 'item',
    showDelay: 0,
    transitionDuration: 0.2,
    formatter: '{b}: {c}',
  },
  series: [
    {
      type: 'treemap',
      roam: false,
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      nodeClick: false,
      breadcrumb: {
        show: false,
      },
      emphasis: {
        label: {
          show: true,
        },
      },
      data: props.dataset,
    },
  ],
};

watch(
  props,
  () => {
    option.series.data = props.dataset;
    myChart.value.setOption(option, true);
  },
  { deep: true }
);

// onMounted(() => {
//   myChart.value.clear()
// });
</script>
