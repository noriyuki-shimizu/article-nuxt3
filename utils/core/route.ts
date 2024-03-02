import camelCaseKeys from 'camelcase-keys'
import snakeCaseKeys from 'snakecase-keys'
import type { LocationQueryRaw } from 'vue-router'
import { isEmpty } from './lang'

/**
 * 関数 `convertLocationQuery` は、オブジェクトのキーをスネークケースに変換し、変換されたキーを文字列として含む新しいオブジェクトを返します。
 * @param {T} value - `value` パラメーターは、文字列キーと未知の値を持つオブジェクトを表すジェネリック型 `T` です。
 * @returns 関数 `convertLocationQuery` は、タイプ `LocationQueryRaw` のオブジェクトを返します。
 */
export const convertLocationQuery = <T extends Record<string, unknown>>(
  value: T,
  enableQueryKey: string[] = []
): LocationQueryRaw => {
  return Object.entries(value).reduce((a, c) => {
    const [key, value] = c
    if (!isEmpty(enableQueryKey) && !enableQueryKey.includes(key)) {
      return a
    }
    return Object.assign(
      a,
      snakeCaseKeys({
        [key]: String(value)
      }, { deep: true })
    )
  }, {})
}

/**
 * この関数は、生の位置クエリ オブジェクトをキャメルケースのキーと値のペア オブジェクトに変換します。
 * @param {LocationQueryRaw} value -
 * パラメータ「value」のタイプは「LocationQueryRaw」です。これは、キーと値のペアのオブジェクトに変換する必要がある生の位置クエリを表します。
 * @returns 関数 `convertLocationQueryToValue` は、文字列キーと文字列値を持つオブジェクトである `Record<string, string>` を返します。
 */
export const convertLocationQueryToValue = (
  value: LocationQueryRaw,
  enableQueryKey: string[] = []
): Record<string, string> => {
  const camelCaseValue = camelCaseKeys(value, { deep: true })
  return Object.entries(camelCaseValue).reduce((a, c) => {
    const [key, value] = c
    if (!isEmpty(enableQueryKey) && !enableQueryKey.includes(key)) {
      return a
    }
    return Object.assign(a, {
      [key]: String(value)
    })
  }, {})
}
