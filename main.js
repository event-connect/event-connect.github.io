function open_sidebar() {
    document.getElementById("mon-profil").style.display = "block";
    document.getElementById("foreground").className = "enabled";
    var elements = document.getElementsByClassName("sidebar")
    for(var index=0;index < elements.length;index++){
        elements[index].classList.add("enabled");
    }
}
function close_sidebar() {
    document.getElementById("mon-profil").style.display = "block";
    document.getElementById("foreground").className = "";
    var elements = document.getElementsByClassName("sidebar")
    for(var index=0;index < elements.length;index++){
        elements[index].classList.remove("enabled");
     }
}

function connect() {
    document.getElementById("mon-profil").style.display = "none";
}


function collapse(event) {
    var el = event.target;
    console.log('oui')
    el.classList.toggle("active");
    var content = el.nextElementSibling;
    if (content.style.maxHeight){
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
      } 
}
