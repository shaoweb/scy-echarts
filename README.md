# ma-project

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).

# scyEcharts组件的调用
```bash
#下载echarts，scyEcharts
npm i echarts -S
npm i scyEcharts -S

#全局引入echarts，scyEcharts，找到main.js文件
import * as echarts from 'echarts';
import scyEcharts from 'scyEcharts';

Vue.prototype.$echarts = echarts; // 引入echarts
Vue.user(scyEcharts)

#scyEcharts的使用, options接收echarts的option参数，配置参考echarts官网
<scy-echarts width="100%" height="100px" :options="option"></scy-echarts>
```
