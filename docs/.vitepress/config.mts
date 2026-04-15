import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "AI 全员落地 2026",
  description: "企业 AI 战略规划与运营方案",
  base: '/enterprise-ai-strategy-2026/',
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }],
    ['meta', { name: 'theme-color', content: '#6366f1' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: 'AI 全员落地 2026' }],
    ['meta', { property: 'og:description', content: '企业智能化转型战略规划与运营方案' }],
  ],
  
  themeConfig: {
    logo: '/logo.svg',
    
    nav: [
      { text: '首页', link: '/' },
      { text: '战略规划', link: '/strategy/' },
      { text: '运营方案', link: '/operation/' },
      { text: '关于', link: '/about' }
    ],

    sidebar: {
      '/strategy/': [
        {
          text: '战略规划',
          items: [
            { text: '概览', link: '/strategy/' },
            { text: '背景分析', link: '/strategy/background' },
            { text: '战略目标', link: '/strategy/goals' },
            { text: '实施路径', link: '/strategy/implementation' },
            { text: '关键举措', link: '/strategy/measures' },
            { text: '风险应对', link: '/strategy/risks' },
            { text: '成功指标', link: '/strategy/metrics' },
            { text: '预算资源', link: '/strategy/budget' },
            { text: '时间表', link: '/strategy/timeline' },
            { text: '成功案例', link: '/strategy/cases' }
          ]
        }
      ],
      '/operation/': [
        {
          text: '运营方案',
          items: [
            { text: '概览', link: '/operation/' },
            { text: '数据运营体系', link: '/operation/data-system' },
            { text: '运营执行计划', link: '/operation/execution' },
            { text: '运营工具清单', link: '/operation/tools' },
            { text: '模板和范例', link: '/operation/templates' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com' }
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2026 AI Team'
    },

    search: {
      provider: 'local'
    },

    outline: {
      level: [2, 3],
      label: '目录导航'
    }
  },

  markdown: {
    theme: {
      light: 'github-light',
      dark: 'github-dark'
    },
    lineNumbers: true
  },

  // 启用 SPA 模式以实现页面切换动画
  appearance: 'dark',
  
  // 优化构建
  vite: {
    build: {
      chunkSizeWarningLimit: 1600
    }
  }
})
