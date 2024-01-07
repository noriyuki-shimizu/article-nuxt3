import { createConsola } from 'consola'
import type { ConsolaInstance } from 'consola'

/** Logger instance */
const logger = createConsola({
  level: process.env.NODE_ENV === 'production' ? 3 : 5,
  formatOptions: {
    columns: 80,
    colors: false,
    compact: true,
    date: true
  }
})

/**
 * `useLogger` 関数は、オプションのタグを持つロガー インスタンスを返します。
 * @param {string} [tag] - `tag`
 * パラメータは、ロギングに使用されるタグを表すオプションの文字列です。指定した場合、ロガーは指定されたタグで構成されます。指定されない場合、または空の文字列の場合、ロガーはタグ設定なしでそのまま返されます。
 * @returns `ConsolaInstance` オブジェクト。
 */
export const useLogger = (tag?: string): ConsolaInstance => {
  if (LangUtil.isUndefined(tag) || LangUtil.isEmpty(tag)) {
    return logger
  }
  return logger.withTag(tag)
}
