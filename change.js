var eLocation = "exhibit1";
var currenteLocation = "exhibit1";

function change(exhibitName) {
    var body = document.getElementsByTagName("body")[0];
    var roaming = document.getElementById("roaming");
    var exhibit = document.getElementById(exhibitName);
    var currentExhibit = document.getElementById(currenteLocation);
    console.log("Location is: " + eLocation +" and the last Location is " + currenteLocation);
    
    if(eLocation==currenteLocation) {
        return;
    } else if(eLocation!=currenteLocation) {
        currentExhibit.style.opacity ="0";
        setTimeout(function() {
            currentExhibit.style.display = "none"; 
            if (eLocation=="exhibit1") {
                exhibit.style.display = "flex";
            } else {
                exhibit.style.display = "block";
            }
//            currentExhibit.style.opacity = "1";
        }, 750);
        currenteLocation = eLocation;
    }
}
    
    function eLocationRequest() {
    var request = new XMLHttpRequest();
    request.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        eLocation = this.responseText;
        }
    };
    request.open("GET", "predict/", true);
    request.send();
    change(eLocation);
}

setInterval(eLocationRequest, 500);