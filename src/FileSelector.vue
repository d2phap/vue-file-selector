<template>
  <div class="fs-file-selector"
    :class="{ 'fs-drag-enter': isDragEnter }">
    <div class="fs-loader" v-show="isLoading">
      <slot name="loader">
        Loading...
      </slot>
    </div>

    <div class="fs-droppable"
      ref="fsDroppable"
      :style="{ height: height + 'px' }"
      @dragenter.stop.prevent="isDragEnter = true"
      @dragover.stop.prevent="() => {}"
      @dragleave.stop.prevent="isDragEnter = false"
      @drop.stop.prevent="handleDrop">
      <input
        ref="fileRef"
        type="file"
        tabindex="-1"
        :multiple="multiple"
        :accept="acceptExtensions"
        @change="handleFilesChange" />
      <slot name="top"></slot>

      <div href="#" class="fs-btn-select" @click="$refs.fileRef.click()">
        <slot>Select</slot>
      </div>

      <slot name="bottom"></slot>
    </div>
  </div>
</template>


<script lang="ts">
import { defineComponent, ref } from 'vue';
import { FsValidationResult } from './types';

export default defineComponent({
  name: 'FileSelector',
  props: {
    multiple: {
      type: Boolean,
      default: false,
    },

    isLoading: {
      type: Boolean,
      default: false,
    },

    acceptExtensions: {
      type: String,
      default: '',
    },

    maxFileSize: { // in bytes
      type: Number,
      default: NaN,
    },

    height: {
      type: Number,
      default: NaN,
    },

    validateFn: {
      type: Function,
      default: () => true,
    },
  },
  setup() {
    const isDragEnter = ref(false);

    return {
      isDragEnter,
    };
  },
  methods: {
    handleFilesChange(e: InputEvent) {
      const el = e.target as HTMLInputElement;

      if (!el.files || el.files?.length === 0) {
        return;
      }

      this.preprocessFiles(Array.from(el.files));
    },

    handleDrop(e: DragEvent) {
      this.isDragEnter = false;

      this.preprocessFiles(Array.from(e.dataTransfer?.files || []));
    },

    preprocessFiles(files: File[]) {
      const result = this.validate(files);
      this.$emit('validated', result, files);

      // validation
      if (result === true) {
        this.$emit('changed', files);
      }

      // clear selected files
      const fileRef = this.$refs.fileRef as HTMLInputElement;

      if (fileRef) {
        fileRef.value = '';
      }
    },

    validate(files: File[]): FsValidationResult {
      // file selection
      if (!this.multiple && files.length > 1) {
        return 'MULTIFILES_ERROR';
      }

      // extension
      if (!this.checkFileExtensions(files)) {
        return 'EXTENSION_ERROR';
      }

      // file size
      if (!this.checkFileSize(files)) {
        return 'FILE_SIZE_ERROR';
      }

      // custom validation
      return this.validateFn(files);
    },

    checkFileExtensions(files: File[]) {
      // get non-empty, unique extension items
      const extList = [...new Set(
        this.acceptExtensions.toLowerCase()
          .split(',')
          .filter(Boolean),
      )];

      // check if the selected files are in supported extensions
      const invalidFileIndex = files.findIndex(file => {
        const ext = `.${file.name.toLowerCase().split('.').pop()}`;

        return !extList.includes(ext);
      });

      // all exts are valid
      return invalidFileIndex === -1;
    },

    checkFileSize(files: File[]) {
      if (Number.isNaN(this.maxFileSize)) {
        return true;
      }

      // find invalid file size
      const invalidFileIndex = files.findIndex(file => file.size > this.maxFileSize);

      // all file size are valid
      return invalidFileIndex === -1;
    },
  },
});
</script>
