export type ZennArticleRequestQuery = {
    category?: string,
    order?: string
    page?: number
}

type ZennArticlePublication = {
  id: number,
  name: string,
  displayName: string,
  avatarSmallUrl: string,
  pro: boolean,
  avatarRegistered: boolean
}

export type ZennArticleUser = {
  id: number,
  username: string,
  name: string,
  avatarSmallUrl: string
}

export type ZennArticle = {
  id: number,
  postType: string,
  title: string,
  slug: string,
  commentsCount: number,
  likedCount: number,
  bodyLettersCount: number,
  articleType: 'tech',
  emoji: string,
  isSuspendingPrivate: boolean,
  publishedAt: string,
  bodyUpdatedAt: string,
  sourceRepoUpdatedAt: string,
  pinned: boolean,
  path: string,
  user: ZennArticleUser,
  publication: ZennArticlePublication | null
}

export type ZennArticleResponse = {
    articles: ZennArticle[],
    nextPage: number
}
