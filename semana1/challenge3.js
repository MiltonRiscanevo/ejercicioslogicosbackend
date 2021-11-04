const capitalizeLetters = (str) => {
    //Implementación
    let data = str.split(" ") 
    return data.map(p=>p[0].toUpperCase() + p.slice(1)).join(" ")
}

module.exports = {
    capitalizeLetters
}