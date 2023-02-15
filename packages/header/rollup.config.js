import vue from 'rollup-plugin-vue'
import typescript from 'rollup-plugin-typescript2';

const overrides = {
  compilerOptions: {declaration: true},
  exclude: ["tests/**/*.ts", "tests/**/*.tsx"],
}

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
    typescript({
      tsconfigOverride: overrides
    }),
    vue(),
  ]
}
