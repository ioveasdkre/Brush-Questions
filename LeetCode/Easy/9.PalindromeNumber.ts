/*
    給定一個整數x，true如果x是回文整數則返回。
    當一個整數向後讀和向前讀一樣時，它就是一個回文數。
    例如，121是回文，而123不是。
 */
function isPalindrome(x: number): boolean {
    if (x < 0) return false;

    const xList: string[] = String(x).split("");
    const yList: string[] = [];

    for (let i = xList.length; i >= 0; i--) {
        yList.push(xList[i]);
    }

    return xList.join("") === yList.join("");
}

function isPalindrome2(x: number): boolean {
    const left: string = x.toString(); // 轉字串
    const right: string = left.split("").reverse().join(""); // 轉 Array, 反轉, 轉串接
    return left === right;
}

console.log(isPalindrome(121));
console.log(isPalindrome(-121));
console.log(isPalindrome(10));
