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