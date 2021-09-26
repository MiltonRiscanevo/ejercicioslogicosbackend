function isEqual(objInput1, objInput2) {
    
    // return Object.keys(objInput1).every(p => {
    //     objInput2.hasOwnProperty(p) || objInput1[p]===objInput2[p]} )
    // return Object.is(objInput1,objInput2)
    
    if(Object.is(objInput1,objInput2) || Object.keys(objInput1).every(p => {
        objInput2.hasOwnProperty(p) || objInput1[p]===objInput2[p]} )){
            return true
    }else{
        return false
    }
}

module.exports = isEqual;