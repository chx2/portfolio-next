// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            link: [{ rel: 'icon', type: 'image/x-icon', href: '/images/favicon.ico' }],
            meta: [
                { name: "twitter:card", content: "summary_large_image" },
                { property: "og:image:width", content: "600" },
                { property: "og:image:height", content: "400" },
            ]
        },
        pageTransition: {
            name: 'page',
            mode: 'out-in'
        }
    },
    css: [
        '~/assets/css/style.css',
        'animate.css/animate.min.css'
    ],
    modules: [
        '@nuxt/content',
        '@pinia/nuxt',
        '@nuxtjs/tailwindcss'
    ],
    content: {
        // https://content.nuxtjs.org/api/configuration
    }
})
