// const numbers = 1234248;

// const strg = numbers.toString().split('')

// // console.log(strg);

// let data =[]



// for (let i = strg.length-1; i >= 0; i--) {
//     const element =strg[i]/strg[i-1]
//        data.push(element)
//         console.log(data);
//     if (Number.isInteger(element)) {
//         console.log(data.push(true));
        
//     }else{
        
//         console.log(data.push(false));   
//     } ;

    

    
// }

// function arrayOfMultiples (num, length) {
    
//     let data =[]
//     for (let i = 0; i <= length; i++) {
//         const element =num*[i] ;
//         data.push(element)
//      }   
//       return data;
// }
// function isprime (number){
//     for (let i = 2; i <= Math.sqrt(number); ++i) {
//         if (number % i===0) {
//             return false
//         }
//     }
//     return true
// }

// function countPrimes(number) {
    
//         if(number>=2){
//             let primos= []
//             let esprimo= []
//             for (let i = -1; i <= number; ++i) {
//                 esprimo.push(true)
//             }

//             for (let i = 2; i <= number; ++i) {
//                 if(esprimo[i]){
//                     primos.push(i)
                
//                     for (let j = 1; j *i<=number; ++j) {
//                         esprimo[i*j]= false;
                        
//                     }
//                 }
//             }
//             return primos.length  
        
//         }else{
//             return 0
//         }
// }

// console.log( countPrimes(0));


// function divisibleByLeft(n) {
//     const strg = n.toString().split('')
//     let data=[]

//     for (let i = strg.length-1; i >= 0; i--) {
//         const element =strg[i]/strg[i-1]
    
//         if (Number.isInteger(element)) {
//             data.push(true)
//         }else{
//             data.push(false)
//         } 
//     }
//     return data.reverse()
// }

// console.log(divisibleByLeft(73312));
// function arrayOfMultiples (num, length) {
  
//     let data =[]
//     for (let i = 1; i <= length; i++) {
//         const element =num*[i] ;
//         data.push(element)
//      }   
//       return data;
// }

// console.log(arrayOfMultiples(12,10));
// function landMass() {
//     let mass = (arguments["1"]*100/149000000)
//     let twoDecimals=mass.toFixed(2)
//     return ` {"percent":${twoDecimals}, "message": "${arguments["0"]} representa el ${twoDecimals}% de la masa de la tierra"}`
// }

// console.log(landMass("USA", 9372610));


function isSpecialArray (specialArr) {
    const arrayPar=[]
    const arrayImpar=[]

    for (let i =0; i < specialArr.length; i++) {
        arrayPar.push(specialArr[i]);
        
    }

    return arrayPar;
}


console.log(isSpecialArray([2, 7, 4, 9, 6, 1, 6, 3]));