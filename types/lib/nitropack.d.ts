import type { $Fetch, NitroFetchRequest } from 'nitropack'

declare module 'nitropack' {
  interface NitroFetchOptions {
    /** 取得データをキャッシュに残すか */
    isCache?: boolean
  }

  /** Fetch raw の引数パラメータ @see $fetch.raw */
  type FetchRawParameters<T = unknown, R extends NitroFetchRequest = NitroFetchRequest> = Parameters<
    $Fetch<T, R>['raw']
  >
}

export {}