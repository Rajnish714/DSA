function FibonacciRecursive(n){

if(n<2){
    return n
}



 return FibonacciRecursive(n-1)+FibonacciRecursive(n-2)

    
}
//console.log(FibonacciRecursive(8));

function Fibonacci(n){

    let next =0
    let curr=1
    const arr=[0,1]

    for(i=2;i<=n;i++){
        const temp=curr+next
        arr.push(temp)
        next=curr
        curr=temp
    }
    return arr
        
    }

    //    console.log(Fibonacci(8));
    

