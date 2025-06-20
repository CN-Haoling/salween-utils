import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  if (mode === 'lib') {
    // 组件库构建配置
    return {
      plugins: [vue()],
      build: {
        lib: {
          entry: resolve(process.cwd(), 'src/index.ts'),
          name: 'SalweenUtils',
          fileName: (format) => `index.${format === 'es' ? 'mjs' : 'js'}`
        },
        rollupOptions: {
          // 确保外部化处理那些你不想打包进库的依赖
          external: ['vue'],
          output: {
            // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
            globals: {
              vue: 'Vue'
            },
            exports: 'named'
          }
        }
      }
    }
  } else {
    // 开发环境配置
    return {
      plugins: [vue()],
      resolve: {
        alias: {
          '@': resolve(process.cwd(), 'src')
        }
      },
      server: {
        port: 3000,
        open: true
      }
    }
  }
}) 