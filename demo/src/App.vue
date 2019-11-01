<template>
  <div>
    My App.vue comp

    <file-selector
      accept-extensions=".jpg"
      :height="300"
      @validated="handleFilesValidated"
      @changed="handleFilesChanged"
    >
      hahahah
    </file-selector>
  </div>
</template>


<script>
export default {
  name: 'App',
  methods: {
    handleFilesValidated(result, files) {
      console.log('Validation result: ', result);
    },

    handleFilesChanged(files) {
      console.log('Selected files: ');
      console.table(files);
    },
  },
};
</script>