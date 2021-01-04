<template>
  <div id="app">
    <div class="echarts">
      <scy-echarts width="30%" height="200px" :options="option"></scy-echarts>
    </div>
  </div>
</template>

<script>
import scyEcharts from "./scyEcharts/scyecharts.vue";
export default {
  name: "app",
  component: {
    "name": scyEcharts,
  },
  data() {
    return {
      option: "",
    };
  },
  mounted() {
    this.option = this.pieOption({ single: 12, count: 50 });
  },
  methods: {
    // 空心圆--单个数据的展示
    pieOption(data) {
      var option = {
        series: [
          {
            type: "pie",
            clockwise: true,
            radius: [35, 45],
            center: ["50%", "50%"],
            label: {
              show: false,
            },
            labelLine: {
              show: false,
            },
            itemStyle: {
              shadowBlur: 0,
              shadowColor: "#203665",
            },
            data: [
              {
                value: data.single,
                label: {
                  rich: {
                    a: {
                      color: "#FFFFFF",
                      fontSize: 16,
                    },
                  },
                  formatter: function (params) {
                    return "{a|" + params.percent + "%}";
                  },
                  position: "center",
                  show: true,
                  fontSize: "14",
                  fontWeight: "normal",
                  color: "#333",
                },
                itemStyle: {
                  color: this.$echarts.graphic.LinearGradient(0, 1, 0, 0, [
                    {
                      offset: 0,
                      color: "#41ABB8",
                    },
                    {
                      offset: 1,
                      color: "#51F267",
                    },
                  ]),
                  shadowBlur: 0,
                },
              },
              {
                value: data.count - data.single,
                name: "invisible",
                itemStyle: {
                  color: "rgba(28, 36, 44, .6)",
                },
                emphasis: {
                  itemStyle: {
                    color: "rgba(28, 36, 44, .6)",
                  },
                },
              },
            ],
          },
        ],
      };
      return option;
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
html,
body {
  margin: 0;
  padding: 0;
}
#app {
  height: calc(100vh);
}
.echarts {
  height: 50%;
}
</style>
