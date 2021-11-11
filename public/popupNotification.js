if(DisplayPopUp()){
    $("#popup").show();
}else{
    $("#popup").hide();
}

function DisplayPopUp(){
    let popUpCookie = GetCookie("popup");

    if(popUpCookie === null){
        SetCookie('popup', true, 3);

        return true;

    }else{
        if(!!popUpCookie){
            return false;
        }
        return true;
    }
}

function ClosePopUp(){
    SetCookie('popup', false);
    $("#popup").hide();
}

function SetCookie(cname, cvalue, exdays) {
    var expireDate;

    if(exdays){
        const date = new Date();
        date.setTime(date.getTime() + (exdays * 24 * 60 * 60 * 1000));
        expireDate = "expires=" + date.toUTCString();
    }else{
        var array = document.cookie.split(";");
        expireDate = array[1];
    }

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