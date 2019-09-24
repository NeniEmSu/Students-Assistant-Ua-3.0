export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [{
      charset: 'utf-8'
    },
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1'
    },
    {
      hid: 'description',
      name: 'description',
      content: process.env.npm_package_description || ''
    }
    ],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }],
    script: [{
      src: 'https://kit.fontawesome.com/41fc25a21c.js'
    }]
  },

  loading: {
    color: '#fff'
  },
  /*
   ** Global CSS
   */
  css: [
    'normalize.css/normalize.css',
    'aos/dist/aos.css',
    '~/assets/css/themify-icons.css',
    {
      src: '~/assets/scss/style.scss',
      lang: 'scss'
    }
  ],

  plugins: [{
    src: '~/plugins/aos.js',
    mode: 'client'
  },
  {
    src: '~/plugins/v-owl-carousel',
    ssr: false
  },
  '~/plugins/vuelidate.js',
  '~/plugins/vue-scrollto.js',
  {
    src: '~/plugins/vue-page-transition',
    ssr: true
  },
  {
    src: '~/plugins/vuex-persist',
    mode: 'client'
  }
  ],

  buildModules: ['@nuxtjs/eslint-module'],

  modules: [
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/netlify-files',
    '@nuxtjs/style-resources',
    [
      'nuxt-i18n',
      {
        seo: true,
        baseUrl: 'https://barbaresco.netlify.com',
        locales: [{
          iso: 'uk-Uk',
          code: 'uk',
          name: 'Українська'
        },
        {
          iso: 'en-US',
          code: 'en',
          name: 'English'
        },
        {
          iso: 'ru-RU',
          code: 'ru',
          name: 'Русский'
        }
        ]
      }
    ],
    [
      'vue-currency-filter/nuxt',
      {
        name: 'currency',
        symbol: '$',
        thousandsSeparator: ',',
        fractionCount: 2,
        fractionSeparator: '.',
        symbolPosition: 'front',
        symbolSpacing: false
      }
    ]
  ],

  i18n: {
    defaultLocale: 'en',
    vueI18nLoader: true,
    lazy: false,
    langDir: null,
    strategy: 'prefix_except_default',
    parsePages: true,
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      alwaysRedirect: false,
      fallbackLocale: 'uk'
    },
    vueI18n: {
      fallbackLocale: 'uk',
      messages: {
        uk: {
          links: {
            home: 'Головна',
            menu: 'Меню',
            delivery: 'Доставка їжі',
            reserveAPlace: 'Резервація місця',
            reservation: 'Резервація',
            aboutUs: 'Про нас',
            atmosphere: 'Атмосфера',
            vacancy: 'Ваканції',
            contact: 'Контакти'
          },
          order: 'Замовити',
          ukrainian: 'Українська',
          english: 'English',
          russian: 'Русский'
        },
        en: {
          links: {
            home: 'Home',
            menu: 'Menu',
            delivery: 'Food delivery',
            reserveAPlace: 'Reservation of place',
            reservation: 'Reservation',
            aboutUs: 'About us',
            atmosphere: 'Atmosphere',
            vacancy: 'Vacancies',
            contact: 'Contacts',
            kitchen: 'Kitchen'
          },
          ukrainian: 'Українська',
          english: 'English',
          russian: 'Русский',
          order: 'Order'
        },
        ru: {
          links: {
            home: 'Главная',
            menu: 'Меню',
            delivery: 'Доставка еды',
            reserveAPlace: 'Резервация места',
            reservation: 'Резервация',
            aboutUs: 'О нас',
            atmosphere: 'Атмосфера',
            vacancy: 'Вакансии',
            contact: 'Контакты',
            kitchen: 'Кухня'
          },
          ukrainian: 'Українська',
          english: 'English',
          russian: 'Русский',
          order: 'Заказать'
        }
      }
    }
  },

  proxy: {
    '/.netlify/functions/': {
      target: 'http://localhost:8000'
    }
  },

  styleResources: {
    scss: ['~/assets/scss/_variables.scss', '~/assets/scss/_mixins.scss']
  },

  axios: {},

  build: {
    extend (config, ctx) {}
  }
}
