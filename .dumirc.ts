import { defineConfig } from 'dumi';

const isDev = process.env.NODE_ENV === 'development';
const sourcePath = isDev ? '/' : '/SoyaMilk-design/';
console.log(`isDev--->`, isDev);
export default defineConfig({
  base: sourcePath,
  publicPath: sourcePath,
  outputPath: 'docs-dist',
  themeConfig: {
    logo: `${sourcePath}logo.webp`,
    name: 'SoyaMilk-design',
    footer: 'SoyaMilk-design © 2024',
    nav: {
      // mode可选值有：override、append、prepend
      // - override: 直接覆盖约定导航，与 nav: [{ title: 'Blog', link: '/blog' }] 配置相同
      // - append: 将 value 中的导航追加到约定路由后面
      // - prepend: 将 value 中的导航添加到约定路由前面
      mode: 'override',
      value: [
        {
          title: '介绍',
          link: '/guide',
        },
        {
          title: '组件',
          link: '/components',
        },
      ],
    },
    // 相关文档: https://d.umijs.org/guide/conventional-routing
    // https://d.umijs.org/config#sidebar
    sidebar: {
      '/components': [
        {
          title: '通用组件',
          children: [
            {
              title: '按钮',
              link: '/components/button',
            },
            {
              title: 'Icon',
              link: '/components/icon',
            },
          ],
        },
        {
          title: '反馈',
          children: [
            {
              title: '骨架屏',
              link: '/components/button2',
            },
            {
              title: '水印',
              link: '/components/icon2',
            },
          ],
        },
      ],
    },
  },
});
