import Vue from 'vue'
import { createImage} from '~image'
import NuxtImg from '~image/components/nuxt-img.vue'
import NuxtPicture from '~image/components/nuxt-picture.vue'

import * as staticRuntime$dfee from '/home/sebastian/proyectosPersonales/blog-personal-Nuxt/node_modules/@nuxt/image/dist/runtime/providers/static.js'
import * as cloudinaryRuntime$9a8e from '/home/sebastian/proyectosPersonales/blog-personal-Nuxt/node_modules/@nuxt/image/dist/runtime/providers/cloudinary.js'

const imageOptions = {
  "screens": {
    "xs": 320,
    "sm": 640,
    "md": 768,
    "lg": 1024,
    "xl": 1280,
    "xxl": 1536,
    "2xl": 1536
  },
  "presets": {},
  "provider": "static",
  "domains": [
    "i.imgur.com"
  ],
  "alias": {}
}

imageOptions.providers = {
  ['static']: { provider: staticRuntime$dfee, defaults: {} },
  ['cloudinary']: { provider: cloudinaryRuntime$9a8e, defaults: {"baseURL":"https://res.cloudinary.com/dl4ytevqi/image/upload/"} }
}

Vue.component(NuxtImg.name, NuxtImg)
Vue.component(NuxtPicture.name, NuxtPicture)
Vue.component('NImg', NuxtImg)
Vue.component('NPicture', NuxtPicture)

export default function (nuxtContext, inject) {
  const $img = createImage(imageOptions, nuxtContext)

  if (process.static && process.server) {
    nuxtContext.beforeNuxtRender(({ nuxtState }) => {
      const ssrData = nuxtState.data[0] || {}
      ssrData._img = nuxtState._img || {}
    })
  }

  inject('img', $img)
}
