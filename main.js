function open_sidebar() {
    document.getElementById("connection").style.display = "block";
    document.getElementById("foreground").className = "enabled";
    var elements = document.getElementsByClassName("sidebar")
    for(var index=0;index < elements.length;index++){
        elements[index].classList.add("enabled");
    }
}
function close_sidebar() {
    document.getElementById("connection").style.display = "block";
    document.getElementById("foreground").className = "";
    var elements = document.getElementsByClassName("sidebar")
    for(var index=0;index < elements.length;index++){
        elements[index].classList.remove("enabled");
     }
}

function connect() {
    document.getElementById("connection").style.display = "none";
}