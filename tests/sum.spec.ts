import { Sum } from '@/sum'

const makeSut = (): Sum => {
  return new Sum()
}

describe('Sum', () => {
  it('sums three numbers together', () => {
    const sut = makeSut()
    const result = sut.execute(1, 2, 3)
    expect(result).toBe(6)
  })

  it('allows negative numbers to be summed together', () => {
    const sut = makeSut()
    const result = sut.execute(-1, -2, 3)
    expect(result).toBe(0)
  })

  it('allows both negative and positive numbers to be added together', () => {
    const sut = makeSut()
    const result = sut.execute(1, 2, 3, -4)
    expect(result).toBe(2)
  })
})
