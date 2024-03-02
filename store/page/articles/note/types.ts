import type { NoteTechArticle, NoteUser } from '@/infrastructures/rest/nuxt/api/note/articles/tech'

/** note の記事データにおける View Model */
export interface NoteArticleViewModel {
  id: NoteTechArticle['id']
  key: NoteTechArticle['key']
  body: NoteTechArticle['body']
  name: NoteTechArticle['name']
  noteUrl: NoteTechArticle['noteUrl']
  status: NoteTechArticle['status']
  price: NoteTechArticle['price']
  publishAt: NoteTechArticle['publishAt']
  createdAt: NoteTechArticle['createdAt']
  updatedAt: NoteTechArticle['updatedAt']
  likeCount: NoteTechArticle['likeCount']
  commentCount: NoteTechArticle['commentCount']
  labels: NoteTechArticle['labels']
  eyecatch: NoteTechArticle['eyecatch']
  eyecatchWidth: NoteTechArticle['eyecatchWidth']
  eyecatchHeight: NoteTechArticle['eyecatchHeight']
  spEyecatch: NoteTechArticle['spEyecatch']
  userId: NoteUser['id']
  userUrlname: NoteUser['urlname']
  userNickname: NoteUser['nickname']
  userNoteCount: NoteUser['noteCount']
  userFollowingCount: NoteUser['followingCount']
  userFollowerCount: NoteUser['followerCount']
  userUserProfileImagePath: NoteUser['userProfileImagePath']
  userCreatedAt: NoteUser['createdAt']
  userLikeAppealText: NoteUser['likeAppealText']
  userLikeAppealImage: NoteUser['likeAppealImage']
  editableScopes: NoteTechArticle['editableScopes']
}

/** API State */
export interface ApiState {
  /** 記事データにおける View Model */
  articles: NoteArticleViewModel[] | null
}
