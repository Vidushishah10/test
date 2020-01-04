/* Script on ready
---------------------------------*/


$(document).ready(function(){

    /* Search Landing Page - Toggle left sidebar code*/
    $(".sponsor-page .grid .bg-block").click(function () {
        if ($(this).hasClass("active")) {
            $(this).removeClass("active");
            $(this).next().slideUp(500);
        } else {
            $(".sponsor-page .grid .bg-block").removeClass("active");
            $(".sponsor-page .grid .box-content").slideUp(500);
            $(this).addClass("active");
            $(this).next("div").slideDown(500);
        }
    });
    /* mobile navigation */
    $('.hamburger').click(function () {
        if ($(this).hasClass('open')) {
            $(this).removeClass('open');
            $("#wrapper").css("right", "0");
            $('.logo').removeClass('visibility-hidden');
            $('.hamburgericon').removeClass('displaynone');
            $('.cross').addClass('displaynone');
            
            $('body, html').removeClass('scroll-hidden');
            $('.navbar').removeClass('open');
            $('.sub-menu').slideUp();
            $('em.submenu-caret').removeClass('toggled')
        } else {
            $(this).addClass('open')
            $("#wrapper").css("right", "80%");
            $('.logo').addClass('visibility-hidden');
            $('.hamburgericon').addClass('displaynone');
            $('.cross').removeClass('displaynone');
            $('body, html').addClass('scroll-hidden');
            $('.navbar').addClass('open');
        }
    })
    if ($('#phone-menu ul ul').length > 0) {
        $('#phone-menu ul ul ').before('<em class="submenu-caret"></em>')
    }
    $('.submenu-caret').click(function () {
        $(this).next().slideToggle();
        $(this).toggleClass('toggled');
        $(this).parent().siblings().find('ul').slideUp()
        $(this).parent().siblings().find('em').removeClass('toggled')
    });

    
});

/* Script on scroll
---------------------------------*/
$(window).scroll(function() {

});

/* Script on resize
---------------------------------*/
$(window).resize(function() {

});

/* Script on load
----------------------------------*/
$(window).load(function() {

});

/* Script all functions
----------------------------------*/
function equal(){
    jQuery(".service-block").each(function(){
        var max = 1;
        jQuery(this).find(".equal-height").css("height","auto");
        jQuery(this).find(".equal-height").each(function() {
            var height1 = jQuery(this).height();
            max = (height1 > max) ? height1 : max;
        });
        jQuery(this).find(".equal-height").css("height",max);
    })
}
jQuery(window).load(equal);
jQuery(window).resize(equal);
