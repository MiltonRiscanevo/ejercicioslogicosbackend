function minMax(aNumbs) {
    let minNumber =Math.min.apply(null,aNumbs)
    let maxNumber =Math.max.apply(null,aNumbs)

    return {min:minNumber, max:maxNumber}
}

module.exports = minMax;