/**
 * 
 * 給定一個整數數組 nums 和一個整數目標，返回兩個數字的索引，使它們加起來等於目標。
 * 您可能會假設每個輸入都只有一個解決方案，並且您可能不會兩次使用相同的元素。
 * 您可以按任何順序返回答案。
 */
function twoSum(nums: number[], target: number): number[] {
    const numNew: number[] = [];
    for(let i = 0; i < nums.length; i++) {
        for(let j = i + 1; j < nums.length; j++) {
            if(nums[i] + nums[j] === target){
                numNew.push(i, j)
            }
        }

        if(numNew.length)
            break;
    }

    return numNew;
};

console.log(twoSum([2,7,11,15], 9));
console.log(twoSum([3,2,4], 6));
console.log(twoSum([3,3], 6));
console.log(twoSum([2,5,5,11], 10));
console.log(twoSum([1,6142,8192,10239], 18431));