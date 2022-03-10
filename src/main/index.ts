import './config/module-alias'
import { Sum } from '@/sum'

const sum = new Sum()
const input = [1, 2, 3, 4, 5, 6, -11]

const result = sum.execute(...input)
console.log(result)
