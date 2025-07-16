function Anagram(s,t){
    let k=0
   if(t.length!==s.length){
    return false
   }
    
let sC={}
let tC={}

for(i of s ){
    if(!sC[i])
    {
        sC[i]=1
    }
    else{
        sC[i]+=1
    }
}
for(j of t ){
    if(!tC[j])
    {
        tC[j]=1
    }
    else{
        tC[j]+=1
    }
}

for (let key in sC) {
    console.log(sC[key],tC[key]);
    if (sC[key] !== tC[key]) {
        
        return false;

    }
}

return true;



}



const s="bcac"
const t="ccbb"

console.log(Anagram(s,t));