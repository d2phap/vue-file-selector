<template>
  <div>
    My App.vue comp

    <FileSelector />
  </div>
</template>

<script>
import FileSelector from './components/FileSelector.vue';

export default {
  name: 'App',
  components: {
    FileSelector,
  },
};
</script>