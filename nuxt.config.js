export default {
    head:{
        title:"My Blog",
        meta: [{charset:"utf-8"},{ name:'viewport', content: 'width=device-width, initial-scale=1' }],
        link:[{ rel: 'icon', type: 'image/x-icon', href: '/favicon.jpg' }]
    },
    
    image: {    
      cloudinary: {
      baseURL: 'https://res.cloudinary.com/dl4ytevqi/image/upload/'
    },
      domains: ['https://i.imgur.com'],
      screens: {
        xs: 320,
        sm: 640,
        md: 768,
        lg: 1024,
        xl: 1280,
        xxl: 1536,
        '2xl': 1536
      },
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