import { useLogger } from 'nuxt/kit'

/** Global Error Handler */
export default defineNuxtPlugin((nuxtApp) => {
  const logger = useLogger('[Global Error Handler]')
  nuxtApp.vueApp.config.errorHandler = (error, instance, info) => {
    logger.error(error, instance, info)
  }
})
