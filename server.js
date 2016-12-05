const express = require('express')
const http = require('http')

const app = express()

app.get('/', (req, res) => {
    
    res.end('Hello World')
})

http.createServer(app).listen(8080, () => {
    console.log('http server started at port 8080')
})

// app.listen(8080)