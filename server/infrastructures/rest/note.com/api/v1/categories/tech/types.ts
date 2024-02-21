export interface NoteTechArticleRequestQuery {
    sort?: 'new'
    page?: number
}

interface NotePicture {
  caption: null,
  url: string,
  key: string
}

interface NoteEmbeddedContent {
  caption: null,
  key: string
}

interface NoteUserShareAppeal {
  text: string,
  image: string
}

interface NoteUserMagazineAddAppeal {
  text: string,
  image: string
}

interface NoteCustomDomain {
  id: number,
  tls: boolean,
  host: string,
  type: string,
  key: string
}

interface NodeUser {
  id: number,
  urlname: string,
  nickname: string,
  noteCount: number,
  followingCount: number,
  followerCount: number,
  userProfileImagePath: string,
  createdAt: string,
  disableSupport: boolean,
  isFollowing: boolean,
  isMe: boolean,
  likeAppealText: string,
  likeAppealImage: string,
  shareAppeal: NoteUserShareAppeal,
  magazineAddAppeal: NoteUserMagazineAddAppeal,
  purchaseAppealTextNote: string,
  purchaseAppealTextMagazine: string,
  purchaseAppealTextSupport: string,
  followAppealText: string,
  followAppealImage: string,
  twitterNickname: string,
  customDomain: NoteCustomDomain
}

export interface NoteTechArticle {
  id: number,
  key: string,
  isTreasuredNote: boolean,
  body: string,
  externalUrl: null,
  separator: null,
  type: string,
  userId: number,
  name: string,
  description: null,
  tweetText: string,
  twitterShareUrl: string,
  facebookShareUrl: string,
  lineShareUrl: string,
  noteUrl: string,
  canMultipleLimitedNote: boolean,
  canSellOnFirstComeNote: boolean,
  pictures: NotePicture[],
  embeddedContents: NoteEmbeddedContent[],
  audio: null,
  status: string,
  publishAt: string,
  price: number,
  createdAt: string,
  updatedAt: string,
  format: string,
  likeCount: number,
  anonymousLikeCount: null,
  imageCount: number,
  commentCount: number,
  isLimited: boolean,
  isTrial: boolean,
  isRefund: boolean,
  isMembershipConnected: boolean,
  hasAvailableCirclePlans: boolean,
  isMyNote: boolean,
  canRead: boolean,
  canVote: boolean,
  canComment: boolean,
  labels: {
    type: string,
    name: string,
    action: string,
    order: number
  }[],
  isLiked: null,
  isPurchased: boolean,
  isMagazinePurchased: boolean,
  isAvailable: boolean,
  eyecatch: string,
  eyecatchWidth: number,
  eyecatchHeight: number,
  spEyecatch: string,
  hasDraft: boolean,
  isDraft: null,
  isPublished: boolean,
  isReserved: boolean,
  reservedPublishAt: null,
  disableComment: boolean,
  likes: [],
  user: NodeUser,
  commentViewable: boolean,
  comments: [],
  hashtagNotes: [],
  hasCoupon: boolean,
  priorSale: null,
  customDomain: NoteCustomDomain,
  editableScopes: string[],
  nonEditableReason: null
}

export interface NoteTechArticleData {
  categoryId: number,
  firstPage: boolean,
  nextPage: number,
  lastPage: boolean,
  notes: NoteTechArticle[]
}

export interface NoteTechArticleResponse {
    data: NoteTechArticleData,
}
