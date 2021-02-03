const express = require('express')
const app = express()

app.get('/', (req, res)=>res.json([{message: 'OK'}]))

app.listen('4567')