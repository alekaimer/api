
const express = require('express')
const app = express()

const cors = require('cors')

app.get('/', (req, res)=>res.json([{message: 'OK'}]))
app.listen('4567')

app.use(cors())