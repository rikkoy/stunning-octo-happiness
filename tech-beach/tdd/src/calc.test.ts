import { Calc } from './calc'

describe('', () => {
  test('both zero', () => {
    const target = new Calc()
    expect(target.add(0, 0)).toBe(0)
  })

  test('first zero', () => {
    const target = new Calc()
    expect(target.add(0, 3)).toBe(3)
  })

  test('second zero', () => {
    const target = new Calc()
    expect(target.add(4, 0)).toBe(4)
  })

  test('both not zero', () => {
    const target = new Calc()
    expect(target.add(2, 3)).toBe(5)
  })
})
