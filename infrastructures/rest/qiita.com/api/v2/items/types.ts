export interface QiitaArticleRequestQuery {
  sort?: string
  page?: number
  query?: string
}

export interface QiitaTag {
  name: string
}

export interface QiitaUser {
  description: string | null
  facebookId: string | null
  followeesCount: number
  followersCount: number
  githubLoginName: string | null
  id: string
  itemsCount: number
  linkedinId: string | null
  location: string | null
  name: string
  organization: string | null
  permanentId: number
  profileImageUrl: string
  teamOnly: boolean
  twitterScreenName: string | null
  websiteUrl: string | null
}

export interface QiitaArticle {
  renderedBody: string
  body: string
  coediting: boolean
  commentsCount: number
  createdAt: string
  id: string
  likesCount: number
  private: boolean
  reactionsCount: number
  stocksCount: number
  tags: QiitaTag[]
  title: string
  updatedAt: string
  url: string
  user: QiitaUser
  pageViewsCount: number | null
  teamMembership: string | null
  organizationUrlName: string | null
  slide: boolean
}

export interface QiitaArticleResponse extends Array<QiitaArticle> {}
