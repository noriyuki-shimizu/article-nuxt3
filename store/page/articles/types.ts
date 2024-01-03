import type { ZennArticle, ZennArticleUser } from '@/infrastructures/rest/zenn.dev/api/articles'
import type { QiitaArticle, QiitaTag, QiitaUser } from '@/infrastructures/rest/qiita.com/api/v2/items'

/** Zenn の記事データにおける View Model */
export type ZennArticleViewModel = Pick<ZennArticle, 'id' | 'title' | 'commentsCount' | 'likedCount' | 'articleType' | 'emoji' | 'path' | 'publishedAt' | 'bodyUpdatedAt'> & {
    userId: ZennArticleUser['id']
    userName: ZennArticleUser['name']
}

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
    /** Zenn の記事データにおける View Model */
    zennArticles: ZennArticleViewModel[] | null
    /** Zenn の記事データにおける View Model */
    qiitaArticles: QiitaArticleViewModel[] | null
}
