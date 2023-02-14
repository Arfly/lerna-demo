import vue from 'rollup-plugin-vue'
import typescript from 'rollup-plugin-typescript2';

export default {
  input: './src/App.vue',
  output: [
    {
      dir: 'dist',
      entryFileNames: '[name].js',
      format: 'esm',
      exports: 'named'
    }
  ],
  external: ['vue'],
  plugins: [
    vue()
  ]
}
