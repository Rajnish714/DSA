//  var arr1 = [1, 3, 5, 7];
//  var arr2 = [2, 4, 6, 8,9,10,11];
// var merge = [];
// var l = arr1.length;
// var i, j;
// function mergeSortedArray(arr1, arr2) {
//     for (i = 0; i < l; i++) {
//         for (j = 0; j < l; j++) {
//             if (arr1[i] < arr2[j]) {
//                 if (merge.includes(arr1[i]) && merge.length > 0)
//                     continue;
//                 merge.push(arr1[i]);
//             }
//             else {
//                 if (merge.includes(arr2[j]) && merge.length > 0)
//                     continue;
//                 merge.push(arr2[j]);
//             }
//         }
//     }
//     return merge;
// }
// console.log(mergeSortedArray(arr1,arr2))
// var arr1 = [1, 3, 5, 7];
// var arr2 = [2, 4, 6, 8];

// var l = arr1.length 
// var i = 0;
// var j = 0;
// let result=[]
// function mergeSortedArray(arr1, arr2) {
//    // let merge = arr1.concat(arr2); 
   

//     for (i = 0; i < l; i++) {
//         for (j = 0; j < l; j++) {
//             if(arr1[i]<arr2[j]){
//                 console.log(arr2[j],"yi")
//                 result.push(arr2[j])
//             }else{
//             result.push(arr1[i])
//             }
//         }
//     }
//     return result;
// }

//  console.log(mergeSortedArray(arr1,arr2))

// ----------------------------------------------
//  let arr1 = [1, 3, 5, 7];
//  let arr2 = [2, 4, 6, 8,9,10,11];
// function merge(arr1,arr2){
// let i=0,j=0;
// const result=[]
// while(i<arr1.length && j<arr1.length)
// {
//     if(arr1[i]<arr2[j]){
//         result.push(arr1[i++])
     
//     }else{
//     result.push(arr2[j++])
//    }
// }
// while(i<arr1.length){
//     result.push(arr1[i++])
  
// }
// while(j<arr2.length)
// {
// result.push(arr2[j++])
    
// }
// return result}
// console.log(merge(arr1,arr2));
// --------------------------------------------

let arr1=[1,2,3,4,0,0,0],arr2=[2,5,6]



function merge(arr1,arr2){
    let m=arr1.length - arr2.length
    let n= arr2.length
    let i=m-1;
    let j = n-1;
    let k= m+n-1;
    

    while(j>=0){
        if(i>=0 && arr1[i]>arr2[j]){
            arr1[k]=arr1[i]
            i--

        }else{
              arr1[k]=arr2[j]
              j--
        }
        k--
    }
 
}

merge(arr1,arr2)

console.log(arr1);
























// function merge(arr1,arr2){
    
//      let m = arr1.length - arr2.length
//   let n = arr2.length;

//   let i = m - 1;
//   let j = n - 1;
//   let l = m + n - 1;
    
    
//     while(j>=0){
// if(i>=0 && arr1[i]>arr2[j]){
//     arr1[l]=arr1[i]
//     i--
// }else{
//      arr1[l]=arr2[j]
//      j--
// }
// l--
//     }
  
// }

// merge(arr1,arr2)

// console.log(arr1);