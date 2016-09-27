var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send('<h1>Hello World</h1>')
})
app.get('/aaa', function (req, res) {
  console.log('hello aaa')
})
app.listen(3000,function(){
	console.log('running on port 3000...please visit localhost:3000')
})
