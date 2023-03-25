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
// 
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import { FileSystemIconLoader } from 'unplugin-icons/loaders'

const svgIconPath = path.resolve(process.cwd(), 'src/assets/svg')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VueSetupExtend(),
    AutoImport({
      imports: [
        'vue',
        'vue-router'
      ]
    }),
    Components({
      resolvers: [
        NaiveUiResolver(),
        // Icon图标自动引入
        IconsResolver({
          prefix: 'icon', // 动引入的Icon组件统一前缀，默认为 i，设置false为不需要前缀
          customCollections: ['custom'] // 配置icon自动引入
        })
      ]
    }),
    // 注册svg-icon图标
    createSvgIconsPlugin({
      iconDirs: [svgIconPath],
      symbolId: 'icon-custom-[dir]-[name]',
      inject: 'body-last',
    }),
    Icons({
      scale: 1, // 缩放
      defaultStyle: '', // 默认样式
      defaultClass: '', // 默认类名
      compiler: 'vue3', // 编译方式
      customCollections: {
        custom: FileSystemIconLoader(svgIconPath),
      },
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  }
})
