import type { $Fetch, NitroFetchRequest } from 'nitropack'

/** Fetch raw の引数パラメータ @see $fetch.raw */
export type FetchRawParameters<T = unknown, R extends NitroFetchRequest = NitroFetchRequest> = Parameters<
  $Fetch<T, R>['raw']
>
