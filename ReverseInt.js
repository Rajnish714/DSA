//let x=9007199254740991
let x= -123

// ----------reverse by converting to string---------------------
function reverseInt(x){
    let isNegative=x<0
    x=x.toString()
    let i=x.length-1
    let temp=""
    while(i>=0){
        temp += x[i--]
    }
    x=parseInt(temp)
  
if (x < -(2 ** 31) || x > 2 ** 31 - 1) {
    return 0;
}
  if(isNegative){
        return x=-x
    }

    return x
}

console.log(reverseInt(x));

// ---------------------reverse without covert into string------------------