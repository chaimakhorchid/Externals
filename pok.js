const express = require("express")
const app = express()
const axios = require('axios')

app.get('/pokemon', (req, res) => {
    axios.get('https://pokeapi.co/api/v2/pokemon')
    .then(response => res.json(response.data))
    .catch(error => res.status(error.response.status).send("Not found"))
})

app.get('/pokemon/:offset/:limit', (req, res) => {
    const { offset, limit} = req.params
    
    axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
    .then(response => res.json(response.data))
    .catch(error => res.status(error.response.status).send("Not found"))
})

app.get('.pokemon/:id', (req, res) => {
    const {id} = req.params
    axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then(response => res.json(response.data))
    .catch(error => res.status(error.response.status).send("Not found"))    
})

module.exports = app;
