// .vitepress/theme/index.ts
import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import ReadingProgress from './components/ReadingProgress.vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
      'layout-top': () => h(ReadingProgress)
    })
  },
  enhanceApp({ app, router, siteData }) {
    // 注册全局组件
    app.component('ReadingProgress', ReadingProgress)
  }
}
