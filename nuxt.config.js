export default {
    head:{
        title:"My Blog",
        meta: [{charset:"utf-8"},{ name:'viewport', content: 'width=device-width, initial-scale=1' }],
        link:[{ rel: 'icon', type: 'image/x-icon', href: '/favicon.jpg' }]
    },
    image: {
      domains: ['https://i.imgur.com']
    },
    css: ["@/css/global.scss"],
    target: 'static',
    modules:['@nuxtjs/pwa','@nuxt/image'],
    pwa: {
        icon: false // disables the icon module
      },
    manifest: {
        name: 'PersonalBlog',
        short_name: 'Blog',
        lang: 'en',
        display: 'standalone',
      }
}