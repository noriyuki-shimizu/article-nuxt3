import { http, HttpResponse } from 'msw'
import type { RequestHandler } from 'msw'
import { successData } from './fixture'

export const handleGetArticles = (): RequestHandler => {
  return http.get(
    'https://qiita.com/api/v2/items',
    async () => {
      return HttpResponse.json(successData, { status: 200 })
    }
  )
}

export const handlers = [handleGetArticles()]
