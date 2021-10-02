const mainTag = document.getElementsByTagName("main");
var hamburgerLineArray = [];
var hamburgerIsOpen = false;

$(document).ready(function(){
    InsertComponents();
  });

function InsertComponents(){
    $.get("../components/nav.html", function(data){
        $("header").replaceWith(data);
    });

    $.get("../components/footer.html", function(data){
        $("footer").replaceWith(data);
    });
}

function ToggleHamburger(className){

    $(className).toggle(); 
    $(mainTag).toggle();

    hamburgerIsOpen = $(className).css('display') == 'block';

    if(hamburgerLineArray.length == 0){
        $(".hamburger-icon").children("div").each(function() {
            hamburgerLineArray.push(this);
        });
    }

    if(hamburgerIsOpen){
        hamburgerLineArray[0].className += ' ' + "ham-top-line"; 
        hamburgerLineArray[1].className += ' ' + "ham-middle-line";
        hamburgerLineArray[2].className += ' ' + "ham-bottom-line";
    }else{
        $(".hamburger-icon").children("div").each(function() {
            $(this).removeClass("ham-top-line ham-middle-line ham-bottom-line");
        });
    }   
}