import { FetchError } from 'ofetch'
import { describe, expect, it } from 'vitest'
import { convertNuxtError } from './error'
import { StatusCode } from '@/enums/common/http/statusCode'

describe('Error utility functions', () => {
  describe('convertNuxtError', () => {
    it('should return the error if it is a string or object and is a NuxtError', () => {
      const nuxtError = {
        __nuxt_error: true,
        name: 'NuxtError',
        message: 'An error occurred',
        statusCode: StatusCode.STATUS_CODE_INTERNAL_SERVER_ERROR,
        data: null,
        fatal: false,
        unhandled: false,
        toJSON: () => {
          return {
            statusCode: StatusCode.STATUS_CODE_INTERNAL_SERVER_ERROR,
            statusMessage: '',
            message: ''
          }
        }
      }
      expect(convertNuxtError(nuxtError)).toEqual(nuxtError)
    })

    it('should return a NuxtError if the error is a FetchError', () => {
      const fetchError = new FetchError('An error occurred')
      const expectedError = {
        ...fetchError,
        name: fetchError.name,
        message: fetchError.message,
        stack: fetchError.stack,
        statusCode: fetchError.status || StatusCode.STATUS_CODE_INTERNAL_SERVER_ERROR,
        data: fetchError.data
      }
      expect(convertNuxtError(fetchError)).toEqual(expectedError)
    })

    it('should return a NuxtError if the error is an instance of Error', () => {
      const error = new Error('An error occurred')
      const expectedError = {
        ...error,
        name: error.name,
        message: error.message,
        stack: error.stack,
        statusCode: StatusCode.STATUS_CODE_INTERNAL_SERVER_ERROR,
        data: null
      }
      expect(convertNuxtError(error)).toEqual(expectedError)
    })

    it('should return a default NuxtError if the error is not a string, object, FetchError, or Error', () => {
      const error = 123
      const expectedError = {
        name: 'AppError',
        message: 'Internal server error',
        statusCode: StatusCode.STATUS_CODE_INTERNAL_SERVER_ERROR,
        data: null
      }
      expect(convertNuxtError(error)).toEqual(expectedError)
    })
  })
})
