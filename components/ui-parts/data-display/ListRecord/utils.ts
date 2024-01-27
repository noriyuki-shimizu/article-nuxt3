import type { LinkBridge } from './types'

/**
 * レコード全体をリンクで囲う際のリンクデータの初期値を作成
 *
 * @param {LinkBridge} value - レコード全体をリンクで囲う際のリンクデータ
 * @returns {Required<LinkBridge> | null} - レコード全体をリンクで囲う際のリンクデータセット
 */
export const createLinkBridge = (value?: LinkBridge): Required<LinkBridge> | null => {
  if (LangUtil.isUndefined(value)) {
    return null
  }
  return {
    to: value.to,
    target: value.target || '_self',
    ariaLabel: value.ariaLabel || ''
  }
}
