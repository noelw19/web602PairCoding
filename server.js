const express = require('express');
const home = require('./routes.js')
const user = require('./user.js');

let app = express()

app.use('/home', home)
app.use('/user', user)

app.get('/', (req, res) => {res.send('Hello')})

app.listen(4000, () => {
    console.log('running')
})
