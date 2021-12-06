const express = require("express")
const app = express()
const port = 5000

var pokemon = require('./pok');
var got = require('./got')

app.use('/got', got);

app.use('/pok', pokemon);

app.get('*', (req, res) => {
    res.status(404).send("Not found")
  })

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
  })