const path = require('path');
const express = require('express');
const app = express()

app.use(express.static(__dirname))

app.get('/', function (req,res) {
  res.sendFile(path.join(__dirname + '/index.html'))
})

app.listen(666)

console.log('serve MADAF%^&');
