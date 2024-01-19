import { defineConfig } from 'father';
const { resolve } = require('path');

export default defineConfig({
  // more father config: https://github.com/umijs/father/blob/master/docs/config.md
  esm: { output: 'dist' },
  alias: {
    '@': resolve(__dirname, 'src'),
    '~@': resolve(__dirname, 'src'),
  },
});
