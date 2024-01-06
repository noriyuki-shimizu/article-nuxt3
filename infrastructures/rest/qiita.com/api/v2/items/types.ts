export type QiitaArticleRequestQuery = {
    sort?: string,
    page?: number
    query?: string
}

export type QiitaTag = {
  name: string
}

export type QiitaUser = {
  description: string,
  facebookId: string,
  followeesCount: number,
  followersCount: number,
  githubLoginName: string | null,
  id: string,
  itemsCount: number,
  linkedinId: string,
  location: string,
  name: string,
  organization: string,
  permanentId: number,
  profileImageUrl: string,
  teamOnly: boolean,
  twitterScreenName: string | null,
  websiteUrl: string
}

export type QiitaArticle = {
  renderedBody: string,
  body: string,
  coediting: boolean,
  commentsCount: number,
  createdAt: string,
  id: string,
  likesCount: number,
  private: boolean,
  reactionsCount: number,
  stocksCount: number,
  tags: QiitaTag[],
  title: string,
  updatedAt: string,
  url: string,
  user: QiitaUser,
  pageViewsCount: number | null,
  teamMembership: string | null,
  organizationUrlName: string | null,
  slide: boolean
}

export type QiitaArticleResponse = QiitaArticle[]
