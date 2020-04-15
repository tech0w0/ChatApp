$(function(){
    var socket = io.connect('http://0.0.0.0:80/')

    //Connect
    socket.on('connect', function(){
        username = "admin"
        socket.emit('NewClient', username)
    })

    //Populating Table
    socket.on('show_table', function(clients){

        function generateTableHead(table, data) {
          let thead = table.createTHead();
          let row = thead.insertRow();
          let headers = ["Username", "Socket_ID", "Disconnect"]
           for (var i = 0; i < headers.length; i++) {
            let th = document.createElement("th");
            let text = document.createTextNode(headers[i]);
            th.appendChild(text);
            row.appendChild(th);
          }
        }

        function generateTable(table, data) {
          for (let element of data) {
            let row = table.insertRow();
            for (key in element) {
              let cell = row.insertCell();
              let text = document.createTextNode(element[key]);
              cell.appendChild(text);
            }
          }
        }

        let table = document.querySelector("table");
        let data = Object.keys(mountains[0]);
        generateTableHead(table, data);
        generateTable(table, mountains);
    })
});
