WrapCodeTagsWithPreTags();
AppenBulletListSpanToLists();

function AppenBulletListSpanToLists(){
  $(".markdown ul, .markdown ol").children().prepend("<span class='bullet-point'></span>")
}

function WrapCodeTagsWithPreTags(){
    $("code").parent().each(function(){
        if(!$(this).is('pre'))
        {
            $(this).children().wrap("<pre class='language-csharp' tabindex='0'></pre>");
        }
    });
}