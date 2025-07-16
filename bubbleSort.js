const arr1=[2,5,8,1,12,42,55,32,7]

function buuble(arr){
    for(let i=0;i<arr.length;i++)
        for(let j=i+1;j<arr.length;j++){
            if(arr[i]>arr[j]){
                const temp= arr[i]
                arr[i]=arr[j]
                arr[j]=temp
            }
    }
    return arr


}
console.log(buuble(arr1));
