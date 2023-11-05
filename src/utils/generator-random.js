
const moment = require('moment')
const axios = require('axios')
const randomValueInArrayString = require("./randomValueInArrayString");

const generatorRandom = async (date) => {
    let citation = null;
    let astuce = null;

    const mode = randomValueInArrayString(['computers', 'communications','business','birthday','experience','god','history','imagination','knowledge','money'])

//get online citation

   await axios.get(`https://api.api-ninjas.com/v1/quotes?category=${mode}`,{
       headers:{
           'X-Api-Key':'WeFXcI10Ispn3ndM6FUrcg==TwDjGHhvRpdwDlmw'
       }
   }).then((response) => {
        console.log(response.data[0].author)

        citation = {
            author:response.data[0].author,
            quote:response.data[0].quote,
            category:response.data[0].category
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