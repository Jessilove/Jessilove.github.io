# CLAUDE.md

此文件为Claude Code (claude.ai/code) 提供此代码库的工作指导。

## 项目概述

此仓库已从Jekyll迁移到Hugo静态网站生成器。博客标题为"Jessi & Achel's Home"，作为个人网站分享生活经历与体验。

**重要更新**: 博客已从Jekyll迁移到Hugo，并添加了本地管理功能。

## 开发命令

### Hugo开发
```bash
# 进入Hugo博客目录
cd hugo-blog

# 本地开发服务器
hugo server --buildDrafts --buildFuture

# 构建静态网站
hugo build

# 网站将运行于 http://localhost:1313
```

### 本地博客管理
```bash
# 启动管理服务器
npm run admin
# 或:
node admin-server.js

# 管理界面地址 http://localhost:3000/admin.html
```

## 架构与结构

### Hugo博客结构 (`hugo-blog/`)
- **配置**: `hugo-blog/config.toml` 包含所有网站设置
- **内容**: 文章在 `hugo-blog/content/posts/`，页面在 `hugo-blog/content/`
- **布局**: 模板在 `hugo-blog/layouts/`
- **静态资源**: 图片、CSS、JS在 `hugo-blog/static/`
- **主题**: 主题文件在 `hugo-blog/themes/`

### 本地管理系统
- **管理服务器**: `admin-server.js` - Node.js Express服务器提供管理API
- **管理界面**: `admin.html` - 基于Web的管理仪表板
- **包配置**: `package.json` - Node.js依赖项

### 核心功能
- **Hugo静态网站**: 快速、现代的静态网站生成器
- **本地管理**: 完整的Web界面用于内容管理
- **图片上传**: 支持多种图片分类（Chef J、文章、通用）
- **Git集成**: 自动化Git提交与格式化
- **Hugo预览**: 集成Hugo预览服务器管理
- **响应式设计**: 移动端友好的管理界面
- **Chef J图库**: 小红书风格图片网格布局（每行5张图片）

## 本地管理功能

### 文章管理
- 创建带有正确前置事项的新博客文章
- 编辑现有文章
- 自动从标题生成URL别名
- 支持分类和标签

### 图片管理
- 按分类上传图片（Chef J、文章、通用）
- 自动文件名净化
- 图片库管理
- 支持多种图片格式

### 发布工作流
- Git版本控制集成
- 自动化提交消息
- Hugo预览服务器管理
- 一键部署准备

### 导航与页面
- **首页**: 主要博客页面
- **Chef J**: 食谱合集与图片库
- **计划**: 个人计划页面
- **纪念日**: 特殊纪念日内容
- **额外**: 其他内容

## 技术实现

### 管理服务器API (`admin-server.js`)
- `POST /api/posts` - 创建新博客文章
- `GET /api/posts` - 列出所有博客文章
- `POST /api/upload` - 上传图片
- `GET /api/images` - 列出已上传图片
- `POST /api/commit` - Git提交更改
- `POST /api/preview` - 启动Hugo预览服务器
- `GET /api/health` - 健康检查端点

### Chef J图库布局
- 基于CSS Grid的响应式布局
- 桌面端每行5张图片
- 移动端响应式断点
- 每张图片下方有图片说明
- 悬停效果和合适的间距

## 重要配置

### Hugo配置 (`hugo-blog/config.toml`)
- **基础URL**: 配置为GitHub Pages
- **语言**: 中文 (zh-cn)
- **主题**: 自定义主题与迁移的样式
- **固定链接**: `/:year/:month/:day/:title/` 格式
- **分页**: 每页10篇文章

### 管理服务器配置
- **端口**: 3000
- **文件上传限制**: 10MB
- **支持的图片类型**: jpg, jpeg, png, gif, webp
- **存储路径**:
  - Chef J图片: `hugo-blog/static/pic/`
  - 文章图片: `hugo-blog/static/images/posts/`
  - 通用图片: `hugo-blog/static/images/`

## 迁移说明

### 从Jekyll到Hugo
- 成功迁移所有内容和样式
- 保留黄色背景主题
- 保持响应式设计
- 添加新的图片库功能
- 移除评论系统（按用户要求）

### 主要改进
- Hugo提供更快的构建时间
- 通过Web界面实现更好的本地管理
- 增强的图片库体验
- 简化的导航结构
- Git版本控制集成

## 使用说明

### 博客管理
1. 启动管理服务器: `npm run admin`
2. 浏览器打开 `http://localhost:3000/admin.html`
3. 使用仪表板管理文章、图片和发布

### 本地开发
1. 进入Hugo目录: `cd hugo-blog`
2. 启动Hugo服务器: `hugo server --buildDrafts --buildFuture`
3. 访问 `http://localhost:1313` 查看网站

### 生产部署
1. 使用管理界面提交更改
2. 推送到GitHub（GitHub Pages会自动部署）
3. 网站将在 `https://jessilove.github.io/` 可用