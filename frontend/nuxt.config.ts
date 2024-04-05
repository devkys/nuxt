// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  pages: true,
  router: {
    options: {
      scrollBehaviorType: 'smooth'
    }
  },
  hooks: {
    'pages:extend'(pages) {
      pages.push(
        {
          name: 'chat',
          path: '/chat',
          file: '~/pages/chat.vue'
        },
        {
          name: 'login',
          path: '/login',
          file: '~/pages/login.vue'
        },
        {
          name: 'timeline',
          path: '/timeline',
          file: '~/pages/timeline.vue'
        },
        {
          name: 'map',
          path: '/map',
          file: '~/pages/map.vue'
        },
        {
          name: 'my-page',
          path: '/my-page',
          file: '~/pages/my-page.vue'
        },
        {
          name: 'light',
          path: '/light',
          file: '~/pages/light.vue'
        }
      )
    }
  },
  modules: [
    '@nuxt/ui',
    '@nuxtjs/color-mode',
    'nuxt-icon'
  ],
  // colorMode: {
  //   preference: 'system',
  //   fallback: 'light',
  //   hid: 'nuxt-color-mode-script',
  //   globalName: '__NUXT_COLOR_MODE__',
  //   componentName: 'ColorScheme',
  //   classPrefix: '',
  //   classSuffix: '-mode',
  //   storageKey: 'nuxt-color-mode'
  // }
})
