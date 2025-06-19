<template>
  <div :class="cardClass">
    <div v-if="$slots.header || title" class="ui-card__header">
      <slot name="header">
        <h3 class="ui-card__title">{{ title }}</h3>
      </slot>
    </div>
    
    <div class="ui-card__body">
      <slot>{{ content }}</slot>
    </div>
    
    <div v-if="$slots.footer" class="ui-card__footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { CardProps } from './types'

defineOptions({
  name: 'UiCard'
})

const props = withDefaults(defineProps<CardProps>(), {
  shadow: 'medium',
  hoverable: false
})

const cardClass = computed(() => [
  'ui-card',
  `ui-card--shadow-${props.shadow}`,
  {
    'ui-card--hoverable': props.hoverable
  }
])
</script>

<style scoped>
.ui-card {
  background-color: white;
  border-radius: 8px;
  border: 1px solid #e5e7eb;
  overflow: hidden;
  transition: all 0.2s ease;
}

.ui-card--shadow-small {
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
}

.ui-card--shadow-medium {
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

.ui-card--shadow-large {
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
}

.ui-card--shadow-none {
  box-shadow: none;
}

.ui-card--hoverable:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 25px -3px rgba(0, 0, 0, 0.1);
}

.ui-card__header {
  padding: 16px 20px;
  border-bottom: 1px solid #e5e7eb;
  background-color: #f9fafb;
}

.ui-card__title {
  margin: 0;
  font-size: 18px;
  font-weight: 600;
  color: #111827;
}

.ui-card__body {
  padding: 20px;
}

.ui-card__footer {
  padding: 16px 20px;
  border-top: 1px solid #e5e7eb;
  background-color: #f9fafb;
}
</style> 