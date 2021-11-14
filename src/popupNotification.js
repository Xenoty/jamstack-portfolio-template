const amountOfDaysForCookieToExpire = 1;

if(DisplayPopUp()){
    // Render the popup html through js
    $('#popup-container').append("<div class='popup-wrapper' id='popup'><div class='popup-content spacing'><p>This website is a template using Jamstack architecture, get the template at <a href='https://github.com/Xenoty/Jamstack-portfolio-template' target='_blank'>Github</a></p><svg onclick='ClosePopUp()' xmlns='http://www.w3.org/2000/svg' width='38.664' height='38.664' viewBox='0 0 38.664 38.664'><g id='Group_67' data-name='Group 67' transform='translate(-1293.084 -263.584)'><rect id='Rectangle_51' data-name='Rectangle 51' width='46.185' height='8.494' transform='translate(1299.09 263.584) rotate(45)' fill='#fff'/><rect id='Rectangle_52' data-name='Rectangle 52' width='46.185' height='8.494' transform='translate(1293.084 296.242) rotate(-45)' fill='#fff'/></g></svg></div></div>");
    $("#popup").show();
}else{
    $("#popup").hide();
}

function DisplayPopUp(){
    let popUpCookie = GetCookie("popup");
    
    if(popUpCookie === ""){
        SetCookie('popup', true, amountOfDaysForCookieToExpire);
        return true;
    }else{
        if(popUpCookie.toLowerCase() === "false"){
            return false;
        }
        return true;
    }
}

function ClosePopUp(){
    SetCookie('popup', false, amountOfDaysForCookieToExpire);
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