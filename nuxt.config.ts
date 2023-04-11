// https://nuxt.com/docs/api/configuration/nuxt-config
export default {
    app: {
        head: {
          charset: 'utf-8',
          viewport: 'width=device-width, initial-scale=1',
          title: 'nuxt app',
          meta: [
            // <meta name="description" content="My amazing site">
            { name: 'description', content: 'test' }
          ],
        }
    },
    modules: [
      '@nuxtjs/tailwindcss',
      '@pinia/nuxt'
    ],
    tailwindcss: {
        cssPath: '~/assets/css/tailwind.css',
        configPath: 'tailwind.config',
        exposeConfig: false,
        config: {},
        injectPosition: 0,
        // viewer: true,
    }
}
