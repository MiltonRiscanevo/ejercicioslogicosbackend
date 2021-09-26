function keysAndValues(objInput) {
    const order = {}
    Object.keys(objInput).sort().forEach((key)=>{
        order[key]= objInput[key]
    })
    const arra1 = Object.keys(order)
    const descr= Object.values(order)
    const arraConcat=[[...arra1],[...descr]]
    return arraConcat
}

module.exports = keysAndValues;