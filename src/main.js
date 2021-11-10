const mainTag = document.getElementsByTagName("main");

function ToggleHamburger(className){
    $(className).toggle(); 
    $(mainTag).toggle();

    var hamburgerIsOpen = $(className).css('display') == 'block';

    if(hamburgerIsOpen){
        $(".hamburger-icon").children("div").each(function(index) {
            AddHamburgerClass(index, this);
        });
    }else{
        $(".hamburger-icon").children("div").each(function(index) {
            RemoveHamburgerClass(index, this);
        });
    }   
}

function AddHamburgerClass(index, element){
    switch(index){
        case 0:
            $(element).addClass("rotate-top");
            $(element).removeClass("reset-rotate");
            break;
        case 1:
            $(element).addClass("ham-middle-line");
            break;
        case 2:
            $(element).addClass("rotate-bottom");
            $(element).removeClass("reset-rotate");
            break;
    }
}

function RemoveHamburgerClass(index, element){
    switch(index){
        case 0:
            $(element).removeClass("rotate-top");
            $(element).addClass("reset-rotate");
            break;
        case 1:
            $(element).removeClass("ham-middle-line");
            break;
        case 2:
            $(element).removeClass("rotate-bottom");
            $(element).addClass("reset-rotate");
            break;
    }
}

function DisplayPopUp(){

}

function ClosePopUp(){
    console.log("Popup closed triggered.");
    // try get session storage for user
    // if it doesn't exist then create it
    // store that the user has closed the popup in their session
    // this session should expire after 5 days.
    let popUpCookie = GetCookie("popup");

    if(popUpCookie == ""){
        CreateCookie('popup', true, 5);
    }else{
        UpdateCookie('popup', true, popUpCookie);
    }

    $("#popup").hide();
}

function CreateCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function UpdateCookie(cname, cvalue, cookie){
    // TODO
}
  
function GetCookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(';');

    for(let i = 0; i < ca.length; i++) {
        let c = ca[i];

        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }

        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}