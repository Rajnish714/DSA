let s="pwwkew"

function uniqueSubstring(s){
    let Ss= new Set()
    let mL=0
    let left=0

    for(let right =0; right < s.length;right++){
        while(Ss.has(s[right])){
            Ss.delete(s[left])
            left++
        }
        Ss.add(s[right])
        mL= Math.max(mL , right-left+1)
    }
    return mL
}

console.log(uniqueSubstring(s));