export interface CardProps {
  /** 卡片标题 */
  title?: string
  /** 卡片内容 */
  content?: string
  /** 阴影大小 */
  shadow?: 'none' | 'small' | 'medium' | 'large'
  /** 是否支持悬浮效果 */
  hoverable?: boolean
} 