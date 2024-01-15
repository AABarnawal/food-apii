const express = require('express')
const app = express();
const food = require('./data.json')

var data = [
    {
        name : 'ankit',
        age :22
    }
]
app.get('/get', (req,resp)=>{
    console.log("server started...")
    resp.send(data);

}).listen(3003);





