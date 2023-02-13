/*
給定兩個非負整數和 .返回 和 （含）之間的奇數計數。lowhighlowhigh
 */

function countOdds(low: number, high: number): number {
  let j = 0;

  for (let i = low; i <= high; i++) {
    if (i % 2 !== 0) j++;
  }
    return j;
};