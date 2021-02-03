const cors = require('cors')

const express = require('express')
const app = express()

app.use(cors())

app.get('/', (req, res)=>res.json([{message: 'OK'}]))

app.listen('4567')