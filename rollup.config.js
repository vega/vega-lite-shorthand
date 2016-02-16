import typescript from 'rollup-plugin-typescript';

export default {
  entry: 'src/vls.ts',
  dest: 'vega-lite-shorthand.js',
  moduleName: 'vls',
  sourceMap: true,
  format: 'umd',

  plugins: [
    typescript()
  ]
}
