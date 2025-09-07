const twoSum = function(nums, target) {
    const numMap = new Map(); 

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i]; 
        const complement = target - num; 

        if (numMap.has(complement)) {
            return [numMap.get(complement), i];
        }

        numMap.set(num, i);
    }
};