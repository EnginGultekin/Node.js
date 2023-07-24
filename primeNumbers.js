// Finding Prime Numbers Between Two Numbers

// To get the numbers we entered from the keyboard
const arguments = process.argv.slice(2);

function showPrimeNumbers(lowNumber, highNumber){
    for(let i = lowNumber; i <= highNumber; i++){
        let isPrime = true; 
        for(let j = 2; j <= i; j++){
            if(i % j === 0 && j !== i){  // not prime number
                isPrime = false;   
            }
        }
        if(isPrime) console.log(i);
        
    }

}

// To convert String datatype to Number datatype
showPrimeNumbers(arguments[0] * 1, arguments[1]);