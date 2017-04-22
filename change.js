var changed = false;

function change() {
    var body = document.getElementsByTagName("body")[0];
    var roaming = document.getElementById("roaming");
    var artist1 = document.getElementById("artist1");
    
   /* if (changed){
        body.style.background = "#7756eb";
        artist1.style.opacity = "0";
        roaming.style.opacity = "1";
        changed = false;
    } else {
//        body.style.background = "#605f62";
        body.style.background = "#5f528d";
        roaming.style.opacity = "0";
        artist1.style.opacity = "1";
        changed = true;
    }*/
    
     if (changed){
        body.style.background = "#7756eb";
        artist1.style.opacity = "0";
        roaming.style.opacity = "1";
        setTimeout(function() {artist1.style.display = "none";}, 750);
        changed = false;
    } else {
//        body.style.background = "#605f62";
        body.style.background = "#5f528d";
        roaming.style.opacity = "0";
        artist1.style.opacity = "1";
        artist1.style.display = "block";
        changed = true;
    }
 
}