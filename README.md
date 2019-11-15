# Vue File selector
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fd2phap%2Fvue-file-selector.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2Fd2phap%2Fvue-file-selector?ref=badge_shield)

File selector with validation that supports drag-n-drop for Vuejs.

![Vue File selector](https://github.com/d2phap/vue-file-selector/raw/master/demo/public/screenshot.jpg)


### Other open source projects
- `ImageGlass` - A lightweight, versatile image viewer: https://imageglass.org
- `Fluent Reveal Effect Js` (Fluent Design System): https://github.com/d2phap/fluent-reveal-effect
- `FileWatcherEx` - A wrapper of C# FileSystemWatcher for Windows: https://github.com/d2phap/FileWatcherEx


##  Install
Run the command
```
npm i vue-file-selector@latest
```

NPM package: https://www.npmjs.com/package/vue-file-selector

Github source: https://github.com/d2phap/vue-file-selector

## Usage
Please see [Demo project](https://github.com/d2phap/vue-file-selector/tree/master/demo) for full example.

### Declare the plugin
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
    <file-selector
      accept-extensions=".jpg,.svg"
      :multiple="true"
      :max-file-size="5 * 1024 * 1024"
      @validated="handleFilesValidated"
      @changed="handleFilesChanged"
    >
      Select image files
    </file-selector>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    handleFilesValidated(result, files) {
      console.log('Validation result: ' + result);
    },

    handleFilesChanged(files) {
      console.log('Selected files: ');
      console.table(files);
    },
  },
};
</script>
```

## Slots
| Name | Default | Description |
| -- | -- | -- |
| `default` | `Select` | Content of the `Select` button. |
| `loader` | `Loading...` | Content of loading state. |
| `top` | `(empty)` | Top section content, above the `Select` button. |
| `bottom` | `(empty)` | Bottom section content, below the `Select` button. |


## Props
| Name | Type | Default | Description |
| -- | -- | -- | -- |
| `multiple` | `Boolean` | `false` | Allow multiple files selected. |
| `isLoading` | `Boolean` | `false` | Show or hide the loading section (slot: `loader`). |
| `acceptExtensions` | `String` | `(empty)` | List of file extensions accepted. Each extension separated by a comma (`,`). E.g. `accept-extensions=".zip,.rar"`. |
| `maxFileSize` | `Number` | `NaN` | Maximum **size in byte** of every single file allowed. E.g. `:max-file-size="2*1024*1024"` (only the files that ≤2 MB are allowed). |
| `height` | `Number` | `NaN` | The height of droppable section. |
| `validateFn` | `Function -> Boolean` | `() => true` | A custom validation function that returns boolean value. |


## Events
### 1. `@validated`
Occurs after the selected files validated.

```js
Function(result: String | Boolean, files: FileList): void
```
- `result`: validation result, 
  + returns `true` if the file validation is valid, else
  + returns `false` or [Error codes (`string`)](#error-codes).
- `files`: list of files validated.

### 2. `@changed`
Occurs if the selected files pass validation.

```js
Function(files: FileList): void
```
- `files`: list of files validated.


## Error codes
List of error codes returned after validation.

| Code | Error description |
| -- | -- |
| `EXTENSION_ERROR` | The selected files contain invalid extensions. |
| `FILE_SIZE_ERROR` | The selected files size exceeded limit. |
| `MULTIFILES_ERROR` | Multiple files selection is not allowed. |


## License
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fd2phap%2Fvue-file-selector.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2Fd2phap%2Fvue-file-selector?ref=badge_large)

