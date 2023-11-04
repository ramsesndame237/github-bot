const randomValueInArrayString = (arry) =>{
    const randomIndex = Math.floor(Math.random() * arry.length)

    return arry[randomIndex]
}

module.exports = randomValueInArrayString