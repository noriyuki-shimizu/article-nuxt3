import type { QiitaArticleResponse } from '@/infrastructures/rest/qiita.com/api/v2/items'
import type { QiitaArticleViewModel } from '@/store/page/articles'
import { DATE_YYYYMMDD_JP } from '@/constants/date/template'

export const convertApiResponseToViewModel = (response: QiitaArticleResponse | undefined): QiitaArticleViewModel[] | null => {
  if (LangUtil.isUndefined(response)) {
    return null
  }

  const { $dayjs } = useNuxtApp()

  return response.map<QiitaArticleViewModel>((article) => {
    return {
      id: article.id,
      createdAt: $dayjs(article.createdAt).format(DATE_YYYYMMDD_JP),
      likesCount: article.likesCount,
      private: article.private,
      reactionsCount: article.reactionsCount,
      stocksCount: article.stocksCount,
      title: article.title,
      updatedAt: $dayjs(article.updatedAt).format(DATE_YYYYMMDD_JP),
      url: article.url,
      tagNames: article.tags.map<string>((tag) => {
        return tag.name
      }),
      userId: article.user.id,
      userName: article.user.name,
      userProfileImageUrl: article.user.profileImageUrl,
      userItemCount: article.user.itemsCount
    }
  })
}
