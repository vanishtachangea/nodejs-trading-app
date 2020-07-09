const path = require('path');
const express = require('express');
const http=require('http');
const socketio = require('socket.io');

const app= express();//generate a new application
const server = http.createServer(app);
const io = socketio.listen(server);

const port = process.env.PORT || 5000;

const publicDirectoryPath = path.join(__dirname,'../public');//__dirname : current directory
app.use(express.static(publicDirectoryPath));


io.on("connection", (socket) =>{
    console.log('New Web Socket');
    socket.emit('message','welcome');
    socket.on('sellingGold',(selling)=>{
        io.emit('message',selling);
     } );
})

server.listen(port, ()=>{
    console.log(`server is up on port ${port}`);
});//start the server up, the port 