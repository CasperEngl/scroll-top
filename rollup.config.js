import typescript from 'rollup-plugin-typescript'
import { terser } from 'rollup-plugin-terser'

import pkg from './package.json'

export default [
  {
    input: './src/scroll-top.ts',
    output: {
      name: 'scrollTop',
      dir: './lib',
      format: 'umd',
      globals: {
        tslib: 'tslib',
      },
    },
    plugins: [
      typescript(),
      terser(),
    ],
    external: ['tslib'],
  },
  {
    input: './src/scroll-top.ts',
    output: [
      {
        file: pkg.module,
        format: 'es',
      },
      {
        name: 'scrollTop',
        exports: 'named',
        file: pkg.browser,
        format: 'umd',
      },
    ],
  },
]
