const fs = require('fs');
const path = require('path');

// 读取package.json获取版本信息
const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));

// 生成类型声明文件内容
const typeDefinitions = `import type { App, DefineComponent } from 'vue';

export interface ButtonProps {
  /** 按钮类型 */
  type?: 'default' | 'primary' | 'success' | 'danger';
  /** 按钮尺寸 */
  size?: 'small' | 'medium' | 'large';
  /** 是否禁用 */
  disabled?: boolean;
  /** 按钮文本 */
  text?: string;
}

export interface CardProps {
  /** 卡片标题 */
  title?: string;
  /** 卡片内容 */
  content?: string;
  /** 阴影大小 */
  shadow?: 'none' | 'small' | 'medium' | 'large';
  /** 是否支持悬浮效果 */
  hoverable?: boolean;
}

export declare const Button: DefineComponent<ButtonProps>;
export declare const Card: DefineComponent<CardProps>;

declare const _default: {
    install: (app: App<any>) => void;
};
export default _default;

export declare const version = "${packageJson.version}";
`;

// 确保dist目录存在
if (!fs.existsSync('dist')) {
  fs.mkdirSync('dist');
}

// 写入类型声明文件
fs.writeFileSync('dist/index.d.ts', typeDefinitions);

console.log('✅ TypeScript declarations generated successfully!'); 