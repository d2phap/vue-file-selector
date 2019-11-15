<template>
  <div>
    <file-selector
      accept-extensions=".jpg,.svg"
      :multiple="true"
      :is-loading="isLoading"
      :max-file-size="5 * 1024 * 1024"
      @validated="handleFilesValidated"
      @changed="handleFilesChanged"
    >
      Select image files

      <div slot="top" class="section-top">
        <p>
          You can click the below button or drop files into this area.
        </p>
        Max file size allowed: 5 MB.<br/>
        File extensions: JPG, SVG.
      </div>

      <div slot="bottom" class="section-bottom">
        A project of
        <a href="https://imageglass.org/about" target="_blank">
          Duong Dieu Phap
        </a>
      </div>

      <div slot="loader" class="section-loader">
        Processing files<br/>
        please wait...
      </div>
    </file-selector>


    <div class="gallery" v-if="gallery.length">
      <div
        v-for="(img, index) in gallery"
        class="gallery-item"
        :key="index"
      >
        <div class="img"><img :src="img.src"></div>
        <div class="img-info">
          <div class="img-name" :title="img.name">{{ img.name }}</div>
          <div class="img-size">{{ formatNumber(img.size) }} bytes</div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: 'App',
  data: () => ({
    isLoading: false,
    gallery: [],
  }),

  methods: {
    handleFilesValidated(result, files) {
      console.log('Validation result: ', result);
    },

    async handleFilesChanged(files) {
      this.isLoading = true;
      // console.log('Selected files: ');
      // console.table(files);

      const list = Array.from(files);

      for (const file of list) {
        const img = await this.loadImgAsDataUrl(file);
        this.gallery.push({
          name: file.name,
          size: file.size,
          src: img,
        });
      }

      this.isLoading = false;
    },

    async loadImgAsDataUrl(file) {
      const url = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = (e) => resolve(e.target.result);
      });

      return url;
    },

    formatNumber(num) {
      return new Intl.NumberFormat('en', {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
      }).format(num);
    },
  },
};
</script>


<style lang="scss">
$primColor: #008484;
$secTextColor: #6f6f6f;

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
  user-select: none;
  position: sticky !important;
  top: -2px;
  text-align: center;
  background-color: rgba($primColor, 0.05);
  backdrop-filter: blur(35px) saturate(200%);
  border-top: 2px solid $primColor;
  border-bottom: 2px solid $primColor;
  transition: all ease 300ms;

  .fs-droppable {
    padding: 2rem 0;
    transition: all ease 200ms;
  }

  .fs-btn-select {
    background-color: $primColor;
    padding: 0.75rem 2rem;
    color: #fff;
    border-radius: 1px;
    transition: all ease 200ms;

    &:hover {
      cursor: pointer;
      background-color: lighten($primColor, 5);
    }

    &:active {
      background-color: darken($primColor, 5);
      transform: scale(0.95);
      transition: all ease 60ms;
    }
  }

  .fs-loader {
    background-color: transparent !important;
  }

  &.fs-drag-enter {
    background-color: rgba($primColor, 0.1);

    .fs-droppable {
      transition: all ease 100ms;
      transform: scale(0.98);
    }
  }
}




.section-top {
  margin-bottom: 2rem;
  color: $secTextColor;
  font-size: 0.875rem;
}
.section-bottom {
  margin-top: 2rem;
  color: $secTextColor;
  font-size: 0.875rem;
}
.section-loader {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all ease 300ms;
  background-color: rgba(#fff, 0.9);
  backdrop-filter: blur(20px);
}
.gallery {
  margin-top: 2rem;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;

  .gallery-item {
    height: 150px;
    overflow: hidden;
    display: grid;
    grid-template-rows: 1fr min-content;
    align-items: center;
    justify-content: center;

    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    background-color: rgba($primColor, 0.05);

    .img {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;

      img {
        max-width: 100%;
        max-height: 100%;
      }
    }

    .img-info {
      margin: 1rem 0;
      overflow: hidden;
      text-align: center;

      .img-name {
        white-space: nowrap;
        text-overflow: ellipsis;
        font-size: 0.875rem;
        max-width: 100%;
        overflow: hidden;
        padding: 0 1rem;
      }

      .img-size {
        font-size: 0.75rem;
        color: $secTextColor;
        text-align: center;
        padding: 0 1rem;
      }
    }
  }
}
</style>
