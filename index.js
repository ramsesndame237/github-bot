const jsonfile =require('jsonfile')
const moment = require('moment')
const generatorRandom = require("./src/utils/generator-random");

const FILE_PATH= './src/data.json'

const DATE = moment().format()
const contentJsonFile = generatorRandom()

console.log(contentJsonFile)
jsonfile.writeFile(FILE_PATH,contentJsonFile)