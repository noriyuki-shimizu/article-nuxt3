/** Global Error Handler */
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.config.errorHandler = (error, instance, info) => {
    // eslint-disable-next-line no-console
    console.error(error, instance, info)
  }
})
