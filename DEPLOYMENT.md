# 部署指南

## 📦 项目完成状态

✅ 已完成的内容：
- 完整的项目结构
- VitePress 配置文件
- 精美的首页设计
- 战略规划主页和背景分析页
- 运营方案主页
- 关于页面
- GitHub Actions 自动部署配置
- 静态 HTML 备用版本

## 🚀 部署方式

### 方式一：使用 VitePress（推荐）

#### 1. 安装依赖

```bash
cd C:\Users\cm\.easyclaw\workspace\ai-website
npm install
```

如果遇到安装问题，尝试：
```bash
# 清除缓存
npm cache clean --force

# 删除 node_modules
rm -rf node_modules package-lock.json

# 重新安装
npm install
```

#### 2. 本地预览

```bash
npm run docs:dev
```

访问 http://localhost:5173

#### 3. 构建生产版本

```bash
npm run docs:build
```

构建产物在 `docs/.vitepress/dist/` 目录

#### 4. 部署到 GitHub Pages

**方法 A: 使用 GitHub Actions（自动部署）**

1. 创建 GitHub 仓库：
```bash
cd C:\Users\cm\.easyclaw\workspace\ai-website
git init
git add .
git commit -m "Initial commit: AI Strategy 2026 Website"
```

2. 在 GitHub 创建仓库 `ai-strategy-2026`

3. 关联并推送：
```bash
git remote add origin https://github.com/YOUR_USERNAME/ai-strategy-2026.git
git branch -M main
git push -u origin main
```

4. 配置 GitHub Pages：
   - 进入仓库 Settings → Pages
   - Source 选择 "GitHub Actions"
   - 推送代码后自动部署

5. 访问网站：
```
https://YOUR_USERNAME.github.io/ai-strategy-2026/
```

**方法 B: 手动部署**

1. 构建：
```bash
npm run docs:build
```

2. 部署到 gh-pages 分支：
```bash
cd docs/.vitepress/dist
git init
git add -A
git commit -m 'deploy'
git push -f git@github.com:YOUR_USERNAME/ai-strategy-2026.git main:gh-pages
```

3. 配置 GitHub Pages：
   - Settings → Pages
   - Source: gh-pages 分支
   - 等待部署完成

---

### 方式二：使用静态 HTML（备用方案）

如果 VitePress 安装遇到问题，可以使用已生成的静态 HTML 版本：

#### 1. 查看本地 HTML

```bash
# 直接用浏览器打开
start docs/public/index.html
```

#### 2. 部署到任何静态托管服务

**Netlify:**
1. 登录 Netlify
2. 拖拽 `docs/public/` 文件夹到 Netlify
3. 自动部署完成

**Vercel:**
1. 登录 Vercel
2. Import Project
3. 选择 `docs/public/` 目录
4. 部署完成

**GitHub Pages（手动）:**
1. 将 `docs/public/` 内容复制到仓库根目录
2. 推送到 GitHub
3. Settings → Pages → 选择 main 分支

---

## 🛠️ 故障排除

### 问题1: npm install 失败

**症状**: `up to date, audited 1 package`，但 node_modules 为空

**解决方法**:
```bash
# 1. 检查 package.json
cat package.json

# 2. 手动安装依赖
npm install vitepress@latest --save-dev --legacy-peer-deps
npm install vue@latest --save-dev

# 3. 验证安装
ls node_modules | findstr vitepress
```

### 问题2: vitepress 命令未找到

**症状**: `'vitepress' is not recognized as an internal or external command`

**解决方法**:
```bash
# 使用 npx
npx vitepress dev docs

# 或全局安装
npm install -g vitepress
```

### 问题3: 构建失败

**症状**: `failed to load config from ...`

**解决方法**:
```bash
# 1. 检查配置文件语法
cat docs/.vitepress/config.mts

# 2. 确保依赖正确安装
npm list vitepress vue

# 3. 重新安装
rm -rf node_modules
npm install
```

---

## 📝 手动创建完整网站内容

如果自动化方式遇到问题，可以手动创建内容：

### 1. 战略规划章节（需补充）

已创建：
- ✅ `docs/strategy/index.md` - 概览页
- ✅ `docs/strategy/background.md` - 背景分析

待创建（可从原始文档复制内容）：
- `docs/strategy/goals.md` - 战略目标
- `docs/strategy/implementation.md` - 实施路径
- `docs/strategy/measures.md` - 关键举措
- `docs/strategy/risks.md` - 风险应对
- `docs/strategy/metrics.md` - 成功指标
- `docs/strategy/budget.md` - 预算资源
- `docs/strategy/timeline.md` - 实施时间表
- `docs/strategy/cases.md` - 成功案例

### 2. 运营方案章节（需补充）

已创建：
- ✅ `docs/operation/index.md` - 概览页

待创建：
- `docs/operation/data-system.md` - 数据运营体系
- `docs/operation/execution.md` - 运营执行计划
- `docs/operation/tools.md` - 运营工具清单
- `docs/operation/templates.md` - 模板和范例

### 3. 内容创建脚本

提供一个快速创建脚本：

```bash
# 创建战略规划子页面
$chapters = @(
    "goals", "implementation", "measures", 
    "risks", "metrics", "budget", "timeline", "cases"
)

foreach ($chapter in $chapters) {
    $path = "docs/strategy/$chapter.md"
    "# " + (Get-Culture).TextInfo.ToTitleCase($chapter) + "`n`n内容待补充..." | Out-File -FilePath $path -Encoding UTF8
}

# 创建运营方案子页面
$chapters = @("data-system", "execution", "tools", "templates")

foreach ($chapter in $chapters) {
    $path = "docs/operation/$chapter.md"
    "# " + (Get-Culture).TextInfo.ToTitleCase($chapter -replace "-", " ") + "`n`n内容待补充..." | Out-File -FilePath $path -Encoding UTF8
}
```

---

## 🎨 自定义样式

### 修改主题颜色

创建 `docs/.vitepress/theme/custom.css`:

```css
:root {
  /* 主色调 */
  --vp-c-brand-1: #667eea;
  --vp-c-brand-2: #764ba2;
  --vp-c-brand-3: #9333ea;
  
  /* 深色模式 */
  --vp-c-brand-dark: #764ba2;
  --vp-c-brand-darker: #9333ea;
}
```

创建 `docs/.vitepress/theme/index.ts`:

```typescript
import DefaultTheme from 'vitepress/theme'
import './custom.css'

export default {
  extends: DefaultTheme
}
```

---

## 📊 内容迁移指南

### 从原始文档迁移内容

原始文档位置：
- 战略方案：`C:\Users\cm\.easyclaw\workspace\ai-strategy-2026.md`
- 运营方案：`C:\Users\cm\.easyclaw\workspace\ai-operation-plan.md`

迁移步骤：

1. **提取章节**：按照原文档的章节结构，复制到对应的 .md 文件

2. **Markdown 格式优化**：
   - 检查标题层级（VitePress 使用 H1 作为页面标题）
   - 转换表格格式
   - 添加代码块语言标识
   - 转换 Mermaid 图表

3. **添加导航链接**：
```markdown
::: tip 下一步
继续阅读 [战略目标](/strategy/goals) →
:::
```

4. **添加目录**：
VitePress 会自动生成右侧目录，确保使用正确的标题层级（H2, H3）

---

## 🔍 验证清单

部署前检查：

- [ ] 所有 Markdown 文件格式正确
- [ ] Mermaid 图表正常渲染
- [ ] 所有内部链接有效
- [ ] 图片资源路径正确
- [ ] 代码块语法高亮正常
- [ ] 响应式设计在移动端正常
- [ ] 搜索功能可用
- [ ] GitHub Actions 配置正确
- [ ] base 路径设置匹配仓库名

---

## 📞 获取帮助

如遇到问题：

1. **查看 VitePress 官方文档**：https://vitepress.dev/
2. **检查构建日志**：GitHub Actions → 查看最新 Workflow
3. **本地测试**：先在本地 `npm run docs:dev` 确保无误
4. **使用静态 HTML 版本**：`docs/public/index.html` 作为备用方案

---

## 📈 下一步

网站上线后：

1. **完善内容**：补充所有待创建的章节
2. **添加交互**：可选添加评论系统（如 Giscus）
3. **SEO 优化**：添加 sitemap.xml 和 robots.txt
4. **性能优化**：压缩图片、启用 CDN
5. **分析跟踪**：添加 Google Analytics（可选）

---

**最后更新**: 2026-04-14  
**当前状态**: 基础框架完成，内容待补充
