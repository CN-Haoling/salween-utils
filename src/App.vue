<template>
  <div id="app">
    <div class="container">
      <h1>Vue UI 组件库演示</h1>
      
      <section class="demo-section">
        <h2>按钮组件</h2>
        <div class="demo-group">
          <UiButton type="default" @click="handleClick">默认按钮</UiButton>
          <UiButton type="primary" @click="handleClick">主要按钮</UiButton>
          <UiButton type="success" @click="handleClick">成功按钮</UiButton>
          <UiButton type="danger" @click="handleClick">危险按钮</UiButton>
        </div>
        
        <div class="demo-group">
          <UiButton size="small" type="primary">小按钮</UiButton>
          <UiButton size="medium" type="primary">中按钮</UiButton>
          <UiButton size="large" type="primary">大按钮</UiButton>
        </div>
        
        <div class="demo-group">
          <UiButton disabled>禁用按钮</UiButton>
        </div>
      </section>
      
      <section class="demo-section">
        <h2>卡片组件</h2>
        <div class="demo-group">
          <UiCard 
            title="基础卡片" 
            content="这是一个基础的卡片组件示例"
            shadow="medium"
          />
          
          <UiCard 
            title="悬浮卡片" 
            content="这个卡片支持悬浮效果"
            shadow="medium"
            hoverable
          />
          
          <UiCard shadow="large">
            <template #header>
              <h3>自定义头部</h3>
            </template>
            <p>这是自定义插槽内容</p>
            <template #footer>
              <UiButton type="primary" size="small">操作</UiButton>
            </template>
          </UiCard>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Button as UiButton, Card as UiCard } from './index'

const handleClick = (event: MouseEvent) => {
  console.log('按钮被点击了', event)
  alert('按钮被点击了！')
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  background-color: #f5f5f5;
}

#app {
  min-height: 100vh;
  padding: 20px;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

h1 {
  text-align: center;
  color: #2c3e50;
  margin-bottom: 40px;
  font-size: 2.5rem;
}

.demo-section {
  background: white;
  border-radius: 8px;
  padding: 24px;
  margin-bottom: 24px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.demo-section h2 {
  color: #2c3e50;
  margin-bottom: 20px;
  font-size: 1.5rem;
  border-bottom: 2px solid #3b82f6;
  padding-bottom: 8px;
}

.demo-group {
  display: flex;
  gap: 16px;
  margin-bottom: 16px;
  flex-wrap: wrap;
  align-items: flex-start;
}

.demo-group:last-child {
  margin-bottom: 0;
}
</style> 