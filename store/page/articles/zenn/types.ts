import type { ZennArticle, ZennArticleUser } from '@/infrastructures/rest/nuxt/api/zenn/articles'

/** Zenn の記事データにおける View Model */
export interface ZennArticleViewModel {
    id: ZennArticle['id'];
    title: ZennArticle['title'];
    commentsCount: ZennArticle['commentsCount'];
    likedCount: ZennArticle['likedCount'];
    articleType: ZennArticle['articleType'];
    emoji: ZennArticle['emoji'];
    path: ZennArticle['path'];
    publishedAt: ZennArticle['publishedAt'];
    bodyUpdatedAt: ZennArticle['bodyUpdatedAt'];
    userId: ZennArticleUser['id'];
    userName: ZennArticleUser['username'];
    userDisplayName: ZennArticleUser['name'];
    userAvatarUrl: ZennArticleUser['avatarSmallUrl'];
  }

/** API State */
export interface ApiState {
    /** 記事データにおける View Model */
    articles: ZennArticleViewModel[] | null
}
