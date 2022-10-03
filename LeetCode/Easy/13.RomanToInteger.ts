function romanToInt(s: string): number {
    const sList = s.split("");
    let result = 0;

    // Object.entries 組成一個新的 Array陣列
    for (var i = 0; i < sList.length; i++) {
        const left: number = roman.get(sList[i])!;
        const right: number = roman.get(sList[i + 1]) ?? 0; // true ?? false

        if (right !== 0) {
            if (left < right) {
                result += right - left;
                i++;
                continue;
            }
            result += left;
            continue;
        }

        result += roman.get(sList[i])!;
    }

    return result;
}

const roman = new Map<string, number>([
    ["I", 1],
    ["V", 5],
    ["X", 10],
    ["L", 50],
    ["C", 100],
    ["D", 500],
    ["M", 1000],
]);

console.log(romanToInt("MCMXCIV"));
