class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        let need={}

        for(let ch of t){
            need[ch]=(need[ch] || 0)+1
        }
        let window={},have=0,left=0,res=[-1,-1],maxlen=Infinity
        let needcount=Object.keys(need).length

        for(let right =0; right<s.length;right++){
            let char=s[right]
            window[char]=(window[char] || 0)+1

            if(window[char] && need[char] === window[char]){
                have++
            }

            while(have === needcount){
                if(right-left+1 <maxlen){
               maxlen=right-left+1
                res=[left,right]
                }

                window[s[left]] --

                if(need[s[left]] && window[s[left]] <need[s[left]] ){
                    have--
                }
                left++
            }
        }

        return maxlen === Infinity ?  "" : s.slice(res[0],res[1]+1)

    }
}
