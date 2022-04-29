const express = require('express')
const compression = require('compression')
const app = express()

//一定要把这一行代码，写到静态资源托管之前
app.use(compression())
app.use(express.static('./dist'))

app.listen(8338, () => {
    console.log('server runinng http://127.0.0.1:8338')
})