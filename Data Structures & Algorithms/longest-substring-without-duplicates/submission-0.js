class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let left=0, freq={},maxlen=0

        for(let right =0; right< s.length; right ++){
            freq[s[right]]=(freq[s[right]] || 0) +1
            while(freq[s[right]] >1){
                freq[s[left]]--
                left++
            }

            maxlen=Math.max(maxlen,right-left+1)
        }
        return maxlen
    }
}
