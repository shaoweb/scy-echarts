import Vue from 'vue'
import App from './App.vue'
import * as echarts from 'echarts';
import scyEcharts from './scyEcharts/scyecharts.vue';

Vue.prototype.$echarts = echarts; // 引入echarts
Vue.component('scy-echarts', scyEcharts)

new Vue({
  el: '#app',
  render: h => h(App)
})
