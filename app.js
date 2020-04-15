const express = require('express')
const app = express()

app.set('view engine', 'ejs')

app.use(express.static('public'))

var online = 0
var clients = {}

app.get('/', (req, res) => {
    res.render('index')
})

server = app.listen(3000, function(){
    console.log('Listening for connection on port 3000...')
})

const io = require("socket.io")(server)

io.on('connection', (socket) => {

    console.log('New user connected', socket.id)
    //Adding new clients to list
    socket.on('NewClient', function(username){
        console.log('Client with username: ' + username + ' joined the chat')
        socket.username = username
        online = online + 1
        clients[socket.id] = username

        if (username === 'admin'){
            socket.emit('show_table', clients)
        }
    })
    //Listen on new_message
    socket.on('new_message', (data) =>{
        io.sockets.emit('new_message', {message: data.message, username: socket.username})
    })
    //Typing feature
    socket.on('typing', (data) => {
        socket.broadcast.emit('typing', {username: socket.username})
    })
    //Disconnect
    socket.on('disconnect', (data) => {
        console.log('Client with username: ' + data + ' quit the chat')
        online = online - 1
        for( var i = 0; i < clients.length; i++){ if ( clients[i] === data) { clients.splice(i, 1); }}
        console.log(clients)
    })
})
