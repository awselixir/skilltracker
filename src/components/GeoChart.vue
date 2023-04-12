<template>
  <VChart class="chart" :option="computedOptions" autoresize />
</template>
<script setup>
import { computed } from "vue";
import { colors } from "quasar";
import * as echarts from "echarts/core";

// Import bar charts, all suffixed with Chart
import { MapChart } from "echarts/charts";

// Import the tooltip, title, rectangular coordinate system, dataset and transform components
import {
  TooltipComponent,
  DatasetComponent,
  TransformComponent,
  VisualMapComponent,
} from "echarts/components";

// Features like Universal Transition and Label Layout
import { LabelLayout, UniversalTransition } from "echarts/features";

// Import the Canvas renderer
// Note that including the CanvasRenderer or SVGRenderer is a required step
import { SVGRenderer } from "echarts/renderers";
import VChart from "vue-echarts";
import usaJson from "assets/usa.json";

const { getPaletteColor, lighten } = colors;

const props = defineProps({
  color: {
    type: String,
    default: "blue",
  },
  filters: {
    type: Object,
    required: false,
  },
});

echarts.use([
  MapChart,
  TooltipComponent,
  //GridComponent,
  DatasetComponent,
  TransformComponent,
  LabelLayout,
  UniversalTransition,
  SVGRenderer,
  VisualMapComponent,
]);

echarts.registerMap("USA", usaJson, {
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
  "Puerto Rico": {
    left: -76,
    top: 26,
    width: 2,
  },
});

const colorTen = getPaletteColor(`${props.color}-10`);
const colorNine = lighten(colorTen, 10);
const colorEight = lighten(colorTen, 20);
const colorSeven = lighten(colorTen, 30);
const colorSix = lighten(colorTen, 40);
const colorFive = lighten(colorTen, 50);
const colorFour = lighten(colorTen, 60);
const colorThree = lighten(colorTen, 70);
const colorTwo = lighten(colorTen, 80);
const colorOne = lighten(colorTen, 90);

const computedOptions = computed(() => {
  if (props.filters.teams.includes("MAP")) {
    return {
      // title: {
      //   text: "USA Population Estimates (2012)",
      //   subtext: "Data from www.census.gov",
      //   sublink: "http://www.census.gov/popest/data/datasets.html",
      //   left: "right",
      // },
      tooltip: {
        trigger: "item",
        showDelay: 0,
        transitionDuration: 0.2,
        formatter: '{b}: {c}'
      },
      visualMap: {
        left: "right",
        min: 0,
        max: 35,
        inRange: {
          color: [
            //getPaletteColor("grey-5"),
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
        text: ["High", "Low"],
        calculable: true,
      },
      // toolbox: {
      //   show: true,
      //   //orient: 'vertical',
      //   left: "left",
      //   top: "top",
      //   feature: {
      //     dataView: { readOnly: false },
      //     restore: {},
      //     saveAsImage: {},
      //   },
      // },
      series: [
        {
          type: "map",
          roam: false,
          map: "USA",
          emphasis: {
            label: {
              show: true,
            },
          },
          data: [
            { name: "Alabama", value: 0 },
            { name: "Alaska", value: 0 },
            { name: "Arizona", value: 0 },
            { name: "Arkansas", value: 0 },
            { name: "California", value: 0 },
            { name: "Colorado", value: 2 },
            { name: "Connecticut", value: 0 },
            { name: "Delaware", value: 0 },
            { name: "District of Columbia", value: 0 },
            { name: "Florida", value: 29 },
            { name: "Georgia", value: 0 },
            { name: "Hawaii", value: 0 },
            { name: "Idaho", value: 0 },
            { name: "Illinois", value: 0 },
            { name: "Indiana", value: 3 },
            { name: "Iowa", value: 0 },
            { name: "Kansas", value: 0 },
            { name: "Kentucky", value: 0 },
            { name: "Louisiana", value: 0 },
            { name: "Maine", value: 0 },
            { name: "Maryland", value: 5 },
            { name: "Massachusetts", value: 0 },
            { name: "Michigan", value: 0 },
            { name: "Minnesota", value: 0 },
            { name: "Mississippi", value: 0 },
            { name: "Missouri", value: 0 },
            { name: "Montana", value: 0 },
            { name: "Nebraska", value: 0 },
            { name: "Nevada", value: 0 },
            { name: "New Hampshire", value: 0 },
            { name: "New Jersey", value: 0 },
            { name: "New Mexico", value: 0 },
            { name: "New York", value: 0 },
            { name: "North Carolina", value: 0 },
            { name: "North Dakota", value: 0 },
            { name: "Ohio", value: 0 },
            { name: "Oklahoma", value: 0 },
            { name: "Oregon", value: 0 },
            { name: "Pennsylvania", value: 0 },
            { name: "Rhode Island", value: 0 },
            { name: "South Carolina", value: 0 },
            { name: "South Dakota", value: 0 },
            { name: "Tennessee", value: 7 },
            { name: "Texas", value: 18 },
            { name: "Utah", value: 2 },
            { name: "Vermont", value: 0 },
            { name: "Virginia", value: 0 },
            { name: "Washington", value: 33 },
            { name: "West Virginia", value: 0 },
            { name: "Wisconsin", value: 0 },
            { name: "Wyoming", value: 0 },
            { name: "Puerto Rico", value: 0 },
          ],
        },
      ],
    };
  } else {
    return {
      // title: {
      //   text: "USA Population Estimates (2012)",
      //   subtext: "Data from www.census.gov",
      //   sublink: "http://www.census.gov/popest/data/datasets.html",
      //   left: "right",
      // },
      tooltip: {
        trigger: "item",
        showDelay: 0,
        transitionDuration: 0.2,
        formatter: '{b}: {c}'
      },
      visualMap: {
        left: "right",
        min: 0,
        max: 10,
        inRange: {
          color: [
            //getPaletteColor("grey-5"),
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
        text: ["High", "Low"],
        calculable: true,
      },
      // toolbox: {
      //   show: true,
      //   //orient: 'vertical',
      //   left: "left",
      //   top: "top",
      //   feature: {
      //     dataView: { readOnly: false },
      //     restore: {},
      //     saveAsImage: {},
      //   },
      // },
      series: [
        {
          type: "map",
          roam: false,
          map: "USA",
          emphasis: {
            label: {
              show: true,
            },
          },
          data: [
            { name: "Alabama", value: 0 },
            { name: "Alaska", value: 0 },
            { name: "Arizona", value: 0 },
            { name: "Arkansas", value: 0 },
            { name: "California", value: 0 },
            { name: "Colorado", value: 2 },
            { name: "Connecticut", value: 0 },
            { name: "Delaware", value: 0 },
            { name: "District of Columbia", value: 0 },
            { name: "Florida", value: 0 },
            { name: "Georgia", value: 0 },
            { name: "Hawaii", value: 0 },
            { name: "Idaho", value: 0 },
            { name: "Illinois", value: 0 },
            { name: "Indiana", value: 3 },
            { name: "Iowa", value: 0 },
            { name: "Kansas", value: 0 },
            { name: "Kentucky", value: 0 },
            { name: "Louisiana", value: 0 },
            { name: "Maine", value: 0 },
            { name: "Maryland", value: 5 },
            { name: "Massachusetts", value: 0 },
            { name: "Michigan", value: 0 },
            { name: "Minnesota", value: 0 },
            { name: "Mississippi", value: 0 },
            { name: "Missouri", value: 0 },
            { name: "Montana", value: 0 },
            { name: "Nebraska", value: 0 },
            { name: "Nevada", value: 0 },
            { name: "New Hampshire", value: 0 },
            { name: "New Jersey", value: 0 },
            { name: "New Mexico", value: 0 },
            { name: "New York", value: 0 },
            { name: "North Carolina", value: 0 },
            { name: "North Dakota", value: 0 },
            { name: "Ohio", value: 0 },
            { name: "Oklahoma", value: 0 },
            { name: "Oregon", value: 0 },
            { name: "Pennsylvania", value: 0 },
            { name: "Rhode Island", value: 0 },
            { name: "South Carolina", value: 0 },
            { name: "South Dakota", value: 0 },
            { name: "Tennessee", value: 0 },
            { name: "Texas", value: 18 },
            { name: "Utah", value: 2 },
            { name: "Vermont", value: 0 },
            { name: "Virginia", value: 0 },
            { name: "Washington", value: 0 },
            { name: "West Virginia", value: 0 },
            { name: "Wisconsin", value: 0 },
            { name: "Wyoming", value: 0 },
            { name: "Puerto Rico", value: 0 },
          ],
        },
      ],
    };
  }
});

</script>
<style lang="scss">
.chart {
  height: 300px;
}
</style>
