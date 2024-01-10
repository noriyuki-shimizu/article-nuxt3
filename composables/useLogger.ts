// MEMO: consola パッケージは nuxi や @nuxt/kit に依存しているパッケージのため、そのパッケージを import して使用している
import { createConsola, LogLevels } from 'consola'
import type { ConsolaInstance } from 'consola'

/** Logger */
const logger = createConsola({
  level: process.env.NODE_ENV === 'production' ? LogLevels.info : LogLevels.trace
})

/**
 * オプションのタグを持つ Logger インスタンスを返す
 * @param {string} [tag] -
 * ロギングに使用されるタグを表すオプションの文字列.
 * 指定した場合、Logger はこのタグで構成され、特定のコンポーネントまたはモジュールに関連するログメッセージを簡単に識別できるようになる.
 * @returns Logger インスタンス
 */
export const useLogger = (tag?: string): ConsolaInstance => {
  return LangUtil.isUndefined(tag) || tag.trim() === '' ? logger : logger.withTag(tag)
}
