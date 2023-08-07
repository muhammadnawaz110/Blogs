const express = require('express')
const mongoose = require('mongoose')

const app = express()

mongoose.connect('mongodb://127.0.0.1/Blog').then(() =>{
    console.log('connect tp mongoDb')
}).catch(error => {
    console.log(error)
})

app.listen(5000, () => {
    console.log('App is listing at 5000')
})