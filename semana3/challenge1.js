function isprime (number){
    for (let i = 2; i <= Math.sqrt(number); ++i) {
        if (number % i===0) {
            return false
        }
    }
    return true
}

function countPrimes(number) {
    
        if(number>=2){
            let primos= []
            let esprimo= []
            for (let i = -1; i <= number; ++i) {
                esprimo.push(true)
            }

            for (let i = 2; i <= number; ++i) {
                if(esprimo[i]){
                    primos.push(i)
                
                    for (let j = 1; j *i<=number; ++j) {
                        esprimo[i*j]= false;
                        
                    }
                }
            }
            return primos.length  
        
        }else{
            0
        }
}

module.exports = countPrimes;