import typescript from 'rollup-plugin-typescript2';
import vue from 'rollup-plugin-vue';
import clear from 'rollup-plugin-clear';
import externals from 'rollup-plugin-node-externals';
import copy from 'rollup-plugin-copy';
import { terser } from 'rollup-plugin-terser';
import banner from 'rollup-plugin-banner';
import styles from 'rollup-plugin-styles';

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

      copy({
        targets: [
          {
            src: ['./LICENSE', './README.md'],
            dest: './dist',
          },
        ],
      }),

      banner(`<%= pkg.name%> v<%= pkg.version %> by <%= pkg.author %>
Homepage: <%= pkg.homepage %>`),
    ],
  };
};
