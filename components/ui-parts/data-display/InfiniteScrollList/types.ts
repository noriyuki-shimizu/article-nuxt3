/** Props */
export interface Props<T> {
  /** リストデータ */
  items: T
  /** リスト表示の高さ */
  height?: string
  /** ローディング時の関数処理 */
  onLoad: (page: number) => boolean | Promise<boolean>
}
