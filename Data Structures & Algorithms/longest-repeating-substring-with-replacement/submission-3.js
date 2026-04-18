class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let left =0, maxfreq=0,maxlen=0;
        let map={}

        for(let right=0; right<s.length; right++){
            // if(!map[s[right]]){
            //     map[s[right]]=0
            // }
            // map[s[right]]++ 
            map[s[right]]=(map[s[right]] || 0) +1
           maxfreq=Math.max(maxfreq,map[s[right]])

           if(((right-left+1)-maxfreq)>k){
            map[s[left]]--
             left++
           }
        maxlen=Math.max(maxlen,right-left+1)

        }
        return maxlen

    }
}
