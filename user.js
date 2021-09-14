const express = require('express')
const sql = require('mssql')

const router = express.Router()

const sqlConfig = {
    user: 'Bob',
    password: 'everything',
    database: '',
    server: 'localhost'
}
let val = 'nah'


router.get('/', async (req, res) => {
        try {
    await sql.connect(sqlConfig)
    const res = await sql.query(`CREATE DATABASE testDb`)
    console.log('success please success')
    val = 'yeah'
        }
        
        catch(err) {throw err}
    
    
    res.send(val)
} )

module.exports = router