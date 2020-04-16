$(function(){
    var socket = io.connect('http://0.0.0.0:80/')

    var pane = $("#panel")

    //Connect
    socket.on('connect', function(){
        username = "admin"
        socket.emit('NewClient', username)
    })

    //Populating Table
    socket.on('show_table', function(clients){
        for(var key of clients){
            panel.append("<p>" + clients[key] + "</p>")
        }

    })
});
