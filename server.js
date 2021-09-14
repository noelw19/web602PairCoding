const express = require('express');
const home = require('./routes.js')

let app = express()

app.use('/home', home)

app.get('/', (req, res) => {res.send('Hello')})

app.listen(4000, () => {
    console.log('running')
})
