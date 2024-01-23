import type { QiitaArticle, QiitaTag, QiitaUser } from '@/infrastructures/rest/qiita.com/api/v2/items'

/** Qiita の記事データにおける View Model */
export type QiitaArticleViewModel = Pick<QiitaArticle, 'id' | 'createdAt' | 'likesCount' | 'private' | 'reactionsCount' | 'stocksCount' | 'title' | 'updatedAt' | 'url'> & {
    tagNames: QiitaTag['name'][],
    userId: QiitaUser['id'],
    userName: QiitaUser['name'],
    userProfileImageUrl: QiitaUser['profileImageUrl'],
    userItemCount: QiitaUser['itemsCount']
}

/** API State */
export type ApiState = {
    /** 記事データにおける View Model */
    articles: QiitaArticleViewModel[] | null
}

/** UI State */
export type UiState = {
    /** 検索キーワード */
    searchKeyword: string | null
}
