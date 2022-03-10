import { Sum } from '../src/sum'

const makeSut = (): Sum => {
  return new Sum()
}

describe('Sum', () => {
  it('sums three numbers together', () => {
    const sut = makeSut()
    const result = sut.execute(1, 2, 3)
    expect(result).toBe(6)
  })
})