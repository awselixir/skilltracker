<!-- <template>
  <VChart class="chart" :option="computedOption" autoresize />
</template>
<script setup>
import { computed } from 'vue';
import { colors } from 'quasar';
import * as echarts from 'echarts/core';

// Import bar charts, all suffixed with Chart
import { PieChart } from 'echarts/charts';

// Import the tooltip, title, rectangular coordinate system, dataset and transform components
import {
  TooltipComponent,
  LegendComponent,
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
});
const { getPaletteColor } = colors;
const computedOption = computed(() => {
  if (props.filters.teams.includes('MAP')) {
    return {
      //color: [getPaletteColor("orange-10"), getPaletteColor("orange-4"), getPaletteColor("orange-2")],
      tooltip: {
        trigger: 'item',
      },
      legend: {
        top: 0,
        left: 'center',
      },
      series: [
        {
          type: 'pie',
          top: 0,
          left: 0,
          right: 0,
          radius: ['30%', '70%'],
          avoidLabelOverlap: false,
          label: {
            show: false,
            position: 'center',
          },
          labelLine: {
            show: false,
          },
          data: [
            { value: 24, name: 'Associate' },
            { value: 15, name: 'Professional' },
            { value: 6, name: 'Foundational' },
          ],
        },
      ],
    };
  } else {
    return {
      tooltip: {
        trigger: 'item',
      },
      legend: {
        top: 0,
        left: 'center',
      },
      series: [
        {
          type: 'pie',
          top: 0,
          left: 0,
          right: 0,
          radius: ['30%', '70%'],
          avoidLabelOverlap: false,
          label: {
            show: false,
            position: 'center',
          },
          labelLine: {
            show: false,
          },
          data: [
            { value: 8, name: 'Associate' },
            { value: 3, name: 'Foundational' },
            { value: 2, name: 'Professional' },
          ],
        },
      ],
    };
  }
});
// Register the required components
echarts.use([
  PieChart,
  TooltipComponent,
  //DatasetComponent,
  //TransformComponent,
  //LabelLayout,
  //UniversalTransition,
  SVGRenderer,
  LegendComponent,
]);
</script>
<style lang="scss">
.chart {
  height: 300px;
}
</style> -->
