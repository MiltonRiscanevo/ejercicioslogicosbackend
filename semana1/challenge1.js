const reverseString = (str) => {
        
    if(str.length<=1 || str.length>15){
        throw Error()
    }else if (typeof str === 'string') {
            const arra= str.split('').reverse().join('')
            return arra.toString()    
    }    
    
    
    
}

module.exports = {
    reverseString
}