/*
    羅馬數字由七個不同的符號表示 ：I、V、X、L、C和。DM
    例如， 2寫成II 羅馬數字，只是兩個加在一起。12寫成 XII, 就是X + II. 數27寫為XXVII，即XX + V + II。

    羅馬數字通常從左到右從大到小寫。但是，四的數字不是IIII。相反，數字四寫為IV。因為一個在五個之前，所以我們減去它得到四個。同樣的原理也適用於數字九，寫成IX。有六個使用減法的實例：

    I可以放在V(5) 和X(10) 之前，組成 4 和 9。 
    X可以放在L(50) 和C(100) 之前，組成 40 和 90。 
    C可以放在D(500) 和M(1000) 之前，組成 400 和 900。
    給定一個羅馬數字，將其轉換為整數。
*/
function romanToInt(s: string): number {
    const sList: string[] = s.split("");
    let result: number = 0;

    // Object.entries 組成一個新的 Array陣列
    for (var i = 0; i < sList.length; i++) {
        const left = roman.get(sList[i]) ?? 0;
        const right = roman.get(sList[i + 1]) ?? 0; // true ?? false

        left < right ? (result -= left) : (result += left);
    }

    return result;
}

const roman: Map<string, number> = new Map<string, number>([
    ["I", 1],
    ["V", 5],
    ["X", 10],
    ["L", 50],
    ["C", 100],
    ["D", 500],
    ["M", 1000],
]);

console.log(romanToInt("III"));
console.log(romanToInt("LVIII"));
console.log(romanToInt("MCMXCIV"));
