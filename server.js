const express =  require('express')
const app = express()
// const PORT = 3000
const mongoose = require('mongoose')
const {PORT, mongoUri} = require('./config')

mongoose
    .connect(mongoUri, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
        useFindAndModify:false
    })
    .then(() => console.log('MongoDB database Connected ...'))
    .catch((err) => console.log(err))

/**
 * Port Listening
 */
app.listen(PORT, () => console.log(`App listening in ${PORT}`))

app.get('/', (req, res) => res.send('Hello'))