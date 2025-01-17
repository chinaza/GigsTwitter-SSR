module.exports = {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'title',
        content: '#GigsTwitter - Curated job vacancies from twitter'
      },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        name: 'keywords',
        content:
          'jobs, twitter, gigs, vacancy, role, recruitment, hiring, urgent, fulltime, part-time, ongoing, contract, jobberman jobs,job vacancies, ngcareers, Latest jobs,jobs,vacancies,recruitment,careers,employment opportunities, graduate jobs, trainee Jobs, latest nigerian jobs,careers, jobs in lagos, jobs in abuja fct, jobs in port harcourt, vacancies, recruitment, oil and gas jobs, banking jobs, telecommunications jobs, ngo jobs,recruitment agencies Nigeria, nysc jobs, fresh graduates jobs, Submit CV, Nigerian Banks,company reviews, companies ratings, companies reviews,seeking jobs, i want a job, graduate jobs in nigeria, graduate nigeria jobs, graduate career jobs, graduate africa jobs, graduate Job nigeria, graduate nigeria online, hotnigerianjobs.com, jobs nigeria, career jobs, nigerianhotjobs, naijahotjobs, careers nigeria, graduate employment, graduate graduate jobs, graduate Nigerian Online, graduate Africa Jobs'
      },
      {
        property: 'og:url',
        content: 'https://twgigs.com'
      },
      {
        property: 'og:title',
        content: '#GigsTwitter - Curated job vacancies from twitter'
      },
      {
        hid: 'description',
        name: 'description',
        content:
          process.env.npm_package_description ||
          'Curated job vacancies from twitter'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        href: 'https://unpkg.com/ionicons@4.5.10-0/dist/css/ionicons.min.css',
        rel: 'stylesheet'
      },
      {
        rel: 'manifest',
        href: '/manifest/manifest.json'
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['~assets/css/variables.css', '~assets/css/style.css'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  server: {
    port: 8000, // default: 3000
    host: '0.0.0.0', // default: localhost,
    timing: false
  },
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://github.com/nuxt-community/modules/tree/master/packages/bulma
    '@nuxtjs/bulma',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa'
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    postcss: {
      preset: {
        features: {
          customProperties: false
        }
      }
    },
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
};
