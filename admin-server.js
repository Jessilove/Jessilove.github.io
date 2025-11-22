#!/usr/bin/env node

const express = require('express');
const multer = require('multer');
const fs = require('fs-extra');
const path = require('path');
const moment = require('moment');
const slugify = require('slugify');
const { exec } = require('child_process');

const app = express();
const PORT = 3000;

// 配置静态文件服务
app.use(express.static(path.join(__dirname)));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 配置图片上传
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        // 根据上传类型决定存储位置
        let uploadPath = 'hugo-blog/static/images';
        if (req.body.uploadType === 'chef-j') {
            uploadPath = 'hugo-blog/static/pic';
        } else if (req.body.uploadType === 'posts') {
            uploadPath = 'hugo-blog/static/images/posts';
        }

        // 确保目录存在
        fs.ensureDirSync(uploadPath);
        cb(null, uploadPath);
    },
    filename: function (req, file, cb) {
        // 生成安全的文件名
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        const fileExtension = path.extname(file.originalname);
        const fileName = slugify(path.basename(file.originalname, fileExtension)) + '-' + uniqueSuffix + fileExtension;
        cb(null, fileName);
    }
});

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 10 * 1024 * 1024 // 10MB limit
    },
    fileFilter: function (req, file, cb) {
        // 只允许图片文件
        if (file.mimetype.startsWith('image/')) {
            cb(null, true);
        } else {
            cb(new Error('只允许上传图片文件'));
        }
    }
});

// API路由

// 创建新文章
app.post('/api/posts', (req, res) => {
    try {
        const { title, content, categories = [], tags = [] } = req.body;

        if (!title) {
            return res.status(400).json({ error: '文章标题不能为空' });
        }

        const slug = slugify(title, { lower: true, strict: true, remove: /[*+~.()'"!:@]/g });
        const date = moment().format('YYYY-MM-DD');
        const fileName = `${date}-${slug}.md`;
        const filePath = path.join(__dirname, 'hugo-blog', 'content', 'posts', fileName);

        // 创建文章内容
        const postContent = `---
title: "${title}"
date: ${moment().format('YYYY-MM-DD HH:mm:ss')}
categories: [${categories.map(cat => `"${cat}"`).join(', ')}]
tags: [${tags.map(tag => `"${tag}"`).join(', ')}]
---

${content || ''}`;

        // 确保目录存在
        fs.ensureDirSync(path.dirname(filePath));

        // 写入文件
        fs.writeFileSync(filePath, postContent, 'utf8');

        res.json({
            success: true,
            message: '文章创建成功',
            filePath: filePath,
            url: `/posts/${moment().format('YYYY/MM/DD')}/${slug}/`
        });
    } catch (error) {
        console.error('创建文章失败:', error);
        res.status(500).json({ error: '创建文章失败: ' + error.message });
    }
});

// 获取所有文章
app.get('/api/posts', (req, res) => {
    try {
        const postsDir = path.join(__dirname, 'hugo-blog', 'content', 'posts');
        if (!fs.existsSync(postsDir)) {
            return res.json([]);
        }

        const files = fs.readdirSync(postsDir).filter(file => file.endsWith('.md'));
        const posts = files.map(file => {
            const content = fs.readFileSync(path.join(postsDir, file), 'utf8');
            const lines = content.split('\n');

            // 解析front matter
            let title = '未命名文章';
            let date = '';
            let categories = [];
            let tags = [];

            for (let line of lines) {
                if (line.startsWith('title:')) {
                    title = line.replace('title:', '').trim().replace(/"/g, '');
                } else if (line.startsWith('date:')) {
                    date = line.replace('date:', '').trim();
                } else if (line.startsWith('categories:')) {
                    const catMatch = line.match(/\[(.*?)\]/);
                    if (catMatch) {
                        categories = catMatch[1].split(',').map(cat => cat.trim().replace(/"/g, ''));
                    }
                } else if (line.startsWith('tags:')) {
                    const tagMatch = line.match(/\[(.*?)\]/);
                    if (tagMatch) {
                        tags = tagMatch[1].split(',').map(tag => tag.trim().replace(/"/g, ''));
                    }
                }
            }

            return {
                fileName: file,
                title: title,
                date: date,
                categories: categories,
                tags: tags
            };
        });

        res.json(posts);
    } catch (error) {
        console.error('获取文章列表失败:', error);
        res.status(500).json({ error: '获取文章列表失败' });
    }
});

// 上传图片
app.post('/api/upload', upload.single('image'), (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ error: '没有上传文件' });
        }

        // 计算相对于static目录的路径
        const staticPath = path.join(__dirname, 'hugo-blog', 'static');
        const relativePath = path.relative(staticPath, req.file.path).replace(/\\/g, '/');

        res.json({
            success: true,
            message: '图片上传成功',
            fileName: req.file.filename,
            filePath: relativePath,
            url: `/${relativePath}`
        });
    } catch (error) {
        console.error('图片上传失败:', error);
        res.status(500).json({ error: '图片上传失败: ' + error.message });
    }
});

// 获取图片列表
app.get('/api/images', (req, res) => {
    try {
        const uploadType = req.query.type || 'all';
        let imageDirs = [];

        if (uploadType === 'chef-j' || uploadType === 'all') {
            imageDirs.push(path.join(__dirname, 'hugo-blog', 'static', 'pic'));
        }
        if (uploadType === 'posts' || uploadType === 'all') {
            imageDirs.push(path.join(__dirname, 'hugo-blog', 'static', 'images', 'posts'));
        }
        if (uploadType === 'all') {
            imageDirs.push(path.join(__dirname, 'hugo-blog', 'static', 'images'));
        }

        const images = [];
        imageDirs.forEach(dir => {
            if (fs.existsSync(dir)) {
                const files = fs.readdirSync(dir).filter(file => {
                    const ext = path.extname(file).toLowerCase();
                    return ['.jpg', '.jpeg', '.png', '.gif', '.webp'].includes(ext);
                });
                files.forEach(file => {
                    const relativePath = path.relative(path.join(__dirname, 'hugo-blog', 'static'), path.join(dir, file)).replace(/\\/g, '/');
                    images.push({
                        name: file,
                        path: relativePath,
                        url: `/${relativePath}`,
                        type: path.basename(dir)
                    });
                });
            }
        });

        res.json(images);
    } catch (error) {
        console.error('获取图片列表失败:', error);
        res.status(500).json({ error: '获取图片列表失败' });
    }
});

// 执行Git提交
app.post('/api/commit', (req, res) => {
    try {
        const { message = 'Update blog content' } = req.body;

        exec('git add .', { cwd: __dirname }, (error, stdout, stderr) => {
            if (error) {
                console.error('Git add failed:', error);
                return res.status(500).json({ error: 'Git add failed: ' + error.message });
            }

            const commitMessage = `"${message}\n\n🤖 Generated with [Claude Code](https://claude.com/claude-code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>"`;

            exec(`git commit -m ${commitMessage}`, { cwd: __dirname }, (error, stdout, stderr) => {
                if (error) {
                    console.error('Git commit failed:', error);
                    return res.status(500).json({ error: 'Git commit failed: ' + error.message });
                }

                res.json({
                    success: true,
                    message: '更改已提交到Git',
                    output: stdout
                });
            });
        });
    } catch (error) {
        console.error('Git提交失败:', error);
        res.status(500).json({ error: 'Git提交失败: ' + error.message });
    }
});

// 启动Hugo预览服务器
app.post('/api/preview', (req, res) => {
    try {
        // 检查是否已经有Hugo服务器在运行
        exec('tasklist /fi "imagename eq hugo.exe"', { cwd: __dirname }, (error, stdout, stderr) => {
            if (stdout.includes('hugo.exe')) {
                res.json({
                    success: true,
                    message: 'Hugo预览服务器已经在运行',
                    url: 'http://localhost:1313'
                });
            } else {
                // 启动Hugo服务器
                const hugoProcess = exec('cd hugo-blog && hugo server --buildDrafts --buildFuture', {
                    cwd: __dirname,
                    detached: true
                });

                hugoProcess.unref(); // 不阻塞主进程

                // 等待几秒让服务器启动
                setTimeout(() => {
                    res.json({
                        success: true,
                        message: 'Hugo预览服务器已启动',
                        url: 'http://localhost:1313'
                    });
                }, 3000);
            }
        });
    } catch (error) {
        console.error('启动预览失败:', error);
        res.status(500).json({ error: '启动预览失败: ' + error.message });
    }
});

// 健康检查
app.get('/api/health', (req, res) => {
    res.json({
        status: 'ok',
        message: '博客管理服务正常运行',
        timestamp: new Date().toISOString()
    });
});

// 启动服务器
app.listen(PORT, () => {
    console.log(`🚀 博客管理面板已启动!`);
    console.log(`📁 项目目录: ${__dirname}`);
    console.log(`🌐 访问地址: http://localhost:${PORT}`);
    console.log(`📄 管理界面: http://localhost:${PORT}/admin.html`);
    console.log(`🔧 API端点: http://localhost:${PORT}/api/health`);
});

// 错误处理
process.on('uncaughtException', (error) => {
    console.error('未捕获的异常:', error);
});

process.on('unhandledRejection', (reason, promise) => {
    console.error('未处理的Promise拒绝:', reason);
});