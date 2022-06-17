import typescript from 'rollup-plugin-typescript2';
import vue from 'rollup-plugin-vue';
import clear from 'rollup-plugin-clear';
import externals from 'rollup-plugin-node-externals';
import { terser } from 'rollup-plugin-terser';
import banner2 from 'rollup-plugin-banner2';
import styles from 'rollup-plugin-styles';

const pjson = require('./package.json');

const isProduction = (process.env.NODE_ENV === 'production');
console.log(`${ isProduction ? 'production' : 'development' } mode bundle`);

export default async function config(args) {
  return {
    input: 'src/index.ts',
    output: {
      dir: 'dist',
      format: 'cjs',
      sourcemap: true,
      exports: 'named',

      assetFileNames: '[name][extname]',
    },
    plugins: [
      vue(),

      styles({
        minimize: true,
        mode: ['extract', 'main.css'],
      }),

      typescript({
        tsconfigOverride: {
          compilerOptions: {
            declaration: true,
          },
          include: null,
        },
      }),

      clear({
        targets: ['./dist'],
      }),

      externals({
        deps: false,    // If you installed your own deps with --save
        devDeps: false  // If you installed your own deps with --save-dev
      }),

      terser({
        ecma: 2020,
        mangle: { toplevel: true },
        compress: {
          module: true,
          toplevel: true,
          unsafe_arrows: true,
          drop_console: isProduction,
          drop_debugger: isProduction,
        },
        output: { quote_style: 1 },
      }),

      banner2(() => `/**
 * ${pjson.name} v${pjson.version} by ${pjson.author}
 * Homepage: ${pjson.homepage}
 */

`, {
        sourcemap: true,
      }),
    ],
  };
};
