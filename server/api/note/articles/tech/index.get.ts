import snakecaseKeys from 'snakecase-keys'
import { StatusCode } from '@/enums/common/http/statusCode'
import type { NoteTechArticleRequestQuery } from '@/server/infrastructures/rest/note.com/api/v1/categories/tech'
import { getRequest } from '@/server/infrastructures/rest/note.com/api/v1/categories/tech'
import type { NoteTechArticleApiRequestQuery } from '@/server/types/business/note/articles/tech/http'
import { ErrorUtil, LangUtil } from '@/utils/core'

/**
 * 関数 `convertRequestQuery` は、`sort` プロパティと `page` プロパティをコピーすることによって、NoteTechArticleApiRequestQuery
 * オブジェクトを NoteTechArticleRequestQuery オブジェクトに変換します。
 * @param {NoteTechArticleApiRequestQuery} query - 「query」パラメータのタイプは「NoteTechArticleApiRequestQuery」です。
 * @returns NoteTechArticleRequestQuery タイプのオブジェクト。
 */
const convertRequestQuery = (
  query: NoteTechArticleApiRequestQuery
): NoteTechArticleRequestQuery => {
  return {
    sort: query?.sort,
    page: query?.page
  }
}

export default defineEventHandler(async (event) => {
  try {
    const query = getQuery<NoteTechArticleApiRequestQuery>(event)
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
