// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/mdc'],
  mdc: {
    components: {
      prose: true
    },
    headings: {
      anchorLinks: false
    }
  },
  components: {
    dirs: [
      {
        global: true,
        path: './components/prose'
      },
      '~/components'
    ]

  },
  vue: {
    compilerOptions: {
      isCustomElement: tag => tag.startsWith('mj-') || tag === 'mjml'
    }
  },
  app: {
    rootTag: 'mjml',
    rootAttrs: {
      id: undefined
    }
  }
})
