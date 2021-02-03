
const cors = require('cors')

const express = require('express')
const app = express()

app.use(cors())

app.get('/', (req, res)=>res.json(
  [
    {name: 'Alexandre'},
    {name: 'Ariane'},
  ]
))
app.listen('4567')
