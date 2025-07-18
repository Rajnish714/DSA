const { fchown } = require("fs");
const readline= require("readline")

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});






rl.question("enter your array length:" ,lInput=>{
    length= parseInt(lInput)
    let largeNumber=0
    let arr=[]

    rl.question("enter your array numbers:" ,eInput=>{
          const parts = eInput.trim().split(/\s+/);
    const numbers = parts.map(Number);

    
    const hasInvalid = numbers.some((n) => isNaN(n));
    if (hasInvalid) {
      console.log(" Invalid input. Please enter only numbers.");
      rl.close();
      return;
    }
      
      

      for(let i=0;i<length;i++){
       
        let n = parseInt(numbers[i])
        arr.push(n)
      }
      
        console.log(arr);
     for(i of arr){
     
        if(i>largeNumber){
         
            largeNumber=i
        }
      }
         

    
    console.log(largeNumber);
rl.close()
return 

})

})
