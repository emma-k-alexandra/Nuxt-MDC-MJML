import mjml2html from 'mjml'

/**
 * A Nuxt Plugin that takes HTML output by Vue and runs it through MJML to convert to email client friendly HTML
 */
export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.hook('app:rendered', async (renderContext) => {
    if (!renderContext.renderResult?.html) return

    const { html, json, errors } = await mjml2html(
      renderContext.renderResult.html,
      {
        minifyOptions: {
          minifyCss: false
        }
      }
    )

    if (errors.length > 0) {
      console.error('Errors during MJML render', errors)
    }

    console.debug('rendered mjml', html)

    renderContext.renderResult.html = html
  })
})
