function landMass() {
    let mass = (arguments["1"]*100/149000000)
    let twoDecimals=mass.toFixed(2)
    return ` {"percent":${typeof parseInt(twoDecimals) }, "message": "${arguments["0"]} representa el ${twoDecimals}% de la masa de la tierra"}`
}

module.exports = landMass;