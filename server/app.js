const request = require('request')
const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const filterForThree = require('./utility')

app.use(express.static('./server/public/dist/'))
app.use(bodyParser.json())

app.get('/images', (req, res) => {
  request('https://techi.envivent.com/images.json', (error, response, body) => {
    console.log('error:', error)
    console.log('statusCode:', response && response.statusCode)
    res.send(filterForThree(JSON.parse(body).employees))
  })
})

app.get('/descriptions', (req, res) => {
  request('https://techi.envivent.com/description.json', (error, response, body) => {
    console.log('error:', error)
    console.log('statusCode:', response && response.statusCode)
    res.send(filterForThree(JSON.parse(body).employees))
  })
})

app.get('/names', (req, res) => {
  request('https://techi.envivent.com/names.json', (error, response, body) => {
    console.log('error:', error)
    console.log('statusCode:', response && response.statusCode)
    res.send(filterForThree(JSON.parse(body).employees))
  })
})

app.listen(3043, () => {
  console.log('Listening on port 3043')
})
