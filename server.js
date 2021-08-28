const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Request-Width, Content-Type, Accept");

    res.json([
        { name: 'Lavar a louça', pending: false },
        { name: 'Arrumar quintal', pending: true }
    ])

})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})