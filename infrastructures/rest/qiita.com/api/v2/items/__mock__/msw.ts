import { http, HttpResponse } from 'msw'
import type { RequestHandler } from 'msw'
import { successData, emptyData } from './fixture'

/**
 * 関数「handleGetArticles」は記事を取得するために Qiita API に GET リクエストを発行し、ステータス コード 200 で成功の応答を返します。
 * @returns `handleGetArticles` 関数は RequestHandler を返します。 RequestHandler
 * は、リクエストとレスポンスのオブジェクトを引数として受け取り、リクエストの処理とレスポンスの生成を担当する関数です。この場合、関数は「https://qiita.com/api/v2/items」に対して
 * GET リクエストを作成し、成功ステータス コード 200 の JSON レスポンスを返します。
 */
export const handleGetArticles = (): RequestHandler => {
  return http.get(
    'https://qiita.com/api/v2/items',
    async () => {
      return HttpResponse.json(successData, { status: 200 })
    }
  )
}

/**
 * 関数 `handleGetEmptyArticles` は、指定された API エンドポイントから空の記事を取得する GET リクエストを送信します。
 * @returns RequestHandler 関数が返されます。この関数は「https://qiita.com/api/v2/items」に対して GET リクエストを実行し、emptyData
 * とステータス コード 200 を含む JSON レスポンスを返します。
 */
export const handleGetEmptyArticles = (): RequestHandler => {
  return http.get(
    'https://qiita.com/api/v2/items',
    async () => {
      return HttpResponse.json(emptyData, { status: 200 })
    }
  )
}

export const handlers = [handleGetArticles(), handleGetEmptyArticles()]
