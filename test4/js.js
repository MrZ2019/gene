
/*
 10.Dec

 file:  client for android app - socket
 */
ANT._active();

var statusNode;

$(function() {

    statusNode = $("#status-window");

    client["code-in"].addEventListener("keyup", function() {

        var result = http("/gear/api/android/socket/socket.php", {
            code: this.value,
            mode: "write"
        })

        statusNode.html(result);
    })
});