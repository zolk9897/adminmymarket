import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'
import {
  themePreprocessorPlugin,
  themePreprocessorHmrPlugin,
} from '@zougt/vite-plugin-theme-preprocessor'
export default defineConfig({
  resolve: {
    alias: [
      {
        find: '@',
        replacement: resolve(__dirname, 'src'),
      },
      {
        find: '~',
        replacement: resolve(__dirname, 'src'),
      },
    ],
  },
  plugins: [
    vue(),
    Components({
      resolvers: [AntDesignVueResolver({ importStyle: 'less' })],
    }),
    themePreprocessorPlugin({
      less: {
        arbitraryMode: true,
        defaultPrimaryColor: '#2c56d2',
      },
    }),
    themePreprocessorHmrPlugin(),
  ],
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {
          'primary-color': '#197AEB',
          'link-color': '#1d65c0',
          'border-color-base': '#efefef',
          'border-radius-base': '5px',
          'cyan-6': '#04d182',
          'text-color': '#505050',
        },
        javascriptEnabled: true,
      },
    },
  },
})
