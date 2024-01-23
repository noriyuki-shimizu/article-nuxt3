import { isNuxtError } from 'nuxt/app'
import type { NuxtError } from 'nuxt/app'
import { FetchError } from 'ofetch'
import { isString, isObject } from './lang'
import { STATUS_CODE_INTERNAL_SERVER_ERROR } from '@/constants/common/http/statusCode'

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
      ...err,
      statusCode: err.status || STATUS_CODE_INTERNAL_SERVER_ERROR,
      data: err.data
    }
  }
  if (err instanceof Error) {
    return {
      ...err,
      statusCode: STATUS_CODE_INTERNAL_SERVER_ERROR,
      data: null
    }
  }
  return {
    name: 'AppError',
    message: 'Internal server error',
    statusCode: STATUS_CODE_INTERNAL_SERVER_ERROR,
    data: null
  }
}
