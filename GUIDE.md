# Vue组件库开发指南

## 📁 项目结构

```
vue-ui-components/
├── src/                    # 源代码目录
│   ├── components/         # 组件目录
│   │   ├── Button/        # 按钮组件
│   │   │   ├── Button.vue
│   │   │   └── types.ts
│   │   └── Card/          # 卡片组件
│   │       ├── Card.vue
│   │       └── types.ts
│   ├── index.ts           # 组件库入口文件
│   ├── App.vue           # 演示应用
│   └── main.ts           # 演示应用入口
├── dist/                  # 构建输出目录
├── scripts/              # 脚本目录
│   └── publish.sh        # 发布脚本
├── package.json          # 项目配置
├── vite.config.ts        # Vite配置
├── tsconfig.json         # TypeScript配置
└── README.md             # 项目说明
```

## 🚀 快速开始

### 1. 安装依赖
```bash
npm install
```

### 2. 启动开发服务器
```bash
npm run dev
```

### 3. 构建组件库
```bash
npm run build:lib
```

## 📦 添加新组件

### 1. 创建组件目录
在 `src/components/` 下创建新的组件目录，例如 `Input/`

### 2. 创建组件文件
```vue
<!-- src/components/Input/Input.vue -->
<template>
  <input 
    :class="inputClass"
    :type="type"
    :placeholder="placeholder"
    :disabled="disabled"
    v-model="value"
  />
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { InputProps } from './types'

defineOptions({
  name: 'UiInput'
})

const props = withDefaults(defineProps<InputProps>(), {
  type: 'text',
  disabled: false
})

const emit = defineEmits<{
  'update:modelValue': [value: string]
}>()

const value = computed({
  get: () => props.modelValue,
  set: (val) => emit('update:modelValue', val)
})

const inputClass = computed(() => [
  'ui-input',
  // 添加样式类
])
</script>

<style scoped>
.ui-input {
  /* 组件样式 */
}
</style>
```

### 3. 创建类型定义
```typescript
// src/components/Input/types.ts
export interface InputProps {
  modelValue?: string
  type?: 'text' | 'password' | 'email' | 'number'
  placeholder?: string
  disabled?: boolean
}
```

### 4. 导出组件
在 `src/index.ts` 中导出新组件：

```typescript
import Input from './components/Input/Input.vue'

// 添加到组件列表
const components = [Button, Card, Input]

// 导出组件
export { Button, Card, Input }

// 导出类型
export type { InputProps } from './components/Input/types'
```

## 🎨 样式规范

### CSS类命名规范
- 使用 `ui-` 前缀
- 采用 BEM 命名法：`ui-component__element--modifier`
- 例如：`ui-button--primary`, `ui-card__header`

### 样式变量
建议使用CSS自定义属性，便于主题定制：

```css
.ui-button {
  background-color: var(--ui-button-bg, #f3f4f6);
  color: var(--ui-button-color, #374151);
  border: 1px solid var(--ui-button-border, #d1d5db);
}
```

## 📚 组件开发最佳实践

### 1. TypeScript类型
- 为所有props定义接口
- 导出类型以供外部使用
- 使用泛型提高复用性

### 2. 可访问性
- 添加适当的ARIA属性
- 支持键盘导航
- 确保颜色对比度符合标准

### 3. 事件处理
- 使用描述性的事件名称
- 传递必要的事件参数
- 支持事件修饰符

### 4. 插槽设计
- 提供默认内容
- 使用具名插槽提高灵活性
- 通过作用域插槽传递数据

## 🚢 发布流程

### 1. 自动发布（推荐）
```bash
./scripts/publish.sh
```

### 2. 手动发布
```bash
# 1. 构建组件库
npm run build:lib

# 2. 更新版本号
npm version patch # 或 minor/major

# 3. 推送到仓库
git push origin main --tags

# 4. 发布到npm
npm publish
```

## 🔧 配置说明

### Vite配置
- 支持组件库模式和开发模式
- 自动外部化Vue依赖
- 生成ES和UMD格式

### TypeScript配置
- 支持Vue SFC
- 生成声明文件
- 路径别名支持

### NPM配置
- 指定入口文件和类型文件
- 配置发布文件白名单
- 设置peerDependencies

## 🐛 常见问题

### Q: 如何自定义主题？
A: 通过CSS自定义属性覆盖默认样式，或者提供主题配置选项。

### Q: 如何支持按需导入？
A: 已支持ES模块，可以直接按需导入组件。

### Q: 如何添加单元测试？
A: 可以添加Vitest或Jest进行单元测试。

## �� 许可证

MIT License 