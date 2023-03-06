import { BuildOptions } from 'esbuild'

export const buildConfig = (): BuildOptions => ({
  entryPoints: [
    './src/components/Autosuggest',
    './src/components/Button',
    './src/components/Card',
    './src/components/CheckBox',
    './src/components/Confirmation',
    './src/components/Dialog',
    './src/components/ErrorBoundary',
    './src/components/Icon',
    './src/components/Input',
    './src/components/Pagination',
    './src/components/Select',
    './src/components/Spinner',
    './src/components/Switcher',
    './src/theme',
    './src/components/Toast',
  ],
  entryNames: '[dir]/[name]',
  outdir: 'dist',
  bundle: true,
  metafile: true,
  sourcemap: false,
  minify: true,
  splitting: false,
  format: 'cjs',
  color: true,
  publicPath: '/',
  loader: {
    '.js': 'jsx',
    '.svg': 'text',
  },
  external: ['react', 'react-dom', 'styled-components'],
})