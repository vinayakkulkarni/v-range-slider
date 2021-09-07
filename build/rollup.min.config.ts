import alias from '@rollup/plugin-alias';
import babel from '@rollup/plugin-babel';
import beep from '@rollup/plugin-beep';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import sucrase from '@rollup/plugin-sucrase';
import scss from 'rollup-plugin-scss';
import { terser } from 'rollup-plugin-terser';
import vue from 'rollup-plugin-vue';
import pkg from '../package.json';

const extensions = ['.js', '.ts', '.vue'];

const banner = `/*!
 * ${pkg.name} v${pkg.version}
 * ${pkg.description}
 * (c) 2021 ${pkg.author.name}<${pkg.author.email}>
 * Released under the ${pkg.license} License
 */
`;

export default {
  input: 'src/index.ts',
  output: {
    file: pkg.jsdelivr,
    format: 'umd',
    name: 'VRangeSlider',
    exports: 'named',
    sourcemap: true,
    strict: true,
    banner,
    globals: {
      vue: 'vue',
      '@vue/composition-api': 'vueCompositionApi',
    },
  },
  plugins: [
    alias({
      entries: {
        vue: 'vue/dist/vue.runtime.esm.js',
      },
    }),
    resolve({
      extensions,
      browser: true,
    }),
    babel({
      babelHelpers: 'bundled',
      exclude: 'node_modules/**',
    }),
    commonjs({
      extensions,
      include: 'node_modules',
      exclude: 'src/**',
    }),
    vue({ css: false }),
    scss({
      output: 'dist/v-range-slider.min.css',
      // TODO: Remove once https://github.com/thgh/rollup-plugin-scss/pull/89 is merged
      // @ts-ignore
      outputStyle: 'compressed',
    }),
    sucrase({
      exclude: ['node_modules/**'],
      transforms: ['typescript'],
    }),
    terser({
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    }),
    beep(),
  ],
  external: ['vue', '@vue/composition-api'],
};
