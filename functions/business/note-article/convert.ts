import dayjs from 'dayjs'
import { DATE_YYYYMMDD_JP } from '@/constants/business/date/template'
import type { NoteTechArticleResponse } from '@/infrastructures/rest/nuxt/api/note/articles/tech'
import type { NoteArticleViewModel } from '@/store/page/articles/note'

/**
 * 関数 `convertApiResponseToViewModel` は NoteTechArticleResponse オブジェクトを受け取り、関連するデータを抽出して、それを
 * NoteArticleViewModel オブジェクトの配列にマップします。
 * @param {NoteTechArticleResponse | undefined} response - `convertApiResponseToViewModel` 関数は、タイプ
 * `NoteTechArticleResponse` または `unknown` の `response` パラメータを受け取ります。次に、応答データを `NoteArticleViewModel`
 * オブジェクトの配列に変換します。
 * @returns 関数 `convertApiResponseToViewModel` は、`NoteArticleViewModel`
 * オブジェクトの配列を返します。各オブジェクトには、id、key、body、name、noteUrl、status、price、publishAt、createdAt、updatedAt、likeCount、commentCount、labels、eyecatch、eyecatchWidth、eyecatchHeight、spEyecatch、userId、userUrlname、などのプロパティが含まれています。
 */
export const convertApiResponseToViewModel = (
  response: NoteTechArticleResponse | undefined
): NoteArticleViewModel[] | null => {
  if (LangUtil.isUndefined(response)) {
    return null
  }

  return response.data.notes.map<NoteArticleViewModel>((article) => {
    return {
      id: article.id,
      key: article.key,
      body: article.body,
      name: article.name,
      noteUrl: article.noteUrl,
      status: article.status,
      price: article.price,
      publishAt: dayjs(article.publishAt).format(DATE_YYYYMMDD_JP),
      createdAt: dayjs(article.createdAt).format(DATE_YYYYMMDD_JP),
      updatedAt: dayjs(article.updatedAt).format(DATE_YYYYMMDD_JP),
      likeCount: article.likeCount,
      commentCount: article.commentCount,
      labels: article.labels,
      eyecatch: article.eyecatch,
      eyecatchWidth: article.eyecatchWidth,
      eyecatchHeight: article.eyecatchHeight,
      spEyecatch: article.spEyecatch,
      userId: article.user.id,
      userUrlname: article.user.urlname,
      userNickname: article.user.nickname,
      userNoteCount: article.user.noteCount,
      userFollowingCount: article.user.followingCount,
      userFollowerCount: article.user.followerCount,
      userUserProfileImagePath: article.user.userProfileImagePath,
      userCreatedAt: dayjs(article.user.createdAt).format(DATE_YYYYMMDD_JP),
      userLikeAppealText: article.user.likeAppealText,
      userLikeAppealImage: article.user.likeAppealImage,
      editableScopes: article.editableScopes
    }
  })
}
