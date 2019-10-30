# Vue File selector
File selector component that supports drag-n-drop for @vuejs

## Install
Run the command
```
npm i fluent-reveal-effect@latest
```

NPM package: https://www.npmjs.com/package/vue-file-selector

## Usage

#### Declare the plugin
```js
// import the library
import FileSelector from 'vue-file-selector';

// then use it!
Vue.use(FileSelector);
```

### Use in Vue file
```html
<template>
  <div>
    My App.vue comp

    <file-selector
      accept-extensions=".zip"
      :height="300"
      @validate="validate"
      @change="change"
    >
      hahahah
    </file-selector>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    validate(result, files) {
      console.log('Validation result: ' + result);
    },

    change(files) {
      console.log('Selected files: ', files);
    },
  },
};
</script>
```

