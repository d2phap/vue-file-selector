/**
 * Validates the selected files.
 * @returns `true` if the files are valid.
 * @returns `false` if the files are valid
 */
export declare type FsValidateFn = (files: File[]) => boolean;
/**
 * The validation result.
 */
export declare type FsValidationResult = boolean | 'MULTIFILES_ERROR' | 'EXTENSION_ERROR' | 'FILE_SIZE_ERROR';
