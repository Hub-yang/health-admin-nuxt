// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true,
    timeline: {
      enabled: true,
    },
  },
  ssr: false,
  css: ['~/assets/styles/index.scss'],
  modules: ['@pinia/nuxt', '@unocss/nuxt', '@ant-design-vue/nuxt', '@vueuse/nuxt'],
  routeRules: {
    '/': { redirect: '/login' },
  },
  imports: {
    dirs: ['store/*.{ts,js}', 'api/*.{ts,js}'],
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/styles/variables.scss" as *;',
        },
      },
    },
  },
})
