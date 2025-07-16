const arr = [4,1,46,24,13,10]
console.log(arr.sort((a,b)=>a-b));


// function mergeSortedArray(arr){
//    if(arr.length <=1){
//       return arr
//    }
//    let middle = Math.floor( arr.length / 2)

// let left = mergeSortedArray(arr.slice(0,middle))
// let right = mergeSortedArray(arr.slice(middle,arr.length))
// return merge(left,right)
// }

// function merge(left,right){
//    let result=[]
//    let i=0,j=0
//    while(i<left.length && j<right.length){
//       if(left[i]<right[j]){
//          result.push(left[i++])
//       }else{
//       result.push(right[j++])}
//    }

//      while(i<left.length ){
     
//          result.push(left[i++])
  
    
//    }
//      while( j<right.length){
   
//       result.push(right[j++])
//    }

//    return result
// }

// console.log(mergeSortedArray(arr));


// const arr = [-10, -3, 1, 4, 8, 15, 20, 25];

// const target = 45;
// let i=0,j=0;
// const result=[]
// function sumcheck(arr,target){
  
//        for (i ; i < arr.length-1; i++) { 
//         for ( j = i + 1; j < arr.length; j++)  
//      {
//         if(arr[i] + arr[j]===target){
//            result.push([i,j])
                   
//         }
        
//      }}
//      if(result.length===0)
//      return false
//    else  return result
     
// }
// console.log(sumcheck(arr,target));

// const arr = [-10, -3, 1, 4, 8, 15, 20, 25];
// const target = 12;

// function sumcheck(arr, target) {
//     const result = [];
//     for (let i = 0; i < arr.length - 1; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[i] + arr[j] === target) {
//                 result.push([i, j]); // Store indices as a pair
//             }
//         }
//     }
//     return result;
// }

// console.log(sumcheck(arr, target));


