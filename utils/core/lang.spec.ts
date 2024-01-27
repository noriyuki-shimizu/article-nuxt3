import { FetchError } from 'ofetch'
import { describe, it, expect } from 'vitest'
import { convertNuxtError } from './error'
import { STATUS_CODE_INTERNAL_SERVER_ERROR } from '@/constants/common/http/statusCode'

describe('Error utility functions', () => {
  describe('convertNuxtError', () => {
    it('should return the error if it is a string or object and is a NuxtError', () => {
      const nuxtError = {
        __nuxt_error: true,
        name: 'NuxtError',
        message: 'An error occurred',
        statusCode: 500,
        data: null,
        fatal: false,
        unhandled: false,
        toJSON: () => {
          return {
            statusCode: 500,
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
        statusCode: fetchError.status || STATUS_CODE_INTERNAL_SERVER_ERROR,
        data: fetchError.data
      }
      expect(convertNuxtError(fetchError)).toEqual(expectedError)
    })

    it('should return a NuxtError if the error is an instance of Error', () => {
      const error = new Error('An error occurred')
      const expectedError = {
        ...error,
        statusCode: STATUS_CODE_INTERNAL_SERVER_ERROR,
        data: null
      }
      expect(convertNuxtError(error)).toEqual(expectedError)
    })

    it('should return a default NuxtError if the error is not a string, object, FetchError, or Error', () => {
      const error = 123
      const expectedError = {
        name: 'AppError',
        message: 'Internal server error',
        statusCode: STATUS_CODE_INTERNAL_SERVER_ERROR,
        data: null
      }
      expect(convertNuxtError(error)).toEqual(expectedError)
    })
  })
})
