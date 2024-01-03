import type { ZennArticleResponse } from '@/infrastructures/rest/zenn.dev/api/articles'
import type { ZennArticleViewModel } from '@/store/page/articles'

/**
 * 関数 `convertApiResponseToViewModel` は API 応答オブジェクトを受け取り、それを Zenn 記事のビュー モデル オブジェクトの配列に変換します。
 * @param {ZennArticleResponse} response - 「response」パラメータのタイプは「ZennArticleResponse」で、Zenn
 * 記事に関する情報を含むオブジェクトです。
 * @returns Zenn 記事のビュー モデル オブジェクトの配列
 */
export const convertApiResponseToViewModel = (response: ZennArticleResponse | undefined): ZennArticleViewModel[] | null => {
  if (LangUtil.isUndefined(response)) {
    return null
  }

  return response.articles.map<ZennArticleViewModel>((article) => {
    return {
      id: article.id,
      title: article.title,
      commentsCount: article.commentsCount,
      likedCount: article.likedCount,
      articleType: article.articleType,
      emoji: article.emoji,
      path: article.path,
      publishedAt: article.publishedAt,
      bodyUpdatedAt: article.bodyUpdatedAt,
      userId: article.user.id,
      userName: article.user.name
    }
  })
}
