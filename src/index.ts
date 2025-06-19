import type { App } from 'vue'
import Button from './components/Button/Button.vue'
import Card from './components/Card/Card.vue'

// 导出所有组件
export { Button, Card }

// 导出组件类型
export type { ButtonProps } from './components/Button/types'
export type { CardProps } from './components/Card/types'

// 组件列表
const components = [Button, Card]

// 定义 install 方法，接收 Vue 作为参数
const install = (app: App): void => {
  components.forEach((component) => {
    const name = component.name || component.__name || 'UnknownComponent'
    app.component(name, component)
  })
}

// 默认导出插件对象
export default {
  install
}

// 版本信息
export const version = '1.0.0' 