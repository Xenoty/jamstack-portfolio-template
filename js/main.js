
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