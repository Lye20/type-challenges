/*
  35252 - IsAlphabet
  -------
  by Kanon (@ysknsid25) #中等

  ### 题目

  Determine if the given letter is an alphabet.

  > 在 Github 上查看：https://tsch.js.org/35252/zh-CN
*/

/* _____________ 你的代码 _____________ */

type IsAlphabet<S extends string> = Uppercase<S> extends Lowercase<S> ? false : true

/* _____________ 测试用例 _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<IsAlphabet<'A'>, true>>,
  Expect<Equal<IsAlphabet<'z'>, true>>,
  Expect<Equal<IsAlphabet<'9'>, false>>,
  Expect<Equal<IsAlphabet<'!'>, false>>,
  Expect<Equal<IsAlphabet<'😂'>, false>>,
  Expect<Equal<IsAlphabet<''>, false>>,
]

/* _____________ 下一步 _____________ */
/*
  > 分享你的解答：https://tsch.js.org/35252/answer/zh-CN
  > 查看解答：https://tsch.js.org/35252/solutions
  > 更多题目：https://tsch.js.org/zh-CN
*/
