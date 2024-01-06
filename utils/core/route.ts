import camelCaseKeys from 'camelcase-keys'
import snakeCaseKeys from 'snakecase-keys'
import type { LocationQueryRaw } from 'vue-router'

/**
 * 関数 `convertLocationQuery` は、オブジェクトのキーをスネークケースに変換し、変換されたキーを文字列として含む新しいオブジェクトを返します。
 * @param {T} value - `value` パラメーターは、文字列キーと未知の値を持つオブジェクトを表すジェネリック型 `T` です。
 * @returns 関数 `convertLocationQuery` は、タイプ `LocationQueryRaw` のオブジェクトを返します。
 */
export const convertLocationQuery = <T extends Record<string, unknown>>(value: T): LocationQueryRaw => {
  const snakeCaseValue = snakeCaseKeys(value, { deep: true })
  return Object.keys(snakeCaseValue).reduce((a, c) => {
    return Object.assign(a, {
      [c]: String(snakeCaseValue[c])
    })
  }, {})
}

/**
 * この関数は、生の位置クエリ オブジェクトをキャメルケースのキーと値のペア オブジェクトに変換します。
 * @param {LocationQueryRaw} value -
 * パラメータ「value」のタイプは「LocationQueryRaw」です。これは、キーと値のペアのオブジェクトに変換する必要がある生の位置クエリを表します。
 * @returns 関数 `convertLocationQueryToValue` は、文字列キーと文字列値を持つオブジェクトである `Record<string, string>` を返します。
 */
export const convertLocationQueryToValue = (value: LocationQueryRaw): Record<string, string> => {
  const camelCaseValue = camelCaseKeys(value, { deep: true })
  return Object.keys(camelCaseValue).reduce((a, c) => {
    return Object.assign(a, {
      [c]: String(camelCaseValue[c])
    })
  }, {})
}
