# Hugo Blog - Jessi & Achel's Home

这是从Jekyll迁移到Hugo的个人博客项目。

## 项目结构

```
hugo-blog/
├── content/          # 内容目录
│   ├── posts/       # 博客文章
│   └── stories.md   # 归档页面
├── layouts/         # 模板文件
│   ├── _default/    # 默认模板
│   ├── partials/    # 部分模板（组件）
│   ├── categories/  # 分类页面模板
│   └── tags/        # 标签页面模板
├── static/          # 静态资源
│   ├── css/        # 样式文件
│   ├── js/         # JavaScript文件
│   └── pic/        # 图片资源
├── hugo.toml       # Hugo配置文件
└── .gitignore      # Git忽略文件
```

## 本地开发

### 前提条件

确保已安装Hugo（Extended版本）：
- [Hugo安装指南](https://gohugo.io/installation/)
- 当前使用版本：v0.152.0

### 启动开发服务器

```bash
cd hugo-blog
hugo server --buildDrafts --buildFuture
```

访问 http://localhost:1313 查看网站

### 构建生产版本

```bash
cd hugo-blog
hugo --minify
```

构建产物将生成在 `public/` 目录

## 创建新文章

```bash
cd hugo-blog
hugo new content/posts/YYYY-MM-DD-title.md
```

文章Front Matter格式：

```yaml
---
date: 2019-02-15
title: "文章标题"
categories: [Travel]
tags: [Travels]
author: Achel
---
```

## 部署

### 自动部署

项目已配置GitHub Actions自动部署流程。推送到`master`分支时会自动触发部署。

**重要**: 需要在GitHub仓库设置中启用GitHub Pages:
1. 进入仓库 Settings > Pages
2. Source选择 "GitHub Actions"
3. 保存设置

### 手动部署

如需手动部署，可以运行：

```bash
cd hugo-blog
hugo --minify
# 然后将public/目录的内容部署到服务器
```

## 功能特性

- 首页文章列表（支持分页，每页6篇）
- 文章详情页
- 分类系统（/categories/）
- 标签系统（/tags/）
- 归档页面（/Stories/）
- 上一篇/下一篇导航
- 相关文章推荐
- 评论系统集成（Disqus/Duoshuo）
- 统计分析（百度统计/Google Analytics）
- 响应式设计

## 迁移说明

本项目从Jekyll迁移而来，主要变更：

1. **配置文件**: `_config.yml` → `hugo.toml`
2. **文章目录**: `_posts/` → `content/posts/`
3. **模板语法**: Liquid → Go Templates
4. **静态资源**: 直接放在`static/`目录
5. **构建速度**: 比Jekyll快30-100倍

## 相关链接

- [Hugo官方文档](https://gohugo.io/documentation/)
- [Hugo模板语法](https://gohugo.io/templates/)
- [GitHub仓库](https://github.com/Jessilove/Jessilove.github.io)

## 许可证

本项目基于原Jekyll博客改编，保留原作者版权。
