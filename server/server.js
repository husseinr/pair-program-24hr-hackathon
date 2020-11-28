const express = require('express')
const app = express()
const port = process.env.PORT || process.argv[2] || 8081

const questions = require ('./data.json')

app.get('/', (_req, res) => {
    res.send('Success yes!')
  })

app.get('/questions', (_req, res) => {
    res.json(questions.sort(()=>0.25-Math.random()).slice(0,10))
  })


app.listen(port, () => console.log(`Listening on ${port}`))