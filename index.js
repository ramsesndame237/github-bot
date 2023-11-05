const jsonfile = require('jsonfile')
const moment = require('moment')
const simpleGit = require('simple-git')



const generatorRandom = require("./src/utils/generator-random");

const FILE_PATH = './src/data.json'


const makeCommit = (n) => {
    console.log({n})
    if (n === 0) return simpleGit().push();
    const x = Math.floor(Math.random() * 54)
    const y = Math.floor(Math.random() *6)
    const DATE = moment().subtract(1, 'y').add(1, 'd').add(x, 'w').add(y, 'd').format('YYYY-MM-DD')
    const contentJsonFile = generatorRandom(DATE).then((response) => {
        const responseData = response
        console.log({DATE})
        jsonfile.writeFile(FILE_PATH, response, () => {
            simpleGit().add([FILE_PATH]).commit(`Feat:My citation inspiration ${DATE}`,[FILE_PATH], {'--date': DATE}, makeCommit.bind(this, --n))
        })
    }).catch((error) => {
        console.error(error)
    })

}

makeCommit(800)

