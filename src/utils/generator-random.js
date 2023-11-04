
const moment = require('moment')
const axios = require('axios')
const randomValueInArrayString = require("./randomValueInArrayString");

const generatorRandom = async (date) => {
    let citation = null;
    let astuce = null;

    const mode = randomValueInArrayString(['today', 'random'])

//get online citation

   await axios.post(`https://zenquotes.io/api/${mode}&lang=fr`).then((response) => {
        console.log(response.data[0].h)

        citation = {
            author:response.data[0].a,
            quote:response.data[0].q,
            htmlQuote:response.data[0].h
        }
        // save and return the data

    }).catch((error) => {
        console.error(error)
    })

    return {
        citation: citation,
        date:date ?? moment().format('YYYY-MM-DD')
    }
}
module.exports = generatorRandom