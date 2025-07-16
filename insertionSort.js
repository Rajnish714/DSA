const arr1=[2,5,8,1,12,42,55,32,7,9]

function insertionSort(arr){
    const length= arr.length;
    console.log(arr.splice(4,1)[0])
//     for(let i=0; i<length;i++){
//         if(arr[i]<arr[0]){
//             arr.unshift(arr.splice(i,1)[0])
//     }else{
//         for(let j=1;j<i;j++){
//             if(arr[i]>arr[j-1] && arr[i]<arr[j]){
//                 arr.splice(j,0,arr.splice(i,1)[0])
//             }
//         }
//     }
// }
}

insertionSort(arr1)
console.log(arr1);