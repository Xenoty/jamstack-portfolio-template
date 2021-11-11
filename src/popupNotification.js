if(DisplayPopUp()){
    $("#popup").show();
}else{
    $("#popup").hide();
}

function DisplayPopUp(){
    let popUpCookie = GetCookie("popup");
    
    if(popUpCookie === ""){
        SetCookie('popup', true, 3);
        return true;
    }else{
        if(popUpCookie.toLowerCase() === "false"){
            return false;
        }
        return true;
    }
}

function ClosePopUp(){
    SetCookie('popup', false, 3);
    $("#popup").hide();
}

function SetCookie(cname, cvalue, exdays) {

    const date = new Date();
    date.setTime(date.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expireDate = "expires=" + date.toUTCString();

    document.cookie = cname + "=" + cvalue + ";" + expireDate + ";path=/";
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