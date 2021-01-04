<template>
  <div
    class="echarts"
    :style="{ width: width ? width : '100%', height: height ? height : '100%' }"
    ref="echarts"
  ></div>
</template>

<script>
import elementResizeDetectorMaker from "element-resize-detector";
export default {
  name: "scyEcharts",
  props: ["width", "height", "options"],
  data() {
    return {
      myChart: "",
    };
  },
  mounted() {
    this.drawChart();
    // 检测 div 宽度的变化
    const erd = elementResizeDetectorMaker();
    // eslint-disable-next-line no-unused-vars
    erd.listenTo(this.$refs.echarts, (element) => {
      this.$nextTick(() => {
        //监听到事件后执行的业务逻辑
        this.myChart.resize();
      });
    });
  },
  methods: {
    // 基于准备好的dom，初始化echarts实例
    drawChart() {
      this.myChart = this.$echarts.init(this.$refs.echarts);
    },
  },
  watch: {
    options: {
      handler() {
        this.myChart.setOption(this.options, true);
      },
    },
  },
};
</script>

<style scoped>
.echarts {
  overflow: hidden;
}
</style>
