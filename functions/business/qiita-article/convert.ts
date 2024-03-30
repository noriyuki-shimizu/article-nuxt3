import dayjs from 'dayjs'
import { DATE_YYYYMMDD_JP } from '@/constants/business/date/template'
import type { QiitaArticleResponse } from '@/infrastructures/rest/qiita.com/api/v2/items'
import type { QiitaArticleViewModel } from '@/store/page/articles/qiita'

/**
 * 関数 `convertApiResponseToViewModel` は API 応答オブジェクトを受け取り、それを Qiita 記事のビューモデル配列に変換します。
 * @param {QiitaArticleResponse | undefined} response - `response` パラメータは `QiitaArticleResponse` 型で、Qiita API からの応答データを表します。
 * @returns Qiita 記事のビューモデル配列
 */
export const convertApiResponseToViewModel = (
  response: QiitaArticleResponse | undefined
): QiitaArticleViewModel[] | null => {
  if (LangUtil.isUndefined(response)) {
    return null
  }

  return response.map<QiitaArticleViewModel>((article) => {
    return {
      id: article.id,
      createdAt: dayjs(article.createdAt).format(DATE_YYYYMMDD_JP),
      likesCount: article.likesCount,
      private: article.private,
      reactionsCount: article.reactionsCount,
      stocksCount: article.stocksCount,
      title: article.title,
      updatedAt: dayjs(article.updatedAt).format(DATE_YYYYMMDD_JP),
      url: article.url,
      tagNames: article.tags.map((tag) => {
        return tag.name
      }),
      userId: article.user.id,
      userName: article.user.name,
      userProfileImageUrl: article.user.profileImageUrl,
      userItemCount: article.user.itemsCount
    }
  })
}
