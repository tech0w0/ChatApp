$(function(){
    var socket = io.connect('http://0.0.0.0:80/')

    var pane = $("#panel")
    var clients = []
    //Connect
    socket.on('connect', function(){
        username = "admin"
        socket.emit('NewClient', username)
    })

    //Adding new user to client list
    socket.on('new_user', function(user){
        //clients.push(data)

         panel.append("<p>User: " + user + "</p>")

    })

    //Populating Table
    socket.on('show_table', function(){
        //for(var key of clients){
           // panel.append("<p>" + key.username + "</p>")
            //panel.append("<p>" + key.socket_id + "</p>")
        //}
    })

});
