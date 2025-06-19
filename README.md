# Vue UI 组件库

一个现代化的 Vue 3 组件库，使用 TypeScript 构建。

## 特性

- 🚀 基于 Vue 3 + TypeScript
- 📦 支持 ES Module 和 CommonJS
- 🎨 现代化的设计风格
- 🔧 完整的 TypeScript 类型支持
- 📚 详细的文档和示例
- ⚡️ 使用 Vite 构建，开发体验极佳

## 安装

```bash
npm install vue-ui-components
# 或
yarn add vue-ui-components
# 或
pnpm add vue-ui-components
```

## 使用

### 完整导入

```typescript
import { createApp } from 'vue'
import VueUIComponents from 'vue-ui-components'
import 'vue-ui-components/style.css'

const app = createApp()
app.use(VueUIComponents)
```

### 按需导入

```typescript
import { Button, Card } from 'vue-ui-components'
```

### 在模板中使用

```vue
<template>
  <div>
    <UiButton type="primary" @click="handleClick">
      点击我
    </UiButton>
    
    <UiCard title="卡片标题" content="卡片内容" />
  </div>
</template>
```

## 组件

### Button 按钮

基础的按钮组件。

#### 属性

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| type | `'default' \| 'primary' \| 'success' \| 'danger'` | `'default'` | 按钮类型 |
| size | `'small' \| 'medium' \| 'large'` | `'medium'` | 按钮尺寸 |
| disabled | `boolean` | `false` | 是否禁用 |
| text | `string` | `'按钮'` | 按钮文本 |

#### 事件

| 事件名 | 说明 | 参数 |
|--------|------|------|
| click | 点击事件 | `(event: MouseEvent)` |

### Card 卡片

通用卡片容器。

#### 属性

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| title | `string` | - | 卡片标题 |
| content | `string` | - | 卡片内容 |
| shadow | `'none' \| 'small' \| 'medium' \| 'large'` | `'medium'` | 阴影大小 |
| hoverable | `boolean` | `false` | 是否支持悬浮效果 |

#### 插槽

| 插槽名 | 说明 |
|--------|------|
| default | 默认内容 |
| header | 头部内容 |
| footer | 底部内容 |

## 开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建组件库
npm run build:lib

# 构建文档
npm run docs:build

# 运行 lint
npm run lint
```

## 发布

1. 更新版本号：`npm version patch/minor/major`
2. 构建组件库：`npm run build:lib`
3. 发布到 npm：`npm publish`

## 许可证

MIT 