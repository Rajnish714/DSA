const arr=[2,1,4,6,3,4,4,2]
const l=arr.length;

function recurring(arr) {
    for(let i=0;i<l;i++){
        for(let j=0;j<i;j++){
            if(arr[i]===arr[j]){
                return arr[j]
            }
        }
    }
    return undefined
}
console.log(recurring(arr));
function recurring2(arr) {
    const result=[]
for(let n of arr)
{
    
    if(!result.includes(n)){
        result.push(n)
       
    } else {
        return n
    }
}
}
console.log(recurring2(arr))

// const str="aabbcdd"

// function firstUniqueChar(string){

//     const str={}
//     for(let s of string){
//         if(!str[s]){
//             str[s]=1
//         }else{
//             str[s]+=1
//         }
//     }

//     for(let s of string){
       
//         if(str[s]==1){
//             return s
//         }
//     }
//         return null

// }

// console.log(firstUniqueChar(str))