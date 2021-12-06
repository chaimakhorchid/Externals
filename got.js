const express = require("express")
const app = express()
const axios = require('axios')
const gots = require('./got.json')


app.get('/', (req, res) => {
    res.send('Externals API');
});

app.get('/game-of-thrones/json', (req, res) => {
    res.status(200).json(gots)
})

app.get('/game-of-thrones/url', (req, res) =>{
    axios.get('https://thronesapi.com/api/v2/Characters')
    .then(response => res.json(response.data))
    .catch(error => res.status(error.response.status).send("Not found"))
})

module.exports = app