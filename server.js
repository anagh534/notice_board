var express=require('express')
var app=express()
var http=require('http').createServer(app)
var io=require('socket.io')(http)

app.get('/',(req,res)=>{
    var path=__dirname;
    res.sendFile(path+"/public/board.html");
})
app.get('/admin',(req,res)=>{
    var path=__dirname;
    res.sendFile(path+"/public/admin.html");
})
io.on("connection",(socket)=>{
    console.log("new connection established");
    socket.on("disconnect",()=>{
        console.log("connection closed");
    })
    socket.on('admin',(txt)=>{
        console.log(txt);
        io.emit('board_content',txt);
    })
})
http.listen(3000,()=>{
    console.log("Server Started");
})