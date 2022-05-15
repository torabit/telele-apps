/**
 * 対象の文字列が指定されたLimitを超えているかどうかを判定する
 * @param value カウントしたい文字列
 * @param maxLimit 文字列の最大値
 * @param minLimit 文字列の最小値
 * @returns 対象の文字列がlimitを超えている場合`true`を返す
 */

export function detectStringCountReachLimit(
  value: string,
  maxLimit: number,
  minLimit: number
): boolean {
  const wordCount = Array.from(value).length;
  let isReachLimit = true;
  if (wordCount <= maxLimit && wordCount >= minLimit) isReachLimit = false;
  return isReachLimit;
}
