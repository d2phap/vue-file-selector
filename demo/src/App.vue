<template>
  <FileSelector
    accept-extensions=".jpg,.svg"
    :multiple="true"
    :is-loading="isLoading"
    :max-file-size="5 * 1024 * 1024"
    @validated="handleFilesValidated"
    @changed="handleFilesChanged">
    Select image files

    <template #top>
      <div class="section-top">
        <p>
          You can click the below button or drop files into this area.
        </p>
        Max file size allowed: 5 MB.<br/>
        File extensions: JPG, SVG.
      </div>
    </template>

    <template #bottom>
      <div class="section-bottom">
        A project of
        <a href="https://imageglass.org/about" target="_blank">
          Duong Dieu Phap
        </a>
      </div>
    </template>

    <template #loader>
      <div class="section-loader">
        Processing files<br/>
        please wait...
      </div>
    </template>
  </FileSelector>

  <div class="gallery" v-if="gallery.length">
    <div
      v-for="(img, index) in gallery"
      class="gallery-item"
      :key="index">
      <div class="img">
        <img :src="img.src" alt="">
      </div>
      <div class="img-info">
        <div class="img-name" :title="img.name">{{ img.name }}</div>
        <div class="img-size">{{ formatNumber(img.size) }} bytes</div>
      </div>
    </div>
  </div>
</template>


<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { FsValidationResult } from 'vue-file-selector/dist';

@Options({})
export default class App extends Vue {
  private isLoading = false;
  private gallery: {
    name: string;
    size: number;
    src: string;
  }[] = [];

  handleFilesValidated(result: FsValidationResult, files: File[]) {
    console.log('Validation result: ', result, files);
  }

  async handleFilesChanged(files: File[]) {
    this.isLoading = true;
    // console.log('Selected files: ');
    // console.table(files);

    const promiseArr = files.map(f => this.loadImgAsDataUrl(f));
    const imgs = await Promise.all(promiseArr);

    this.gallery = imgs.map((img, index) => ({
      name: files[index].name,
      size: files[index].size,
      src: img,
    }));

    this.isLoading = false;
  }

  async loadImgAsDataUrl(file: File) {
    const url: string = await new Promise((resolve) => {
      const reader = new FileReader();

      reader.readAsDataURL(file);
      reader.onload = (e) => resolve(e.target?.result as string);
    });

    return url || '';
  }

  formatNumber(num: number) {
    return new Intl.NumberFormat('en', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(num);
  }
}
</script>


<style lang="scss">

$primColor: #008484;
$secTextColor: #6f6f6f;

html, body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  font-size: 1rem;
  box-sizing: border-box;
  line-height: normal;
}

body {
  margin: 0;
  padding: 2rem;
  padding-top: 0;

  p {
    margin-top: 0;
  }

  a, a:visited {
    color: $primColor;
  }
}

.fs-file-selector {
  margin-top: 1rem;
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
    border-radius: 5px;
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
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin: 0 -0.5rem;
  margin-top: 2rem;

  .gallery-item {
    height: 180px;
    width: 180px;
    margin: 0 0.5rem 1rem 0.5rem;

    overflow: hidden;
    display: grid;
    grid-template-rows: 70% 30%;
    align-items: center;
    justify-content: center;

    border-radius: 5px;
    background-size: cover;
    background-color: rgba($primColor, 0.2);

    .img {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;

      img {
        object-fit: cover;
        width: 100%;
        height: 100%;
      }
    }

    .img-info {
      padding: 0.5rem 0;
      overflow: hidden;
      text-align: center;

      .img-name {
        white-space: nowrap;
        text-overflow: ellipsis;
        font-size: 0.875rem;
        max-width: 100%;
        overflow: hidden;
        padding: 0 0.5rem;
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
