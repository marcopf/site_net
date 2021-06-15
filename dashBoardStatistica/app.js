const express = require('express')
const app = express()
const path = require('path')

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.render(path.join(__dirname, '/views/dashboard.ejs'))
})

app.get('/javascript', (req, res) => {
    res.sendFile(path.join(__dirname, '/sidebar-menu.js'))
})

app.get('/popolazionePerComune', (req, res) => {
    res.sendFile(path.join(__dirname, '/charts/chartLazioComune.js'))
})

app.get('/popolazionePerProvincia', (req, res) => {
    res.sendFile(path.join(__dirname, '/charts/chartLazioProvincia.js'))
})

app.get('/sistemaSolare', (req, res) => {
    res.sendFile(path.join(__dirname, '/charts/graphSistemaSolare.js'))
})

app.get('/covidPerRegione', (req, res) => {
    res.sendFile(path.join(__dirname, '/charts/doughnutCovidPerRegione.js'))
})

app.get('/covidPerComune', (req, res) => {
    res.sendFile(path.join(__dirname, '/charts/doughnutCovidPerComune.js'))
})

app.get('/btc', (req, res) => {
    res.sendFile(path.join(__dirname, '/charts/lineBtcPrice.js'))
})

app.get('/css', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/sidebar-menu.css'))
})

app.get('/script', (req, res) => {
    res.sendFile(path.join(__dirname, '/charts/xmlLabel.js'))
})

app.get('/:id', (req, res) => {
    const text = req.params
    res.render('secview.ejs', { text })

})

app.listen(3000, (req, res) => {
    console.log('listen on 3000')
})