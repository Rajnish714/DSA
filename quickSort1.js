const arr =[5,2,1,76,34,25,99,23]

function quickSort(arr){
if(arr.length<2){
    return arr
}
let pivot= arr[arr.length-1]
let left=[]
let right=[]

for(let i=0; i<arr.length-1;i++){
    if(arr[i]<pivot){
        left.push(arr[i])
    }
    else{right.push(arr[i])}
}

return [...quickSort(left),pivot,...quickSort(right)]

}


console.log(quickSort(arr))