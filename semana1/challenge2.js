const reverseInt = (number) => {

    if (parseInt(Number(number))===number) {
        if(number <=0){
            const data =number.toString().split("").slice(1).reverse().join("")
            return (data*-1)
        }else if(number>=0){
            const data =number.toString().split("").reverse().join("")
            return (parseInt(data))
        }  
    }else{
        throw Error()
    } 
}

module.exports = {
    reverseInt
}