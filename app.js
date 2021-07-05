const express = require('express')
const app = express()
const path = require('path')

app.get('/', (req, res) => {
    res.render(path.join(__dirname, '/views/index.ejs'))
})

app.get('/css', (req, res) => {
    res.sendFile(path.join(__dirname, '/style.css'))
})

app.get('/color', (req, res) => {
    res.sendFile(path.join(__dirname, '/color.js'))
})

app.get('/profile', (req, res) => {
    res.sendFile(path.join(__dirname, '/photo/profilo.jpg'))
})

app.listen(process.env.PORT || 3030, (req, res) => {
    console.log('listen on 3030')
})