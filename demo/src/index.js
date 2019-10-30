import Vue from 'vue';
import FileSelector from '../../dist/index';
import App from './App.vue';


Vue.use(FileSelector);


new Vue({
  el: '#app',
  render: h => h(App),
});
