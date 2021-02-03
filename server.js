
const cors = require('cors')

const express = require('express')
const app = express()

const axios = require('axios')

app.use(cors())

//front-end
// app.get('/', async (req, res)=>{
//   return res.json(
//     [
//       {name: 'Alexandre'},
//       {name: 'Ariane'},

//    ]
//   )
// })

//back-end
app.get('/', async (req, res)=>{
  const {data} = await axios('https://jsonplaceholder.typicode.com/users') // pegando response.data de dentro da response do axios com desestruturação
  return res.json(data)
})

app.listen('4567')
