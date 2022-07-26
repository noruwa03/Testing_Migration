import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
 meta: {
    link: [
     { rel: "icon", type: "image/x-icon", href: "/logo.svg" },
      {rel: "stylesheet",
        href: "https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css",
   integrity: "sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor", crossorigin: "anonymous",    }
    ],
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "@/assets/sass/styles.css"
  ],
  
  // Plugins to run before rendering page: 
  // https://go.nuxtjs.dev/config-plugins
  plugins: [
    
  ],

  
  // Modules for dev and build (recommended): 
  // https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  
  modules: ['@pinia/nuxt'],

   runtimeConfig: {
    // The private keys which are only available within server-side
     apiKey: process.env.NUXT_API_KEY,
     authDomain: process.env.NUXT_AUTH_DOMAIN,
     projectId: process.env.NUXT_PROJECT_ID,
     storageBucket: process.env.NUXT_STORAGE_BUCKET,
     messagingSenderId: process.env.NUXT_MESSAGING_SENDER_ID,
     appId: process.env.NUXT_APP_ID,
     collection: process.env.NUXT_COLLECTION,
    // Keys within public, will be also exposed to the client-side
    public: {
      apiKey: process.env.NUXT_API_KEY,
     authDomain: process.env.NUXT_AUTH_DOMAIN,
     projectId: process.env.NUXT_PROJECT_ID,
     storageBucket: process.env.NUXT_STORAGE_BUCKET,
     messagingSenderId: process.env.NUXT_MESSAGING_SENDER_ID,
     appId: process.env.NUXT_APP_ID,
     collection: process.env.NUXT_COLLECTION,
    }
  }
})
