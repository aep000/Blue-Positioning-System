var location = "exhibit1";
var currentLocation = "exhibit1";

function change(exhibitName) {
    var body = document.getElementsByTagName("body")[0];
    var roaming = document.getElementById("roaming");
    var exhibit = document.getElementById(exhibitName);
    var currentExhibit = document.getElementById(currentLocation);
    console.log("Location is: " + location +" and the last location is " + currentLocation);
    
    if(location==currentLocation) {
        return;
    } else if(location!=currentLocation) {
        currentExhibit.style.opacity ="0";
        setTimeout(function() {
            currentExhibit.style.display = "none"; 
            if (location=="exhibit1") {
                exhibit.style.display = "flex";
            } else {
                exhibit.style.display = "block";
            }
            currentExhibit.style.opacity = "1";
        }, 750);
        currentLocation = location;
    }
}
    
    function locationRequest() {
    var request = new XMLHttpRequest();
    request.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        location = this.responseText;
        }
    };
    request.open("GET", "predict/", true);
    request.send();
    change(location);
}

setInterval(locationRequest, 500);