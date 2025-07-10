const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const app = express()
const {DB_HOST, PORT = 5000} = process.env

app.use(express.json())

mongoose.connect(DB_HOST)
.then(() =>{
    app.listen(PORT, ()=>{
        console.log(`Server running on port ${PORT}`)
    })
    console.log('Database connection successful')
})
.catch(error =>{
    console.error('Database connection error', error.message);
    process.exit(1)
});

app.get('/', (req, res)=> {
    res.send('Hello from Backend!')
}) 