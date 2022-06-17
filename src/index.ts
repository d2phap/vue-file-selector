import './main.scss';

import { App, Plugin } from 'vue';
import component from './FileSelector.vue';

export * from './types';

const FileSelector: Plugin = {
  install(app: App) {
    app.component('FileSelector', component);
  },
};


export default FileSelector;
