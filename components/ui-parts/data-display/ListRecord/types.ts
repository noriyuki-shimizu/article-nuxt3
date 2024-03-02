/** レコード全体をリンクで囲う際のリンクデータ */
export interface LinkBridge {
  /** リンク */
  to: string
  /** ターゲット */
  target?: string
  /** エリアラベル */
  ariaLabel?: string
}

/** Props */
export interface Props {
  /** レコード全体をリンクで囲う際のリンクデータ */
  linkBridge?: LinkBridge
}
