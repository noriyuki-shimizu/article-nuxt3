// MEMO: consola パッケージは nuxi や @nuxt/kit に依存しているパッケージのため、そのパッケージを import して使用している
import { consola } from 'consola'
import type { ConsolaInstance } from 'consola'

/**
 * オプションのタグを持つ Logger インスタンスを返す
 * @param {string} [tag] -
 * ロギングに使用されるタグを表すオプションの文字列.
 * 指定した場合、Logger はこのタグで構成され、特定のコンポーネントまたはモジュールに関連するログメッセージを簡単に識別できるようになる.
 * @returns Logger インスタンス
 */
export const useLogger = (tag?: string): ConsolaInstance => {
  const config = useRuntimeConfig()
  consola.level = config.public.logLevel
  return LangUtil.isUndefined(tag) || tag.trim() === '' ? consola : consola.withTag(tag)
}
