const builtAt = new Date().toISOString()

export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      {
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content:
          process.env.npm_package_description ||
          'Students Assistant is your one stop to the In and outs of studying as a medical student here in Ukraine, we aim to get you the best for your money.'
      },
      {
        name: 'robots',
        content: 'index, follow'
      },
      {
        name: 'twitter:card',
        content: 'summary_large_image'
      },
      {
        name: 'twitter:site',
        content: '@NeniEmmanuel'
      },
      {
        property: 'og:type',
        content: 'profile'
      },
      {
        property: 'og:updated_time',
        content: builtAt
      }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/png',
        href: '/icon.png'
      }
    ],
    script: [
      {
        src: 'https://kit.fontawesome.com/41fc25a21c.js'
      }
    ]
  },

  loading: {
    color: '#fff'
  },

  manifest: {
    name: 'Students Assistant',
    short_name: 'St-A',
    description:
      'Students Assistant is your one stop to the In and outs of studying as a medical student here in Ukraine, we aim to get you the best for your money.',
    theme_color: '#000000',
    background_color: '#0A0A0A',
    display: 'standalone',
    start_url: '/',
    dir: 'auto',
    lang: 'en',
    icons: [
      {
        src: '/icon.png',
        sizes: '512x512',
        type: 'image/png'
      }
    ],
    categories: ['productivity', 'education', 'portfolio']
  },

  css: [
    'normalize.css/normalize.css',
    'aos/dist/aos.css',
    '~/assets/css/themify-icons.css',
    {
      src: '~/assets/scss/style.scss',
      lang: 'scss'
    }
  ],

  plugins: [
    '~/plugins/pagination',
    {
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
    '@nuxtjs/apollo',
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios',
    'nuxt-rfg-icon',
    '@nuxtjs/pwa',
    '@nuxtjs/netlify-files',
    '@nuxtjs/style-resources',
    [
      '@nuxtjs/google-adsense',
      {
        id: 'ca-pub-1797281199494379'
      }
    ],
    [
      'nuxt-i18n',
      {
        seo: true,
        baseUrl: 'https://barbaresco.netlify.com',
        locales: [
          {
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

  // Give apollo module options
  apollo: {
    includeNodeModules: true, // optional, default: false (this includes graphql-tag for node_modules folder)
    authenticationType: 'Basic', // optional, default: 'Bearer'
    errorHandler: '~/apollo/customErrorHandler',
    clientConfigs: {
      default:
        // {
        //   httpEndpoint:
        //     'https://cms.studentsassistantua.com/api/graphql/query?token=dbb9ed69aae53ff12694cd66c5e834',
        //   // 'https://students-assistant-gql.herokuapp.com/v1/graphql',
        //   httpLinkOptions: {
        //     credentials: 'same-origin'
        //   }
        // },
        '~/apollo/clientConfig.js',
      otherClient: {
        httpEndpoint:
          // 'https://cms.studentsassistantua.com/api/graphql/query?token=dbb9ed69aae53ff12694cd66c5e834',
          'https://students-assistant-gql.herokuapp.com/v1/graphql',
        httpLinkOptions: {
          credentials: 'same-origin'
        }
      }
    }
  },

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

  router: {
    middleware: ['animation', 'i18n']
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
