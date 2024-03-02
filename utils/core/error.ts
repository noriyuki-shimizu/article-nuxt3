import type { NuxtError } from '#app'
import { FetchError } from 'ofetch'
import { isObject, isString } from './lang'
import { StatusCode } from '@/enums/common/http/statusCode'

/**
 * エラーを Nuxt エラーデータに変換
 * @param err エラーオブジェクト
 * @returns Nuxt エラーデータ
 */
export const convertNuxtError = (err: unknown): Partial<NuxtError> => {
  if ((isString(err) || isObject(err)) && isNuxtError(err)) {
    return err
  }
  if (err instanceof FetchError) {
    return {
      name: err.name,
      message: err.message,
      cause: err.cause,
      stack: err.stack,
      statusCode: err.status || StatusCode.STATUS_CODE_INTERNAL_SERVER_ERROR,
      data: err.data
    }
  }
  if (err instanceof Error) {
    return {
      name: err.name,
      message: err.message,
      cause: err.cause,
      stack: err.stack,
      statusCode: StatusCode.STATUS_CODE_INTERNAL_SERVER_ERROR,
      data: null
    }
  }
  return {
    name: 'AppError',
    message: 'Internal server error',
    statusCode: StatusCode.STATUS_CODE_INTERNAL_SERVER_ERROR,
    data: null
  }
}
