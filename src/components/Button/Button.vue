<template>
  <button 
    :class="buttonClass" 
    :disabled="disabled"
    @click="handleClick"
  >
    <slot>{{ text }}</slot>
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { ButtonProps } from './types'

defineOptions({
  name: 'UiButton'
})

const props = withDefaults(defineProps<ButtonProps>(), {
  type: 'default',
  size: 'medium',
  disabled: false,
  text: '按钮'
})

const emit = defineEmits<{
  click: [event: MouseEvent]
}>()

const buttonClass = computed(() => [
  'ui-button',
  `ui-button--${props.type}`,
  `ui-button--${props.size}`,
  {
    'ui-button--disabled': props.disabled
  }
])

const handleClick = (event: MouseEvent) => {
  if (!props.disabled) {
    emit('click', event)
  }
}
</script>

<style scoped>
.ui-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.2s ease;
  outline: none;
}

.ui-button:focus {
  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.5);
}

/* 类型样式 */
.ui-button--default {
  background-color: #f3f4f6;
  color: #374151;
  border: 1px solid #d1d5db;
}

.ui-button--default:hover:not(.ui-button--disabled) {
  background-color: #e5e7eb;
  border-color: #9ca3af;
}

.ui-button--primary {
  background-color: #3b82f6;
  color: white;
}

.ui-button--primary:hover:not(.ui-button--disabled) {
  background-color: #2563eb;
}

.ui-button--success {
  background-color: #10b981;
  color: white;
}

.ui-button--success:hover:not(.ui-button--disabled) {
  background-color: #059669;
}

.ui-button--danger {
  background-color: #ef4444;
  color: white;
}

.ui-button--danger:hover:not(.ui-button--disabled) {
  background-color: #dc2626;
}

/* 尺寸样式 */
.ui-button--small {
  padding: 6px 12px;
  font-size: 12px;
  min-height: 28px;
}

.ui-button--medium {
  padding: 8px 16px;
  font-size: 14px;
  min-height: 36px;
}

.ui-button--large {
  padding: 12px 24px;
  font-size: 16px;
  min-height: 44px;
}

/* 禁用状态 */
.ui-button--disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
</style> 