const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const dotenv = require('dotenv')
const app = express()
const lanRoutes = require('./routes/lan.route')

require('../server/db/database')

app.use(cors())
app.use(express.json())

const PORT = process.env.PORT || 3000;

app.use('/api', lanRoutes)

app.listen(PORT, ()=>{
    console.log('Server is running in the PORT:',PORT)
})