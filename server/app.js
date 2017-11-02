const request = require('request')
const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const { selectThree, filterForThree } = require('./utility')

app.use(express.static('./server/public/dist/'))
app.use(bodyParser.json())

const threeArr = selectThree()

app.get('/images', (req, res) => {
  request('https://techi.envivent.com/images.json', (error, response, body) => {
    console.log('error:', error)
    console.log('statusCode:', response && response.statusCode)
    const parsedBody = JSON.parse(body).employees
    res.send(filterForThree(parsedBody, threeArr))
  })
})

app.get('/descriptions', (req, res) => {
  request('https://techi.envivent.com/description.json', (error, response, body) => {
    console.log('error:', error)
    console.log('statusCode:', response && response.statusCode)
    const parsedBody = JSON.parse(body).employees
    res.send(filterForThree(parsedBody, threeArr))
  })
})

app.get('/names', (req, res) => {
  request('https://techi.envivent.com/names.json', (error, response, body) => {
    console.log('error:', error)
    console.log('statusCode:', response && response.statusCode)
    const parsedBody = JSON.parse(body).employees
    res.send(filterForThree(parsedBody, threeArr))
  })
})

app.listen(3043, () => {
  console.log('Listening on port 3043')
})
