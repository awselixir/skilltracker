<template>
  <VChart class="chart" :option="xAxisData" autoresize />
</template>
<script setup>
import { computed } from "vue";
import { colors } from "quasar";
import * as echarts from "echarts/core";

// Import bar charts, all suffixed with Chart
import { BarChart } from "echarts/charts";

// Import the tooltip, title, rectangular coordinate system, dataset and transform components
import {
  TooltipComponent,
  GridComponent,
  DatasetComponent,
  TransformComponent,
} from "echarts/components";

// Features like Universal Transition and Label Layout
import { LabelLayout, UniversalTransition } from "echarts/features";

// Import the Canvas renderer
// Note that including the CanvasRenderer or SVGRenderer is a required step
import { SVGRenderer } from "echarts/renderers";
import VChart from "vue-echarts";
const props = defineProps({
  color: {
    type: String,
    default: "grey",
  },
  filters: {
    type: Object,
    required: false,
  },
});

const xAxisData = computed(() => {
  if (props.filters.teams.includes("MAP")) {
    return {
      tooltip: {
        trigger: "axis",
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
          trigger: "axis",
        },
      },
      xAxis: {
        type: "category",
        data: [
          "AWS SAA",
          "AWS Developer",
          "AWS SA Pro",
          "AWS SysOps",
          "AWS DevOps",
          "AWS CLF",
          "SAFe Practioner",
          "FinOps",
          "AWS Security",
          "AWS Database",
          "AWS Analytics",
          "AWS ML",
          "AWS Network",
        ],
        axisLabel: {
          color: "white",
          interval: 0,
          rotate: 45,
        },
      },
      yAxis: {
        type: "value",
        show: false,
        axisLabel: {
          show: false,
        },
      },
      series: [
        {
          data: [12, 7, 6, 5, 4, 4, 1, 1, 1, 1, 1, 1, 1],
          type: "bar",
          showBackground: true,
          backgroundStyle: {
            //color: "rgba(180, 180, 180, 0.2)",
            color: getPaletteColor(`${props.color}-4`),
          },
        },
      ],
    };
  } else {
    return {
      tooltip: {
        trigger: "axis",
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
          trigger: "axis",
        },
      },
      xAxis: {
        type: "category",
        data: [
          "AWS SAA",
          "AWS CLF",
          "AWS Developer",
          "AWS SA Pro",
          "AWS SysOps",
          "AWS DevOps",
          "SAFe Practioner",
        ],
        axisLabel: {
          color: "white",
          interval: 0,
          rotate: 45,
        },
      },
      yAxis: {
        type: "value",
        show: false,
        axisLabel: {
          show: false,
        },
      },
      series: [
        {
          data: [6, 2,1,1,1,1,1],
          type: "bar",
          showBackground: true,
          backgroundStyle: {
            //color: "rgba(180, 180, 180, 0.2)",
            color: getPaletteColor(`${props.color}-4`),
          },
        },
      ],
    };
  }
});
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
const { getPaletteColor } = colors;
</script>
<style lang="scss">
.chart {
  height: 300px;
}
</style>
