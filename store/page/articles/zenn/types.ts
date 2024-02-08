import type { ZennArticle, ZennArticleUser } from '@/infrastructures/rest/nuxt/api/zenn/articles'

/** Zenn の記事データにおける View Model */
export type ZennArticleViewModel = Pick<ZennArticle, 'id' | 'title' | 'commentsCount' | 'likedCount' | 'articleType' | 'emoji' | 'path' | 'publishedAt' | 'bodyUpdatedAt'> & {
    userId: ZennArticleUser['id']
    userName: ZennArticleUser['username'],
    userDisplayName: ZennArticleUser['name'],
    userAvatarUrl: ZennArticleUser['avatarSmallUrl']
}

/** API State */
export type ApiState = {
    /** 記事データにおける View Model */
    articles: ZennArticleViewModel[] | null
}
