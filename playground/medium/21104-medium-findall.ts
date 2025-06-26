/*
  21104 - FindAll
  -------
  by tunamagur0 (@tunamagur0) #中等 #template-literal #string

  ### 题目

  Given a pattern string P and a text string T, implement the type `FindAll<T, P>` that returns an Array that contains all indices (0-indexed) from T where P matches.

  > 在 Github 上查看：https://tsch.js.org/21104/zh-CN
*/

/* _____________ 你的代码 _____________ */

type GetStrLen<S extends string, LA extends any[] = []> = S extends `${any}${infer R}`
  ? GetStrLen<R, [...LA, any]>
  : LA['length']

type FindAll<T extends string, P extends string, Prefix extends string = '', Res extends number[] = []> = P extends ''
  ? []
  : T extends `${Prefix}${infer L}${P}${any}`
    ? P extends `${infer A}${any}`
      ? FindAll<T, P, `${Prefix}${L}${A}`, [...Res, GetStrLen<`${Prefix}${L}`>]>
      : never
    : Res

type a = FindAll<'AAAA', 'AA'>

/* _____________ 测试用例 _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<FindAll<'Collection of TypeScript type challenges', 'Type'>, [14]>>,
  Expect<Equal<FindAll<'Collection of TypeScript type challenges', 'pe'>, [16, 27]>>,
  Expect<Equal<FindAll<'Collection of TypeScript type challenges', ''>, []>>,
  Expect<Equal<FindAll<'', 'Type'>, []>>,
  Expect<Equal<FindAll<'', ''>, []>>,
  Expect<Equal<FindAll<'AAAA', 'A'>, [0, 1, 2, 3]>>,
  Expect<Equal<FindAll<'AAAA', 'AA'>, [0, 1, 2]>>,
]

/* _____________ 下一步 _____________ */
/*
  > 分享你的解答：https://tsch.js.org/21104/answer/zh-CN
  > 查看解答：https://tsch.js.org/21104/solutions
  > 更多题目：https://tsch.js.org/zh-CN
*/
