# 🚀 AI 全员落地 2026 - 战略与运营展示网站

企业 AI 战略规划与运营方案的精美展示网站，基于 VitePress 构建。

## ✨ UI 全新升级！

**🎨 现代化设计系统** - 类似 Stripe、Vercel、Linear 的顶级 UI
- 渐变色系统（深蓝紫 → 粉红）+ 磨砂玻璃效果
- 30+ 流畅动画（淡入、抬升、旋转、下划线）
- 响应式设计完美适配移动端
- 阅读进度条 + 彩色滚动条

**详见**: [UI_UPGRADE_REPORT.md](./UI_UPGRADE_REPORT.md) | [快速部署指南](./QUICK_DEPLOY_GUIDE.md)

## 📖 项目简介

这是一份面向2026年的**企业 AI 全员落地战略规划与运营方案**的展示网站，包含：

- ✅ **战略规划**（2.7万字）：完整的18个月战略规划
- ✅ **运营方案**（完整体系）：数据驱动的运营执行体系
- ✅ **工具模板**：周报月报、数据采集表、看板配置等
- ✅ **成功案例**：微软、BCG、互联网大厂标杆实践

## 🚀 快速开始

### 本地开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run docs:dev

# 访问 http://localhost:5173
```

### 构建生产版本

```bash
# 构建静态文件
npm run docs:build

# 预览构建结果
npm run docs:preview
```

## 📁 项目结构

```
ai-website/
├── docs/
│   ├── .vitepress/
│   │   ├── config.mts          # VitePress 配置
│   │   └── theme/              # 自定义主题（可选）
│   ├── index.md                # 首页
│   ├── about.md                # 关于页面
│   ├── strategy/               # 战略规划章节
│   │   ├── index.md            # 战略概览
│   │   ├── background.md       # 背景分析
│   │   ├── goals.md            # 战略目标
│   │   ├── implementation.md   # 实施路径
│   │   ├── measures.md         # 关键举措
│   │   ├── risks.md            # 风险应对
│   │   ├── metrics.md          # 成功指标
│   │   ├── budget.md           # 预算资源
│   │   ├── timeline.md         # 实施时间表
│   │   └── cases.md            # 成功案例
│   └── operation/              # 运营方案章节
│       ├── index.md            # 运营概览
│       ├── data-system.md      # 数据运营体系
│       ├── execution.md        # 运营执行计划
│       ├── tools.md            # 运营工具清单
│       └── templates.md        # 模板和范例
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions 部署配置
├── package.json
├── .gitignore
└── README.md
```

## 🌐 部署到 GitHub Pages

### 1. 创建 GitHub 仓库

```bash
# 初始化 Git 仓库
git init
git add .
git commit -m "Initial commit"

# 关联远程仓库
git remote add origin https://github.com/YOUR_USERNAME/ai-strategy-2026.git
git branch -M main
git push -u origin main
```

### 2. 配置 GitHub Pages

1. 进入仓库的 **Settings** → **Pages**
2. 在 **Source** 中选择 **GitHub Actions**
3. 推送代码后会自动触发部署

### 3. 访问网站

部署完成后，网站地址为：
```
https://YOUR_USERNAME.github.io/ai-strategy-2026/
```

## 🎨 自定义配置

### 修改网站标题和描述

编辑 `docs/.vitepress/config.mts`:

```typescript
export default defineConfig({
  title: "你的网站标题",
  description: "你的网站描述",
  base: '/你的仓库名/',
})
```

### 修改主题颜色

创建 `docs/.vitepress/theme/custom.css`:

```css
:root {
  --vp-c-brand-1: #646cff;
  --vp-c-brand-2: #747bff;
}
```

在 `docs/.vitepress/theme/index.ts` 中引入:

```typescript
import DefaultTheme from 'vitepress/theme'
import './custom.css'

export default {
  extends: DefaultTheme
}
```

## 📊 功能特性

### 🎨 UI 设计（全新升级）
- ✅ **现代化设计**: Stripe/Vercel/Linear 风格，顶级视觉体验
- ✅ **渐变色系统**: 深蓝紫 → 粉红多层次渐变
- ✅ **30+ 动画效果**: 淡入、抬升、旋转、下划线、页面切换
- ✅ **磨砂玻璃**: 导航栏、卡片半透明毛玻璃效果
- ✅ **阅读进度条**: 顶部彩色进度条实时追踪
- ✅ **响应式设计**: 完美适配移动端和桌面端（768px 断点）

### 📝 内容功能
- ✅ **Markdown 增强**: 支持代码高亮、表格、Mermaid 图表
- ✅ **全文搜索**: 内置本地搜索功能
- ✅ **目录导航**: 侧边栏 TOC，快速定位
- ✅ **深色模式**: 自动/手动切换深色主题

### 🚀 开发部署
- ✅ **快速部署**: GitHub Actions 自动部署
- ✅ **热更新**: 本地开发实时预览
- ✅ **性能优化**: 代码分块、GPU 加速动画

## 🛠️ 技术栈

- **框架**: VitePress 1.6.4
- **构建工具**: Vite
- **前端框架**: Vue 3
- **部署**: GitHub Pages + GitHub Actions
- **Markdown**: 增强的 Markdown 语法（支持 Mermaid）

## 📚 内容概览

### 战略规划篇

- **背景分析**: 2026年AI技术趋势、企业核心挑战
- **战略目标**: 80%日活率、27%效率提升、100+案例
- **实施路径**: 四阶段18个月实施计划
- **关键举措**: 培训体系、工具选型、激励机制
- **风险应对**: 技术门槛、抵触情绪、数据安全
- **成功指标**: 可量化的KPI体系
- **预算资源**: 200万投入、32.5倍ROI
- **实施时间表**: 详细的Gantt图和行动清单
- **成功案例**: 微软、BCG等标杆企业实践

### 运营方案篇

- **数据运营体系**: 采集、看板、分析、预警
- **运营执行计划**: Week by Week 行动清单、SOP
- **运营工具清单**: 数据采集、看板搭建、自动化工具
- **模板和范例**: 周报月报、数据表、看板配置

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

## 📄 许可协议

MIT License

## 📞 联系方式

如有疑问或建议，欢迎联系：

- **Email**: ai-committee@company.com
- **GitHub Issues**: [提交问题](https://github.com/YOUR_USERNAME/ai-strategy-2026/issues)

---

## 🎨 UI 升级亮点

### 视觉效果
- 🌈 渐变背景 + 动态网格
- 🔮 磨砂玻璃导航栏
- 🎯 彩色进度条
- ✨ 渐变色文字

### 交互动画
- 🎭 卡片悬停抬升
- 🎪 按钮缩放效果
- 🎨 链接下划线动画
- 🎬 页面淡入过渡

### 专业设计
- 📐 清晰的视觉层次
- 🌌 充足的留白
- 🎨 统一的圆角系统
- 🎯 企业级配色

**查看完整升级报告**: [UI_UPGRADE_REPORT.md](./UI_UPGRADE_REPORT.md)

---

**版本**: v2.0 (UI 全新升级)  
**发布日期**: 2026-04-14  
**UI 升级**: 2026-04-15  
**最后更新**: 2026-04-15
