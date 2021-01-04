import Vue from 'vue'
import App from './App.vue'
import * as echarts from 'echarts';

Vue.prototype.$echarts = echarts; // 引入echarts

new Vue({
  el: '#app',
  render: h => h(App)
})
