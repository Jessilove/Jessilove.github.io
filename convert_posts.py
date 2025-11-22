#!/usr/bin/env python3
import os
import re
from datetime import datetime

# 源目录和目标目录
source_dir = '_posts'
target_dir = 'hugo-blog/content/posts'

# 确保目标目录存在
os.makedirs(target_dir, exist_ok=True)

# 遍历所有markdown文件
for filename in os.listdir(source_dir):
    if filename.endswith('.md'):
        source_path = os.path.join(source_dir, filename)
        target_path = os.path.join(target_dir, filename)

        with open(source_path, 'r', encoding='utf-8') as f:
            content = f.read()

        # 提取文件名中的日期和标题
        # 文件名格式: YYYY-MM-DD-title.md
        match = re.match(r'(\d{4}-\d{2}-\d{2})-(.+)\.md', filename)
        if match:
            date_str = match.group(1)
            title_from_filename = match.group(2).replace('-', ' ')

            # 转换Front Matter
            # 将layout: post删除
            content = re.sub(r'layout:\s*post\s*\n', '', content)

            # 确保有title字段
            if not re.search(r'^title:', content, re.MULTILINE):
                # 如果没有title字段，从文件名添加
                content = re.sub(r'---\n', f'---\ntitle: "{title_from_filename}"\n', content, count=1)

            # 确保有date字段
            if not re.search(r'^date:', content, re.MULTILINE):
                # 如果没有date字段，从文件名添加
                content = re.sub(r'---\n', f'---\ndate: {date_str}\n', content, count=1)

            # 转换categories和tags为数组格式（可选）
            content = re.sub(r'^categories:\s*(.+)$', r'categories: [\1]', content, flags=re.MULTILINE)
            content = re.sub(r'^tags:\s*(.+)$', r'tags: [\1]', content, flags=re.MULTILINE)

            # 写入新文件
            with open(target_path, 'w', encoding='utf-8') as f:
                f.write(content)

            print(f"Converted {filename}")

print("All posts converted!")