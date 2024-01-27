/** レコード全体をリンクで囲う際のリンクデータ */
export type LinkBridge = {
  /** リンク */
  to: string
  /** ターゲット */
  target?: string,
  /** エリアラベル */
  ariaLabel?: string
}

/** Props */
export type Props = {
  /** レコード全体をリンクで囲う際のリンクデータ */
  linkBridge?: LinkBridge
}
