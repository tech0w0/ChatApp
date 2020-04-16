const express = require('express')
const app = express()

app.set('view engine', 'ejs')

app.use(express.static('public'))

var online = 0
var user = []

app.get('/', (req, res) => {
    res.render('index')
})

server = app.listen(80, function(){
    console.log('Listening for connection on port 80...')
})

const io = require("socket.io")(server)

io.on('connection', (socket) => {
    //Adding new clients to list
    socket.on('NewClient', function(username){
        if (username === 'admin') {
            console.log('ADMIN ALERT')
           // socket.emit("show_table")
        }
        else{
            console.log('Client with username: ' + username + ' joined the chat')
            socket.username = username
            online = online + 1
            user.push(username)
            //user.username = username
            //user.socket_id = socket.id
            socket.emit('new_user', username)

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
    socket.on('disconnect', () => {
            console.log('Client with username: ' + socket.username + ' quit the chat')
            online = online - 1
            //for( var i = 0; i < clients.length; i++){ if ( clients[i] === data) { clients.splice(i, 1); }}
            //console.log(clients)

    })
})
