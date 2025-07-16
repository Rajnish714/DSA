let arr1 = [1, 3, 5, 7];
let arr2 = [2, 4, 6,7];
const check={}

function checks(arr1,arr2){
for(let i =0 ;i<arr1.length ;i++){
    if(!check[arr1[i]]){
        check[arr1[i]]=true
    }
}

for(let j =0 ;j<arr1.length;j++){
    if(check[arr2[j]]){
        return true
    }
}
return false
}

console.log(checks(arr1,arr2));