<template>
  <VChart class="dashboard-chart" :option="option" ref="myChart" manual-update autoresize :update-options="{notMerge: false, lazyUpdate: true}" />
</template>
<script setup>
import { ref, watch } from 'vue';
import { colors } from 'quasar';
import * as echarts from 'echarts/core';

// Import bar charts, all suffixed with Chart
import { MapChart } from 'echarts/charts';

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
import usaJson from 'assets/usa.json';

const myChart = ref(null);
const { getPaletteColor, lighten } = colors;

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
  max: {
    type: Number,
    required: false,
    default: 500,
  },
});

echarts.use([
  MapChart,
  TooltipComponent,
  TransformComponent,
  LabelLayout,
  UniversalTransition,
  SVGRenderer,
  VisualMapComponent,
]);

echarts.registerMap('USA', usaJson, {
  Alaska: {
    left: -131,
    top: 25,
    width: 15,
  },
  Hawaii: {
    left: -110,
    top: 28,
    width: 5,
  },
  'Puerto Rico': {
    left: -76,
    top: 26,
    width: 2,
  },
});

const colorTen = getPaletteColor(`${props.color}-10`);
const colorNine = lighten(colorTen, 5);
const colorEight = lighten(colorTen, 10);
const colorSeven = lighten(colorTen, 15);
const colorSix = lighten(colorTen, 20);
const colorFive = lighten(colorTen, 25);
const colorFour = lighten(colorTen, 30);
const colorThree = lighten(colorTen, 35);
const colorTwo = lighten(colorTen, 40);
const colorOne = lighten(colorTen, 45);

const option = {
  tooltip: {
    trigger: 'item',
    showDelay: 0,
    transitionDuration: 0.2,
    formatter: '{b}: {c}',
  },
  visualMap: {
    left: 'right',
    min: 0,
    max: props.max,

    inRange: {
      color: [
        '#ffffff',
        colorOne,
        colorTwo,
        colorThree,
        colorFour,
        colorFive,
        colorSix,
        colorSeven,
        colorEight,
        colorNine,
        colorTen,
      ],
    },
    text: ['High', 'Low'],
    calculable: true,
  },
  series: [
    {
      type: 'map',
      roam: false,
      map: 'USA',
      emphasis: {
        label: {
          show: true,
        },
      },
      data: props.dataset,
    },
  ],
};

watch(props, () => {
  option.visualMap.max = props.max
  option.series.data = props.dataset
  myChart.value.setOption(option, true)
}, {deep: true});

// onMounted(() => {
//   myChart.value.clear()
// });
</script>
