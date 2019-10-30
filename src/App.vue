<template>
  <div>
    My App.vue comp

    <FileSelector
      accept-extensions=".zip"
      :height="300"
      @validate="validate"
      @change="change"
    >
      hahahah
    </FileSelector>
  </div>
</template>

<script>
import FileSelector from './components/FileSelector.vue';

export default {
  name: 'App',
  components: {
    FileSelector,
  },

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