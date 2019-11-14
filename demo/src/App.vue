<template>
  <div>
    <file-selector
      accept-extensions=".jpg,.svg"
      :height="300"
      :max-file-size="2 * 1024 * 1024"
      @validated="handleFilesValidated"
      @changed="handleFilesChanged"
    >
      Select

      <div slot="top" class="section-top">
        <p>
          You can click the below button or drop files into this area.
        </p>
        Max file size allowed: 2 MB.<br/>
        File extensions: JPG, SVG.
      </div>

      <div slot="bottom" class="section-bottom">
        A project of
        <a href="https://imageglass.org/about" target="_blank">
          Duong Dieu Phap
        </a>
      </div>
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


<style lang="scss">
$primColor: #820084;

html, body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 1rem;
  box-sizing: border-box;
  line-height: normal;
}

body {
  padding: 2rem;

  p {
    margin-top: 0;
  }

  a, a:visited {
    color: $primColor;
  }
}

.fs-file-selector {
  .fs-droppable {
    background-color: rgba($primColor, 0.05);
    border-color: $primColor !important;
    border-width: 2px !important;
    border-radius: 1px !important;
    transition: all ease 300ms;

    &.fs-drag-enter {
      transition: all ease 100ms;
      background-color: rgba($primColor, 0.1);
      border-style: solid;
      box-shadow: inset 0 0 0 2px $primColor;
      transform: scale(0.99);
    }
  }

  .fs-btn-select {
    background-color: #820084;
    padding: 0.75rem 2rem;
    color: #fff;
    border-radius: 1px;
    transition: all ease 200ms;

    &:hover {
      cursor: pointer;
      background-color: #960098;
    }

    &:active {
      background-color: #6d006f;
      transform: scale(0.95);
      transition: all ease 60ms;
    }
  }
}




.section-top {
  margin-bottom: 2rem;
  color: #6f6f6f;
  font-size: 0.875rem;
}
.section-bottom {
  margin-top: 2rem;
  color: #6f6f6f;
  font-size: 0.875rem;
}
</style>
