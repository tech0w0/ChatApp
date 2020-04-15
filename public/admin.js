$(function(){
    var socket = io.connect('http://localhost:3000/')

     var back = $("#back")
     var table-clients = $("#table-clients")
     var username = $("#username")
     var socket-id = $("#socket-id")
     var disconnect = $("#disconnect")
    //Connect
    socket.on('connect', function(){
        username = admin
        socket.emit('NewClient', username)
    })

    back.click(function(){
        window.history.back()
    })

    socket.on('show_table', function(clients){
        var t = "";
        var query = test//'<button id="back" class="vertical-align" type="button">Back to Chat</button>'
        for (var key in clients){
              var val = clients[key]
              document.getElementById("username").innerHTML = val;
              document.getElementById("socket-id").innerHTML = key;
              document.getElementById("disconnect").innerHTML = query;
        }

    })

})