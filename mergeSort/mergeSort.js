//  const arr=[2,5,1,31,45,23,7,8]
// function mergeSort(arr){
//     if(arr.length<=1){
//         return arr
//     }
//     let middle= Math.floor(arr.length / 2)
//     let left=mergeSort( arr.slice(0,middle))
//     let right=mergeSort( arr.slice(middle, arr.length))
  
//  return merge(left,right)

// }

// function merge(left,right){
//     const result=[]
//     let i=0;
//     let j=0;

//     while(i<left.length && j<right.length){
//         if(left[i]<right[j]){
//             result.push(left[i++]);
           
//         }else{
//             result.push(right[j++]);
        
//         }
//     }
//   while (i < left.length) {
//     result.push(left[i++]);
    
//   }

//   while (j < right.length) {
//     result.push(right[j++]);
 
//   }

//   return result;
// }

// console.log(mergeSort(arr))

// const arr=[2,5,1,31,45,23,7,8]
// function mergeSort(array){
//     if(array.length===1){
//         return array
//     }

//     let mid= Math.floor(array.length/2)
//     let left= array.slice(0,mid)
//     let right= array.slice(mid)
//     console.log(left,"left");
//     console.log(right,"right");
// return merge(
//      mergeSort(left),
//     mergeSort(right))
// }

// function merge(left,right){
//     const result=[]
//     let rightIndex=0
//     let leftIndex=0
//     while( leftIndex<left.length && rightIndex<right.length ){
//         if(left[leftIndex]<right[rightIndex]){
//             result.push(left[leftIndex])
//             leftIndex++
//         }else{
//         result.push(right[rightIndex])
//         rightIndex++}
//     }
    
// return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex))
// }

// console.log(mergeSort(arr));

const arr=[2,5,1,31,45,23,7,8,9]

 function mergeSort(arr){
  if(arr.length==1){
    return arr
  }
  let mid= Math.floor(arr.length / 2)
let left=mergeSort(arr.slice(0,mid))
let rigth=mergeSort(arr.slice(mid,arr.length))
return merge(left,rigth)

 }

 function merge(left,right){
  let i=0,j=0;
  const result=[]
while(i<left.length && j<right.length){
  if(left[i]<right[j]){
    result.push(left[i++])
  }else{
    result.push(right[j++])
  }
}
while(i<left.length ){
 
    result.push(left[i++])

}

while(j<right.length){

    result.push(right[j++])

}
return result
 }
console.log(mergeSort(arr));