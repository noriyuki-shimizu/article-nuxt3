import { http, HttpResponse } from 'msw'
import type { RequestHandler } from 'msw'
import { emptyData, successData } from './fixture'

/**
 * 関数「handleGetArticles」はQiita APIにGETリクエストを発行して記事を取得します。
 * @returns RequestHandler 関数が返されます。この関数は、「/api/note/articles/tech」に対して GET
 * リクエストを実行し、successData とステータス コード 200 を含む JSON レスポンスを返します。
 */
export const handleGetArticles = (): RequestHandler => {
  return http.get(
    '/api/note/articles/tech',
    async () => {
      return HttpResponse.json(successData, { status: 200 })
    }
  )
}

/**
 * 関数 `handleGetEmptyArticles` は GET リクエストを送信して、テクノロジーに関連する空の記事を取得します。
 * @returns RequestHandler 関数が返されます。この関数は、「/api/note/articles/tech」に対して GET リクエストを作成し、emptyData とステータス
 * コード 200 を含む JSON レスポンスを返します。
 */
export const handleGetEmptyArticles = (): RequestHandler => {
  return http.get(
    '/api/note/articles/tech',
    async () => {
      return HttpResponse.json(emptyData, { status: 200 })
    }
  )
}

export const handlers = [handleGetArticles(), handleGetEmptyArticles()]
