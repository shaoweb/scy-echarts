import Vue from 'vue'
import App from './App.vue'
import * as echarts from 'echarts';

import scyEcharts from "./scyEcharts/scyecharts.vue";

Vue.component('scy-echarts', scyEcharts)

Vue.prototype.$echarts = echarts; // 引入echarts

new Vue({
  el: '#app',
  render: h => h(App)
})
