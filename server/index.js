const express = require('express')
const mongoose = require('mongoose')
const app = express()
const templateRouter = require('./routes/template')
const api = require('./middleware/api')
const bodyParser = require('body-parser')

mongoose.connect('mongodb://127.0.0.1:27017/template', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.use(api)
app.use(bodyParser.json())
app.use('/xhr/v1', templateRouter)

app.use('/', (req, res, next) => {
    res.send('hello express1')
})

app.listen(8088, () => {
    console.log('at 8088')
})