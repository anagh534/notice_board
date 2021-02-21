var express=require('express')
var app=express()
var http=require('http').createServer(app)
var io=require('socket.io')(http)

app.get('/',(req,res)=>{
    var path=__dirname;
    res.sendFile(path+"/public/board.html")
})
app.get('/admin',(req,res)=>{
    var path=__dirname;
    res.sendFile(path+"/public/admin.html")
})