/**
 * 関数 `isNull` は値が null かどうかをチェックします。
 * @param {unknown} value - パラメータ「value」のタイプは「unknown」です。つまり、任意のタイプにすることができます。
 * @returns ブール値。渡された値が null の場合は true を返し、それ以外の場合は false を返します。
 */
export const isNull = (value: unknown): value is null => {
  return value === null
}

/**
 * 関数 `isUndefine` は、値が未定義かどうかをチェックします。
 * @param {unknown} value - パラメータ「value」のタイプは「unknown」です。つまり、任意のタイプにすることができます。
 * @returns 入力値が未定義かどうかを示すブール値。
 */
export const isUndefined = (value: unknown): value is undefined => {
  return value === undefined
}

/**
 * 関数 `isNil` は、値が null または未定義かどうかをチェックします。
 * @param {unknown} value - 「value」パラメータのタイプは「unknown」です。つまり、任意のタイプを指定できます。
 * @returns ブール値。
 */
export const isNil = (value: unknown): value is null | undefined => {
  return value === null || value === undefined
}

/**
 * 関数 `isObject` は、値がオブジェクトであるか関数であるかをチェックします。
 * @param {unknown} value - 「value」パラメータのタイプは「unknown」です。つまり、任意のタイプを指定できます。
 * @returns ブール値。
 */
export const isObject = (value: unknown): value is object => {
  const type = typeof value
  return !isNull(value) && (type === 'object' || type === 'function')
}

/**
 * 関数 `isNumber` は、TypeScript の値が数値であるかどうかをチェックします。
 * @param {unknown} value - 「value」パラメータのタイプは「unknown」です。つまり、任意のタイプの値を指定できます。
 * @returns 指定された値が数値であるかどうかを示すブール値。
 */
export const isNumber = (value: unknown): value is number => {
  return typeof value === 'number' || toString.call(value) === '[object Number]'
}

/**
 * 関数 `isString` は値が文字列かどうかをチェックします。
 * @param {unknown} value - 「value」パラメータのタイプは「unknown」です。つまり、任意のタイプを指定できます。
 * @returns 指定された値が文字列であるかどうかを示すブール値。
 */
export const isString = (value: unknown): value is string => {
  return typeof value === 'string' || toString.call(value) === '[object String]'
}

/**
 * 関数 `isBoolean` は、値がブール型かどうかをチェックします。
 * @param {unknown} value - 「value」パラメータのタイプは「unknown」です。つまり、任意のタイプを指定できます。
 * @returns 入力値がブール値であるかどうかを示すブール値。
 */
export const isBoolean = (value: unknown): value is boolean => {
  return typeof value === 'boolean' || toString.call(value) === '[object Boolean]'
}

/**
 * 関数 `isArray` は、値が配列であるかどうかをチェックします。
 * @param {unknown} value - 「value」パラメータのタイプは「unknown」です。つまり、任意のタイプを指定できます。
 * @returns 入力値が配列であるかどうかを示すブール値。
 */
export const isArray = <T>(value: unknown): value is T[] => {
  return Array.isArray(value)
}

/**
 * 関数 `isMap` は、値が `Map` クラスのインスタンスであるかどうかをチェックします。
 * @param {unknown} value - 「value」パラメータのタイプは「unknown」です。つまり、任意のタイプを指定できます。
 * @returns 入力値が Map クラスのインスタンスであるかどうかを示すブール値。
 */
export const isMap = <T>(value: unknown): value is Map<any, T> => {
  return value instanceof Map
}

/**
 * 関数 `isSet` は、値が `Set` 型であるかどうかをチェックします。
 * @param {unknown} value - 「value」パラメータのタイプは「unknown」です。つまり、任意のタイプを指定できます。
 * @returns 入力値が Set クラスのインスタンスであるかどうかを示すブール値。
 */
export const isSet = <T>(value: unknown): value is Set<T> => {
  return value instanceof Set
}

/**
 * `isEmpty` 関数は、文字列、配列、マップ、セット、オブジェクトなどの値が空かどうかをチェックします。
 * @param {unknown} value - `value` パラメータの型は、`string`、`Map<any,
 * any>`、`Set<any>`、`ArrayLike<any>`、`null`、`unknown`、または `object` です。
 * @returns 関数 `isEmpty` はブール値を返します。入力値が空であるとみなされる場合は「true」を返し、そうでない場合は「false」を返します。
 */
export const isEmpty: {
    (value: string): boolean;
    (value: Map<any, any> | Set<any> | ArrayLike<any> | null | undefined): boolean;
    (value: object): boolean;
    (value?: unknown): boolean;
} = (value: unknown): boolean => {
  if (isNil(value)) {
    return true
  }
  if (isNumber(value)) {
    return value === 0
  }
  if (isString(value)) {
    return value === ''
  }
  if (isArray(value)) {
    return value.length === 0
  }
  if (isMap(value) || isSet(value)) {
    return value.size === 0
  }
  if (isObject(value)) {
    return Object.keys(value).length === 0
  }
  return true
}
