/*
你正在爬樓梯。n到達頂峰需要一些步驟。

每次您都可以攀爬1或2踏步。你可以通過多少種不同的方式爬上頂峰？
*/
function climbStairs(n: number): number {
  const cache: number[] = [];
  if (n <= 2) return n;
  if (!cache[n]) {
    cache[n] = climbStairs(n - 1) + climbStairs(n - 2);
  } // 前一天 + 前兩天 等前的樓梯步驟
  return cache[n];
}

function climbStairs2(n: number): number {
  const map = new Map<number, number>();
  for (let i = 1; i <= n; i++) {
    if (i <= 3) {
      map.set(i, i);
    } else {
      map.set(i, map.get(i - 1)! + map.get(i - 2)!);
    }
  }
  return map.get(n)!;
}
