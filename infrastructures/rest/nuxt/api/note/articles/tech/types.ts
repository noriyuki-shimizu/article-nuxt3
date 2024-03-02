export interface NoteTechArticleRequestQuery {
  sort?: 'new'
  page?: number
}

interface NotePicture {
  caption: null
  url: string
  key: string
}

interface NoteEmbeddedContent {
  caption: null
  key: string
}

interface NoteUserShareAppeal {
  text: string | null
  image: string | null
}

interface NoteUserMagazineAddAppeal {
  text: string | null
  image: string | null
}

interface NoteCustomDomain {
  id: number
  tls: boolean
  host: string
  type: string
  key: string
}

export interface NoteUser {
  id: number
  urlname: string
  nickname: string
  noteCount: number
  followingCount: number
  followerCount: number
  userProfileImagePath: string
  createdAt: string
  disableSupport: boolean
  isFollowing: boolean
  isMe: boolean
  likeAppealText: string | null
  likeAppealImage: string | null
  shareAppeal: NoteUserShareAppeal
  magazineAddAppeal: NoteUserMagazineAddAppeal
  purchaseAppealTextNote: string | null
  purchaseAppealTextMagazine: string | null
  purchaseAppealTextSupport: string | null
  followAppealText: string | null
  followAppealImage: string | null
  twitterNickname: string | null
  customDomain: NoteCustomDomain | null
}

export interface NoteTechArticle {
  id: number
  key: string
  isTreasuredNote: boolean
  body: string
  externalUrl: null
  separator: null
  type: string
  userId: number
  name: string
  description: null
  tweetText: string
  twitterShareUrl: string
  facebookShareUrl: string
  lineShareUrl: string
  noteUrl: string
  canMultipleLimitedNote: boolean
  canSellOnFirstComeNote: boolean
  pictures: NotePicture[]
  embeddedContents: NoteEmbeddedContent[]
  audio: null
  status: string
  publishAt: string
  price: number
  createdAt: string
  updatedAt: string
  format: string
  likeCount: number
  anonymousLikeCount: null
  imageCount: number
  commentCount: number
  isLimited: boolean
  isTrial: boolean
  isRefund: boolean
  isMembershipConnected: boolean
  hasAvailableCirclePlans: boolean
  isMyNote: boolean
  canRead: boolean
  canVote: boolean
  canComment: boolean
  labels: {
    type: string
    name: string
    action: string
    order: number
  }[]
  isLiked: null
  isPurchased: boolean
  isMagazinePurchased: boolean
  isAvailable: boolean
  eyecatch?: string
  eyecatchWidth?: number
  eyecatchHeight?: number
  spEyecatch: string | null
  hasDraft: boolean
  isDraft: null
  isPublished: boolean
  isReserved: boolean
  reservedPublishAt: null
  disableComment: boolean
  likes: []
  user: NoteUser
  commentViewable: boolean
  comments: []
  hashtagNotes: []
  hasCoupon: boolean
  priorSale: null
  customDomain: NoteCustomDomain | null
  editableScopes: string[]
  nonEditableReason: null
}

export interface NoteTechArticleData {
  categoryId: number
  firstPage: boolean
  nextPage: number
  lastPage: boolean
  notes: NoteTechArticle[]
}

export interface NoteTechArticleResponse {
  data: NoteTechArticleData
}
