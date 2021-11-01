const mainTag = document.getElementsByTagName("main");

function ShowCardRow(){
    $('.projects').removeClass("projects-grid");
    $('.card').removeClass("card-grid");
    $('.card-title').removeClass('card-title-grid');
    $('.card-breadcrumbs').removeClass('card-breadcrumbs-grid');
    $('#featured_row').addClass('active-layout');
    $('#featured_grid').removeClass('active-layout');
}

function ShowCardGrid(){
    $('.projects').addClass("projects-grid");
    $('.card').addClass("card-grid");
    $('.card-title').addClass('card-title-grid');
    $('.card-breadcrumbs').addClass('card-breadcrumbs-grid');
    $('#featured_row').removeClass('active-layout');
    $('#featured_grid').addClass('active-layout');
}

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