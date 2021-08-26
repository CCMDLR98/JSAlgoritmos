/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 const twoSum = function (nums, target) {
    const hash = {};

    for (let param = 0;param<nums.length;param++) {
        const x = nums[param];
        if (hash[target - x] !== undefined) {
            return [hash[target - x], param];
        }
        hash[x]=param;
    }
    return [];
};
twoSum([2, 3, 4, 5], 9);