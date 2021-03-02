const express =  require('express')
const app = express()
const PORT = 3000

/**
 * Port Listening
 */
app.listen(PORT, () => console.log(`App listening in ${PORT}`))

app.get('/', (req, res) => res.send('Hello'))