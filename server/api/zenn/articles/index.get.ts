import snakecaseKeys from 'snakecase-keys'
import { StatusCode } from '@/enums/common/http/statusCode'
import { getRequest } from '@/server/infrastructures/rest/zenn.dev/api/articles'
import type { ZennArticleRequestQuery } from '@/server/infrastructures/rest/zenn.dev/api/articles'
import type { ZennArticleApiRequestQuery } from '@/server/types/business/zenn/articles/http'
import { ErrorUtil, LangUtil } from '@/utils/core'

/**
 * 関数 `convertRequestQuery` は、クエリ オブジェクトを ZennArticleApiRequestQuery タイプから ZennArticleRequestQuery
 * タイプに変換します。
 * @param {ZennArticleApiRequestQuery} query - 「query」パラメータのタイプは「ZennArticleApiRequestQuery」です。
 * @returns 関数 `convertRequestQuery` は、タイプ `ZennArticleRequestQuery` のオブジェクトを返します。
 */
const convertRequestQuery = (
  query: ZennArticleApiRequestQuery
): ZennArticleRequestQuery => {
  return {
    category: query?.category,
    order: query?.order,
    page: query?.page
  }
}

export default defineEventHandler(async (event) => {
  try {
    const query = getQuery<ZennArticleApiRequestQuery>(event)
    const response = await getRequest(convertRequestQuery(query))

    if (LangUtil.isUndefined(response._data)) {
      setResponseStatus(event, StatusCode.STATUS_CODE_NO_CONTENT)
      return
    }

    setResponseStatus(event, StatusCode.STATUS_CODE_OK)
    return snakecaseKeys({ ...response._data }, { deep: true })
  } catch (e) {
    const error = ErrorUtil.convertNuxtError(e)
    throw createError(error)
  }
})
