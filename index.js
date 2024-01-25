require('dotenv').config()
const express = require('express')
const app = express()
const port = 8000
console.log("express, app", app)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/login', (req, res) => {
    res.send('hello lal you are now login in express')
  })

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port, process.env.PORT}`)
})