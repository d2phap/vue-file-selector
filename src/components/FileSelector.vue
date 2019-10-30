<template>
  <div class="bold">
    hello
    <div class="italic">
      {{ value }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: 10,
    };
  },

  create() {
    console.log('created');
  },
};
</script>

<style lang="scss" scoped>
.bold {
  font-weight: 800;

  .italic {
    font-style: italic;
  }
}
</style>
