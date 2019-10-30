import component from './component.vue'

const Plugin = {
  component,

  install(Vue) {
    if (this.installed) {
      return;
    }

    Vue.component(component.name, component);
    this.installed = true;
  }
}

export default Plugin;
