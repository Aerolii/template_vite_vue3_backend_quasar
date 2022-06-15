import eslint from 'vite-plugin-eslint'

export default {
  mode: 'development',
  server: {
    open: true,
    fs: {
      strict: true
    },
    port: 10010
  },
  plugins: [
    eslint({
      cache: false,
      include: ['src/**/*.ts', 'src/**/*.tsx', 'src/**/*.vue'],
      exclude: ['node_modules']
    })
  ]
}
