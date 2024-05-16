import { DefaultTheme, defineConfig } from 'vitepress'
import { cloneDeep } from 'lodash-es';  
import { fnMapTree } from './fn';

const sidebarArr: DefaultTheme.Sidebar = [
  {
    text: 'Workers',
    base: '/workers',
    collapsed: false,
    items: [
      { text: 'Overview', link: '/' },
      { text: 'Get started', base: '/workers/get-started', link: '/', collapsed: false,
        items: [
          {text: 'Guide', link: '/guide'},
          {text: 'Quickstarts', link: '/quickstarts'},
        ]
       }
    ]
  }
]

const sidebarArr_en = cloneDeep(sidebarArr);
const sidebarArr_zh = cloneDeep(sidebarArr);
fnMapTree(sidebarArr_en);
fnMapTree(sidebarArr_zh, 'zh');

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Cloudflare Docs",
  description: "Cloudflare Docs",
  base: '/docs.cloudflare/',
  cleanUrls: true,
  locales: {
    root: { label: 'English', lang: 'en', link: '/en/' },
    zh: { label: '简体中文', lang: 'zh', link: '/zh/' },
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    outline: 'deep',
    sidebar: {
      '/en/': sidebarArr_en,
      '/zh/': sidebarArr_zh,
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
