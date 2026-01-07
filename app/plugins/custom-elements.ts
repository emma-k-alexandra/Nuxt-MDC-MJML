/**
 * A Nuxt Plugin to tell Vue to ignore MJML components
 */
export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.config.compilerOptions.isCustomElement = tag => {
    return tag.startsWith('mj-') || tag === 'mjml'
  }
})
