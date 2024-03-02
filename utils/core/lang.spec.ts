import { describe, expect, it, test } from 'vitest'
import {
  isArray,
  isBoolean,
  isEmpty,
  isMap,
  isNil,
  isNull,
  isNumber,
  isObject,
  isSet,
  isString,
  isUndefined
} from './lang'

describe('Lang utility functions', () => {
  test('isNull', () => {
    expect(isNull(null)).toBe(true)
    expect(isNull(undefined)).toBe(false)
    expect(isNull(0)).toBe(false)
    expect(isNull('')).toBe(false)
    expect(isNull([])).toBe(false)
    expect(isNull({})).toBe(false)
    expect(isNull(false)).toBe(false)
  })

  test('isUndefined', () => {
    expect(isUndefined(undefined)).toBe(true)
    expect(isUndefined(null)).toBe(false)
    expect(isUndefined(0)).toBe(false)
    expect(isUndefined('')).toBe(false)
    expect(isUndefined([])).toBe(false)
    expect(isUndefined({})).toBe(false)
    expect(isUndefined(false)).toBe(false)
  })

  test('isNil', () => {
    expect(isNil(null)).toBe(true)
    expect(isNil(undefined)).toBe(true)
    expect(isNil(0)).toBe(false)
    expect(isNil('')).toBe(false)
    expect(isNil([])).toBe(false)
    expect(isNil({})).toBe(false)
    expect(isNil(false)).toBe(false)
  })

  test('isObject', () => {
    expect(isObject({})).toBe(true)
    expect(isObject(() => {})).toBe(true)
    expect(isObject(null)).toBe(false)
    expect(isObject(undefined)).toBe(false)
  })

  test('isNumber', () => {
    expect(isNumber(123)).toBe(true)
    expect(isNumber('123')).toBe(false)
    expect(isNumber(null)).toBe(false)
  })

  test('isString', () => {
    expect(isString('123')).toBe(true)
    expect(isString(123)).toBe(false)
    expect(isString(null)).toBe(false)
  })

  test('isBoolean', () => {
    expect(isBoolean(true)).toBe(true)
    expect(isBoolean(false)).toBe(true)
    expect(isBoolean('true')).toBe(false)
  })

  test('isArray', () => {
    expect(isArray([1, 2, 3])).toBe(true)
    expect(isArray('123')).toBe(false)
    expect(isArray(null)).toBe(false)
  })

  test('isMap', () => {
    expect(isMap(new Map())).toBe(true)
    expect(isMap({})).toBe(false)
    expect(isMap(null)).toBe(false)
  })

  test('isSet', () => {
    expect(isSet(new Set())).toBe(true)
    expect(isSet({})).toBe(false)
    expect(isSet(null)).toBe(false)
  })

  describe('isEmpty', () => {
    it('should return true for null or undefined', () => {
      expect(isEmpty(null)).toBe(true)
      expect(isEmpty(undefined)).toBe(true)
    })

    it('should return true for empty string', () => {
      expect(isEmpty('')).toBe(true)
    })

    it('should return false for non-empty string', () => {
      expect(isEmpty('not empty')).toBe(false)
    })

    it('should return true for empty array', () => {
      expect(isEmpty([])).toBe(true)
    })

    it('should return false for non-empty array', () => {
      expect(isEmpty([1, 2, 3])).toBe(false)
    })

    it('should return true for empty Map', () => {
      expect(isEmpty(new Map())).toBe(true)
    })

    it('should return false for non-empty Map', () => {
      const map = new Map()
      map.set('key', 'value')
      expect(isEmpty(map)).toBe(false)
    })

    it('should return true for empty Set', () => {
      expect(isEmpty(new Set())).toBe(true)
    })

    it('should return false for non-empty Set', () => {
      const set = new Set()
      set.add('value')
      expect(isEmpty(set)).toBe(false)
    })

    it('should return true for empty object', () => {
      expect(isEmpty({})).toBe(true)
    })

    it('should return false for non-empty object', () => {
      expect(isEmpty({ key: 'value' })).toBe(false)
    })

    it('should return true for number 0', () => {
      expect(isEmpty(0)).toBe(true)
    })

    it('should return false for non-zero number', () => {
      expect(isEmpty(1)).toBe(false)
    })
  })
})
