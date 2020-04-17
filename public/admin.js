$(function(){
    var socket = io.connect('http://0.0.0.0:80/')

    var panel = $("#panel")
    var feedback = $("#feedback")
    var usernames = $("#usernames")
    var socket_id = $("#socket_id")
    var username = ''
    var socket_id = ''
    //Connect
    socket.on('connect', function(){
        username = "admin"
        socket.emit('NewClient', username)
    })

    //Populating Table
    socket.on('show_table', function(clients){
        var ul = document.getElementById("usernames");
        var ul2 = document.getElementById("socket_id");
        var ul3 = document.getElementById("buttons");

        for (var i = 0; i < clients.length; i++) {
          var username = clients[i].split(" ")[0];

          var listItem = document.createElement("li");
          listItem.textContent = username;

          ul.appendChild(listItem);
        }
        for (var i = 0; i < clients.length; i++) {
          var socket_id = clients[i].split(" ")[1];

          var listItem = document.createElement("li");
          listItem.textContent = socket_id;

          ul2.appendChild(listItem);
        }
    })
});
