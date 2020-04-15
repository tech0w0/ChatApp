$(function(){
    var socket = io.connect('http://localhost:3000/')

    var message = $("#message")
    var username = $("#username")
    var send_message = $("#send_message")
    var send_username = $("#send_username")
    var chatroom = $("#chatroom")
    var feedback = $("#feedback")
    var admin_panel = $("#admin_panel")


    //Connect
    socket.on('connect', function(){
        username = prompt("Welcome. Please enter your username")
        socket.emit('NewClient', username)
    })

    //Send message
    send_message.click(function(){
        socket.emit('new_message', {message: message.val()})
    })

    //Listen for message
    socket.on("new_message", (data) => {
        console.log(data)
        chatroom.append("<p class='message'>" + data.username + ": " + data.message + "</p>")
    })
    //Typing feature
    message.bind('keypress', () => {
        socket.emit('typing')
    })
    socket.on('typing', (data) => {
        feedback.html("<p><i>" + data.username + " is typing... " + "</i></p>")
    })
    //Disconnect
    socket.on('disconnect', function(){
        socket.emit('disconnect', username)
    })
});
