export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Pastoral Cats - The Catsland Proof PFP',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Pastoral Cats - The Catsland Proof PFP' },
      { name: 'format-detection', content: 'telephone=no' },
      { property: 'url', content: 'https://pastoralcats.art/' },
      { property: 'type', content: 'article' },
      { property: 'title', content: 'Pastoral Cats - The Catsland Proof PFP' },
      { property: 'description', content: '"Pastoral Cats" is a pixel art work based on Chinese native cats. There are 10,000 pieces in total. Each piece is unique, and 8,000 pieces are free mint. We hope you like it.' },
      { property: 'image', content: 'https://pastoralcats.art/favicon.png' },
      { itemprop: 'image', content: 'https://pastoralcats.art/favicon.png' },
      { name: 'twitter:card', content: 'summary' },
      { name: 'twitter:site', content: '@Catsland01' },
      { name: 'twitter:creator', content: '@Catsland01' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'ant-design-vue/dist/antd.css',
    '@/assets/styles/main.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/antd-ui'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
