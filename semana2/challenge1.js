function twoSums(numbs, target) {
    let result =[]
    let numIndex = new Map()

    for (let i = 0; i < numbs.length; i++) {
        let num= numbs[i];

        let compliment = target-num
    
        if (numIndex.has(compliment)) {
            result[0]=numIndex.get(compliment)
            result[1]=i
            return result
        }
        numIndex.set(num,i)
    }
    return results
}

module.exports = twoSums;