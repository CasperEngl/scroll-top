import typescript from '@rollup/plugin-typescript'
import { terser } from 'rollup-plugin-terser'

export default {
  input: './src/index.ts',
  output: {
    exports: 'named',
    name: 'scrollTop',
    dir: './lib',
    format: 'umd',
    sourcemap: true,
  },
  plugins: [
    typescript(),
    terser(),
  ],
}
