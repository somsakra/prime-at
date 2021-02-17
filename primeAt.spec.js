import { primeAt } from './primeAt'

describe('Valid Input', () => {
  test('Integer input = 1 ', () => {
    expect(primeAt(1)).toBe(2)
  })

  test('Integer input = 2 ', () => {
    expect(primeAt(2)).toBe(3)
  })

  test('Integer input = 3 ', () => {
    expect(primeAt(3)).toBe(5)
  })
  test('Integer input = 1000 ', () => {
    expect(primeAt(1000)).toBe(7919)
  })
})

describe('Invalid Input', () => {
  test('Double input ', () => {
    expect(primeAt(2.5)).toBe('invalid input')
  })

  test('Empty input', () => {
    expect(primeAt()).toBe('invalid input')
  })

  test('Input less than 1 ', () => {
    expect(primeAt(-3)).toBe('invalid input')
  })

  test('String Input ', () => {
    expect(primeAt('xxxx')).toBe('invalid input')
  })
})
