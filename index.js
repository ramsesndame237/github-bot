const jsonfile = require('jsonfile')
const moment = require('moment')
const simpleGit = require('simple-git')
const random = require('random')


const generatorRandom = require("./src/utils/generator-random");

const FILE_PATH = './src/data.json'


const makeCommit = (n) => {
    if (n === 0) return simpleGit().push();
    const x = random.int(0, 54)
    const y = random.int(0, 6)
    const DATE = moment().subtract(1, 'y').add(1, 'd').add(x, 'w').add(y, 'd').format('YYYY-MM-DD')
    const contentJsonFile = generatorRandom(DATE).then((response) => {
        const responseData = response
        console.log({DATE})
        jsonfile.writeFile(FILE_PATH, response, () => {
            simpleGit().add([FILE_PATH]).commit(`My citation inspiration ${DATE}`, {'--date': DATE}, makeCommit(this, --n))
        })
    }).catch((error) => {
        console.error(error)
    })

}

makeCommit(1500)

