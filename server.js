const express =  require('express')
const app = express()
const mongoose = require('mongoose')
const {PORT, mongoUri} = require('./config')
const cors = require( 'cors')
const morgan = require('morgan')
const bodyParser = require('body-parser')

app.use(cors())
app.use(morgan('tiny'))
app.use(bodyParser.json())

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