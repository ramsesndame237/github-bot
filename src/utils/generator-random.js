
const moment = require('moment')
const axios = require('axios')
const randomValueInArrayString = require("./randomValueInArrayString");

const generatorRandom = () => {
    let citation = null;
    let astuce = null;

    const lang = randomValueInArrayString(['fr', 'en'])

//get online citation

    axios.get(`https://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=${lang}`).then((response) => {
        console.log(response.data)

        citation = response.data.quote
    }).catch((error) => {
        console.error(error)
    })

//get online astuce of the web development

    // axios.get('https://devhints.io/api/random').then((response) => {
    //     astuce = response.data.content;
    // }).catch((error) => {
    //     console.error(error)
    // })

    // save and return the data
    const data = {
        citation: citation,
        date: moment().format('YYYY-MM-DD')
    }
    return data
}
module.exports = generatorRandom