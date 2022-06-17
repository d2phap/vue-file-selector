import { FsValidationResult } from './types';
declare const _default: import("vue").DefineComponent<{
    multiple: {
        type: BooleanConstructor;
        default: boolean;
    };
    isLoading: {
        type: BooleanConstructor;
        default: boolean;
    };
    acceptExtensions: {
        type: StringConstructor;
        default: string;
    };
    maxFileSize: {
        type: NumberConstructor;
        default: number;
    };
    height: {
        type: NumberConstructor;
        default: number;
    };
    validateFn: {
        type: FunctionConstructor;
        default: () => boolean;
    };
}, {
    isDragEnter: import("vue").Ref<boolean>;
}, unknown, {}, {
    handleFilesChange(e: InputEvent): void;
    handleDrop(e: DragEvent): void;
    preprocessFiles(files: File[]): void;
    validate(files: File[]): FsValidationResult;
    checkFileExtensions(files: File[]): boolean;
    checkFileSize(files: File[]): boolean;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    multiple: {
        type: BooleanConstructor;
        default: boolean;
    };
    isLoading: {
        type: BooleanConstructor;
        default: boolean;
    };
    acceptExtensions: {
        type: StringConstructor;
        default: string;
    };
    maxFileSize: {
        type: NumberConstructor;
        default: number;
    };
    height: {
        type: NumberConstructor;
        default: number;
    };
    validateFn: {
        type: FunctionConstructor;
        default: () => boolean;
    };
}>>, {
    multiple: boolean;
    isLoading: boolean;
    acceptExtensions: string;
    maxFileSize: number;
    height: number;
    validateFn: Function;
}>;
export default _default;
