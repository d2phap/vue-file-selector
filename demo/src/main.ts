import { createApp } from 'vue';
import FileSelector from 'vue-file-selector';
import 'vue-file-selector/dist/main.css';

import App from './App.vue';


createApp(App)
  .use(FileSelector)
  .mount('#app');
