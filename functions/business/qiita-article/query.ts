import type { LocationQuery } from 'vue-router'
import { ENABLE_QUERY_KEY } from '@/constants/business/route/query'

/**
 * 関数 `getKeyword` は、RouteUtil を使用して、指定された LocationQuery オブジェクトから 'q' キーの値を抽出します。
 * @param {LocationQuery} query - `getKeyword` 関数の `query` パラメータは `LocationQuery` 型です。これは、場所クエリ
 * オブジェクトからキーワード値を抽出するために使用されます。
 * @returns 関数 `getKeyword` は、`queryValue` オブジェクトからプロパティ 'q' が存在する場合はその値を返し、存在しない場合は 'null' を返します。
 */
export const getKeyword = (query: LocationQuery): string | null => {
  const queryValue = RouteUtil.convertLocationQueryToValue(query, ENABLE_QUERY_KEY)
  return 'q' in queryValue ? queryValue.q : null
}
