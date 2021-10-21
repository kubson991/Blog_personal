export default {
    head:{
        title:"My Blog",
        meta: [{charset:"utf-8"},{ name:'viewport', content: 'width=device-width, initial-scale=1' }],
        link:[{ rel: 'icon', type: 'image/x-icon', href: '/favicon.jpg' }]
    },
    css: ["@/css/global.scss"],
    target: 'static',
    modules:['@nuxtjs/pwa'],
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