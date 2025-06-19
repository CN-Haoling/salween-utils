#!/bin/bash

set -e

echo "🚀 开始发布Vue组件库..."

# 检查是否有未提交的更改
if [ -n "$(git status --porcelain)" ]; then
  echo "❌ 发现未提交的更改，请先提交所有更改"
  exit 1
fi

# 运行测试和构建
echo "🔨 构建组件库..."
npm run build:lib

# 检查构建是否成功
if [ ! -f "dist/index.js" ] || [ ! -f "dist/index.mjs" ] || [ ! -f "dist/index.d.ts" ] || [ ! -f "dist/style.css" ]; then
  echo "❌ 构建失败，缺少必要文件"
  exit 1
fi

echo "✅ 构建完成"

# 版本更新选择
echo "请选择版本更新类型:"
echo "1) patch (补丁版本)"
echo "2) minor (次要版本)"
echo "3) major (主要版本)"
read -p "请输入选择 (1-3): " version_type

case $version_type in
  1) npm version patch ;;
  2) npm version minor ;;
  3) npm version major ;;
  *) echo "❌ 无效选择"; exit 1 ;;
esac

# 推送到Git
echo "📤 推送到Git仓库..."
git push origin main --tags

# 发布到npm
echo "📦 发布到npm..."
npm publish

echo "🎉 发布完成！" 