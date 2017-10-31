const request = require('request')
const bodyParser = require('body-parser')
const express = require('express')
const app = express()

app.use(express.static('./server/public/dist/'))
app.use(bodyParser.json())

app.listen(3043, () => {
  console.log('Listening on port 3043')
})
