function formValidation() {    
    var uname = document.registration.username;
    var uemail = document.registration.email;
    var passid = document.registration.passid;
    if (allLetter(uname)) {
        if (ValidateEmail(uemail)) {
            if (passid_validation(passid, 7, 12)) {
           }
        }
    }
    return false;
}
function allLetter(uname) {
    var letters = /^[A-Za-z]+$/;
    if (uname.value.match(letters)) {
        return true;
    }
    else {
        alert('Username must have alphabet characters only');
        uname.focus();
        return false;
    }
}
function ValidateEmail(uemail) {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (uemail.value.match(mailformat)) {
        return true;
    }
    else {
        alert("You have entered an invalid email address!");
        uemail.focus();
        return false;
    }
}
function passid_validation(passid, mx, my) {
    var passid_len = passid.value.length;
    if (passid_len == 0 || passid_len >= my || passid_len < mx) {
        alert("Password should not be empty / length be between " + mx + " to " + my);
        passid.focus();
        return false;
    }
    return true;
} 
{   if(confirm_pass == passid){
        alert('Form Succesfully Submitted');
        window.location.reload()
        return true;
    }
    return false;
}
var finished_rendering = function() {
    console.log("finished rendering plugins");
    var spinner = document.getElementById("spinner");
    spinner.removeAttribute("style");
    spinner.removeChild(spinner.childNodes[0]);
  }
  FB.Event.subscribe('xfbml.render', finished_rendering);