# GitHub Pages 部署指南

## 配置步骤

### 1. 推送代码到 GitHub
\`\`\`bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git push -u origin main
\`\`\`

### 2. 启用 GitHub Pages
1. 进入你的 GitHub 仓库
2. 点击 "Settings" (设置)
3. 在左侧菜单中点击 "Pages"
4. 在 "Source" 下选择 "GitHub Actions"

### 3. 配置仓库名称（如果需要）
如果你的仓库名不是 `username.github.io`，你需要更新 `next.config.mjs` 中的 `basePath`：

\`\`\`javascript
basePath: process.env.NODE_ENV === 'production' ? '/your-repo-name' : '',
\`\`\`

### 4. 触发部署
- 每次推送到 `main` 分支时会自动部署
- 也可以在 GitHub 的 "Actions" 页面手动触发部署

### 5. 访问网站
部署完成后，你的网站将在以下地址可用：
- 如果是用户/组织仓库：`https://username.github.io`
- 如果是项目仓库：`https://username.github.io/repo-name`

## 注意事项

- 所有图片都在 `public` 目录中，会自动复制到输出目录
- Next.js 已配置为静态导出模式 (`output: 'export'`)
- 图片优化已禁用 (`unoptimized: true`)，适合静态部署
- `.nojekyll` 文件确保 GitHub Pages 正确处理下划线开头的文件

## 本地测试
在推送前，你可以本地测试构建：

\`\`\`bash
pnpm build
# 构建的静态文件将在 ./out 目录中
\`\`\`

使用本地服务器预览：
\`\`\`bash
npx serve out
