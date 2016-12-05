const express = require('express')
const http = require('http')
const path = require('path')

const app = express()

app.get('/:time', (req, res) => {

    let date = new Date()
    const time = req.params.time
    const months = ['January','February','March','Apriel','May','June','July','August','September','October','November','December']
    
    //test timestring for spaces and not dight characters
    if(!/(\D)|(\s)/.test(time)) 
        date = new Date(Date.parse(time)) //parse unix time
    else    
        date = new Date(time)   // parse date string
    
    const unix = date.valueOf()
    // if unix is Nul natural date string should be null 
    const natural = (unix) ? months[date.getMonth()] + ' ' + date.getDate() + ', ' + date.getFullYear() : null

    const out = JSON.stringify({unix: unix, natural: natural})   
    res.end(out)
})

app.use(express.static(path.join( __dirname , 'public')))

http.createServer(app).listen(8080, () => {
    console.log('http server started at port 8080')
})
