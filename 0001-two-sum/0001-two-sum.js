/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
    var twoSum = function(nums, target) {
    const map = new Map();
    
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        
        // If the complement exists in the map, return its index and the current index
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        
        // Otherwise, save the current number and its index to the map
        map.set(nums[i], i);
    }
    
    return [];
};