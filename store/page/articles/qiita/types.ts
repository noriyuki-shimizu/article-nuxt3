import type {
  QiitaArticle,
  QiitaArticleRequestQuery,
  QiitaTag,
  QiitaUser
} from '@/infrastructures/rest/qiita.com/api/v2/items'

/** Qiita の記事データにおける View Model */
export interface QiitaArticleViewModel {
  id: QiitaArticle['id']
  createdAt: QiitaArticle['createdAt']
  likesCount: QiitaArticle['likesCount']
  private: QiitaArticle['private']
  reactionsCount: QiitaArticle['reactionsCount']
  stocksCount: QiitaArticle['stocksCount']
  title: QiitaArticle['title']
  updatedAt: QiitaArticle['updatedAt']
  url: QiitaArticle['url']
  tagNames: QiitaTag['name'][]
  userId: QiitaUser['id']
  userName: QiitaUser['name']
  userProfileImageUrl: QiitaUser['profileImageUrl']
  userItemCount: QiitaUser['itemsCount']
}

/** API State */
export interface ApiState {
  /** 記事データ取得におけるリクエストデータ */
  articleRequestData: QiitaArticleRequestQuery | null
  /** 記事データにおける View Model */
  articles: QiitaArticleViewModel[] | null
}

/** UI State */
export interface UiState {
  /** 検索キーワード */
  searchKeyword: string | null
}
