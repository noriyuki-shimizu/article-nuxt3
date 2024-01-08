import type { UiState } from './types'

/**
 * 検索キーワードにおける UI Store
 * @returns UI Store
 */
export const useCommonSearchUiStore = () => {
  const _state = useState<UiState>('common-search-ui-store', () => {
    return {
      searchKeyword: null
    }
  })

  const getters = {
    /** 検索キーワード */
    searchKeyword: computed<string | null>(() => {
      return _state.value.searchKeyword
    })
  }

  const actions = {
    /**
     * 状態に検索キーワードを設定します。
     * @param {string | null} keyword - キーワードパラメータは、検索に使用される検索キーワードを表す文字列です。
     */
    setSearchKeyword (keyword: string | null): void {
      _state.value.searchKeyword = keyword
    }
  }

  return {
    ...getters,
    ...actions
  } as const
}
