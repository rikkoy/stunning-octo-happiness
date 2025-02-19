import { add, head, repeat, SNSN, tail } from './valiadicTupleTypes'

const t = repeat(['foo', 1])
const main = () => {
  console.log(t) // [ 'foo', 1, 'foo', 1 ]
  console.log(add(1, 2, 3, 4)) // 10
  console.log(tail([1, 'hoge', 2, 'fuga'])) // [ 'hoge', 2, 'fuga' ]
  console.log(head(['hoge', 'fuga'] as const)) // hoge
}
const snsn: SNSN = ['string', 1, 'string', 2]
main()
