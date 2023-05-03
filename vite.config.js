import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
// 语法糖设置组件name
import VueSetupExtend from 'vite-plugin-vue-setup-extend'
// 自动引入vue API
import AutoImport from 'unplugin-auto-import/vite'
// 自动引入 naive-ui 组件
import Components from 'unplugin-vue-components/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'
// svg-icon
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'

const svgIconPath = path.resolve(process.cwd(), 'src/assets/svg')

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [
    vue(),
    VueSetupExtend(),
    AutoImport({
      imports: [
        'vue',
        'vue-router'
      ],
      // eslint报错解决
      eslintrc: {
        enabled: true, // Default `false`
        filepath: "./.eslintrc-auto-import.json", // Default `./.eslintrc-auto-import.json`
        globalsPropValue: true, // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
      },
    }),
    Components({
      resolvers: [
        NaiveUiResolver(),
      ]
    }),
    // 注册svg-icon图标
    createSvgIconsPlugin({
      iconDirs: [svgIconPath],
      symbolId: 'icon-[dir]-[name]',
      inject: 'body-last',
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  }
})
