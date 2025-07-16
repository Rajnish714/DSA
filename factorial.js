// //recursive approach

// function factorialRecursive(num){
//     let answere=1
//     if(num===0||num===1){
//         return answere
//     }

    
//     return num * factorialRecursive(num-1)
// }

// console.log( factorialRecursive(6));


//iterative approach

function factorialIterative(num){
    let answere=1
    for(let i=num;i>1;i--){
      
        answere=answere*i
    }
    return answere
}

console.log(factorialIterative(6))