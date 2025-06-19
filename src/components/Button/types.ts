export interface ButtonProps {
  /** 按钮类型 */
  type?: 'default' | 'primary' | 'success' | 'danger'
  /** 按钮尺寸 */
  size?: 'small' | 'medium' | 'large'
  /** 是否禁用 */
  disabled?: boolean
  /** 按钮文本 */
  text?: string
} 