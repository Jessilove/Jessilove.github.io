# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Overview

This is a Jekyll-based personal blog adapted from `gaohaoyang.github.io`. The blog is titled "Jessi & Achel's Home" and serves as a personal website with blog posts about life and experiences.

## Development Commands

Since this is a Jekyll site without a Gemfile, you'll need to install Jekyll globally or work with the existing setup:

### Local Development
```bash
# Install Jekyll and Bundler (if not already installed)
gem install jekyll bundler

# Serve the site locally for development
bundle exec jekyll serve
# Or if bundle is not available:
jekyll serve

# The site will be available at http://localhost:4001 (as configured in _config.yml)
```

### Building for Production
```bash
# Build the static site
bundle exec jekyll build
# Or:
jekyll build

# Output will be in the _site directory
```

## Architecture & Structure

### Core Jekyll Structure
- **Configuration**: `_config.yml` contains all site settings including pagination (6 posts per page), social links, and analytics IDs
- **Posts**: Located in `_posts/` with naming format `YYYY-MM-DD-title.md`
- **Layouts**: Templates in `_layouts/` (default.html, post.html, page.html)
- **Includes**: Reusable components in `_includes/`
- **Styling**: Sass files in `_sass/` and CSS in `css/`

### Key Features
- **Pagination**: Uses jekyll-paginate plugin with 6 posts per page
- **Categories & Tags**: Full category and tag support with dedicated pages
- **Comments**: Configured for both Disqus and Duoshuo (currently disabled)
- **Analytics**: Baidu Tongji and Google Analytics integration
- **Social Integration**: Links for GitHub, email, and other social platforms

### Content Management
- **New Posts**: Create files in `_posts/` following the `YYYY-MM-DD-title.md` format
- **Front Matter**: All posts need proper YAML front matter with title, date, and optional categories/tags
- **Excerpts**: Use `<!--more-->` or the configured separator `\n\n\n\n` to control post excerpts

### Important Configuration
- **Base URL**: Empty (served from root)
- **Permalinks**: `/:year/:month/:day/:title/` format
- **Markdown**: Kramdown with GFM input and Rouge syntax highlighting
- **Port**: 4001 for local development