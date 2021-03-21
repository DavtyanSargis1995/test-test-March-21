


$('.accordion>li').click(function(){
    if($("ul", this).hasClass('active')){
        $("ul", this).removeClass('active').slideUp()
        $("span", this).eq(1).html('+').removeAttr( 'style' )
        return
    }
    if($('.accordion>li ul').hasClass('active')){
        $('.accordion>li>ul').removeClass('active').slideUp()
        $('.accordion>li>p span:nth-child(2)').html('+').removeAttr( 'style' )
    }
    $("ul", this).addClass('active').slideDown()
    $("span", this).eq(1).html('-').css({
        padding: "0px 10px 3px 10px",
        border: '1px solid black',
        borderRadius: '50%'
    })
})



