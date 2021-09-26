function divisibleByLeft(n) {
    const strg = n.toString().split('')
    let data=[]

    for (let i = strg.length-1; i >= 0; i--) {
        const element =strg[i]/strg[i-1]
    
        if (Number.isInteger(element)) {
            data.push(true)
        }else{
            data.push(false)
        } 
    }
    return data.reverse()
}
module.exports = divisibleByLeft;