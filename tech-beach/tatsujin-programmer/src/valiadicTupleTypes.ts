// Valiadic Tuple Types
// ・型変数に対して...を使用できる
// ・extends readonly any[]は、上書き禁止という条件を表す
// ・型変数を型変数のまま使える
// ・タプル型の中で...Tとして扱われている型変数Tが推論の対象になる
// Tとは、任意の型
// プログラミングは、抽象化、汎用化！！
// 型決め打ちの使用は簡単だが、汎用性に欠けるのだ。
// このtypeの規模が大きくなればクラスなのだ。
// 汎用化するとかっこいい。行数が減る。
type Repeat2<T extends readonly any[]> = [...T, ...T]
export type SNSN = Repeat2<[string, number]>
const snsn: SNSN = ['string', 1, 'string', 2]
export type BSNSNB = [boolean, ...SNSN, boolean]
const bsnsnb: BSNSNB = [true, ...snsn, false]

// トリプルドットで何個来ても受け付ける！

export function repeat<T extends readonly any[]>(arr: [...T]): [...T, ...T] {
  return [...arr, ...arr]
}

export const add = (...numbers: number[]) => {
  let calc = 0
  numbers.forEach((num) => (calc += num))

  return calc
}

export function tail<S, T extends readonly any[]>(
  tuple: readonly [S, ...T],
): T {
  const [, ...rest] = tuple // 一個目を外した、残り
  const [, , ...rest2] = tuple // 二個目を外した、残り

  return rest
}

export function head<T extends readonly any[]>(args: readonly [...T]) {
  const result = args[0]
  return result
}
