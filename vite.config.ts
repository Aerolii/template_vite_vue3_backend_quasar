import { defineConfig, mergeConfig } from 'vite'

import baseConfig from './vite.config.base'
import devConfig from './vite.config.dev'
import prodConfig from './vite.config.prod'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  if (command === 'serve') {
    return mergeConfig(devConfig, baseConfig)
  } else {
    // command === 'build'
    return mergeConfig(prodConfig, baseConfig)
  }
})
