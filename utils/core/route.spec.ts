import { convertLocationQuery } from './route'

describe('Route utility functions', () => {
  describe('convertLocationQuery function', () => {
    it('should convert object keys to snake_case', () => {
      const input = {
        testKey: 'testValue',
        anotherKey: 'anotherValue'
      }
      const expected = {
        test_key: 'testValue',
        another_key: 'anotherValue'
      }
      const result = convertLocationQuery(input)
      expect(result).toEqual(expected)
    })

    it('should only convert keys specified in enableQueryKey', () => {
      const input = {
        testKey: 'testValue',
        anotherKey: 'anotherValue'
      }
      const enableQueryKey = ['testKey']
      const expected = {
        test_key: 'testValue'
      }
      const result = convertLocationQuery(input, enableQueryKey)
      expect(result).toEqual(expected)
    })
  })
})
