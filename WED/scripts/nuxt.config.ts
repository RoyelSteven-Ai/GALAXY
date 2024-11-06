export default defineNuxtConfig({
  modules: ['@nuxtjs/kinde'],
  kinde: {
    // This is true by default and adds 'auth-logged-in' and 'auth-logged-out'
    // middleware to your Nuxt application.
    // 
    // middleware: false,
    //
    // enable the debug `/api/health` endpoint
    // debug: true,
    // 
    // Set custom endpoints in case you use any of the default routes for other purposes
    // endpoints: {
    //   callback: '/api/callback',
    //   login: '/api/login',
    //   register: '/api/register',
    //   health: '/api/health',
    //   logout: '/api/logout'
    // }
  }
})
