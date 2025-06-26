/*
  30958 - Pascal's triangle
  -------
  by Aswin S Vijay (@aswinsvijay) #中等 #array #math

  ### 题目

  Given a number N, construct the Pascal's triangle with N rows.
  [Wikipedia](https://en.wikipedia.org/wiki/Pascal%27s_triangle)

  > 在 Github 上查看：https://tsch.js.org/30958/zh-CN
*/

/* _____________ 你的代码 _____________ */

type GetArr<N extends number, A extends any[] = []> = A['length'] extends N ? A : GetArr<N, [...A, any]>

type Sum<A extends number, B extends number> = [...GetArr<A>, ...GetArr<B>]['length'] & number

type GetNextPascal<CP extends number[], NP extends number[] = [], PreNum extends number = 0> = CP extends [infer L extends number, ...infer R extends number[]]
  ? GetNextPascal<R, [...NP, Sum<PreNum, L>], L>
  : [...NP, 1]

type Pascal<
  N extends number,
  CA extends any[] = [],
  PreP extends number[] = [],
  CurP extends number[] = GetNextPascal<PreP>,
  R extends number[][] = [],
> = [...CA, any]['length'] extends N
  ? [...R, CurP]
  : Pascal<N, [...CA, any], CurP, GetNextPascal<CurP>, [...R, CurP]>

/* _____________ 测试用例 _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<
    Equal<
      Pascal<1>,
      [
        [1],
      ]
    >
  >,
  Expect<
    Equal<
      Pascal<3>,
      [
        [1],
        [1, 1],
        [1, 2, 1],
      ]
    >
  >,
  Expect<
    Equal<
      Pascal<5>,
      [
        [1],
        [1, 1],
        [1, 2, 1],
        [1, 3, 3, 1],
        [1, 4, 6, 4, 1],
      ]
    >
  >,
  Expect<
    Equal<
      Pascal<7>,
      [
        [1],
        [1, 1],
        [1, 2, 1],
        [1, 3, 3, 1],
        [1, 4, 6, 4, 1],
        [1, 5, 10, 10, 5, 1],
        [1, 6, 15, 20, 15, 6, 1],
      ]
    >
  >,
]

/* _____________ 下一步 _____________ */
/*
  > 分享你的解答：https://tsch.js.org/30958/answer/zh-CN
  > 查看解答：https://tsch.js.org/30958/solutions
  > 更多题目：https://tsch.js.org/zh-CN
*/
