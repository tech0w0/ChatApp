$(function(){
    var socket = io.connect('http://0.0.0.0:80/')

    var panel = $("#panel")
    var feedback = $("#feedback")
    var username = ''
    var socket_id = ''
    //Connect
    socket.on('connect', function(){
        username = "admin"
        socket.emit('NewClient', username)
    })

    //Populating Table
    socket.on('show_table', function(clients){
        for( var i = 0; i < clients.length; i++){
            var tmp = clients[i].split(" ")
            socket_id = tmp[1]
            username = tmp[0]
            panel.append("<p>" + username + ' ' + socket_id + "</p>")
            feedback.html('')
        }
       // socket.emit('disconnect_client')
    })


});
