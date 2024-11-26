function getTotalFromArray(array){
    let total = 0
    array.forEach((element) => {
        total = total + element
    })
    return total
}

module.exports = getTotalFromArray