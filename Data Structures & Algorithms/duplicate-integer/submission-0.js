class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
              let hashmap = {};

        for (let i of nums) {
            if (hashmap[i]) {
                return true;
            }

            hashmap[i] = true;
        }

        return false;

    }
}
