const arr1=[2,5,8,1,12,42,55,32,7,9]

function selectionSort(arr){
for(let i=0;i<arr.length;i++){
    let min=i;
    let temp=arr[i]
    for(let j = i+1 ;j<arr.length;j++){
        if(arr[j]<arr[min]){
        

            min=j
        }
    }
   arr[i] = arr[min];
    arr[min]= temp
    console.log(arr);
  
}
return arr
}
console.log(selectionSort(arr1));
