// desktop animation of nav background color changing
$(window).scroll(function() {
    var navOffset = $('nav').offset();
    $('nav').toggleClass('navScrolled', navOffset.top > 10);

    $('nav .logoImage').toggleClass('logoImageScrolled', navOffset.top > 10);

    $('.mainTitle').toggleClass('mainTitleScrolled', navOffset.top > 10);

});
// scroll down to about from index.html
$("#aboutButton").click(function() {
    console.log('clicked')

    x = $("#about").offset().top;
    $([document.documentElement, document.body]).animate({
        scrollTop: x,
    }, 200);
});

// mobile navigation bar
$(document).ready(function() {
    $(".hamburger").click(function() {
        console.log("ham clicked");
        $('nav ul').toggleClass('show');
        $('nav').toggleClass('navShow');
    })
});

// page transitions js
$('a[href*=".html"]').click(function(e) {
    var link = $(this).attr("href");
    e.preventDefault();
    var name =
        $('.mainTitle').addClass('transitionOut');
    setTimeout(function() {
        window.location = link;
    }, 250);
});

//events nav
$("a[href$='EventsNav']").click(function(e) {

    var name = $(this.hash);
    console.log(name);
    x = name.offset().top;
    $('html, body').animate({
        scrollTop: x,
    }, 200);
    e.preventDefault();
});

// execboard mobile email
$("button[id^=envelope]").click(function() {

    var emailId = $(this);
    console.log(emailId);

    var string = $(this).prop('outerHTML');
    num = string.substring(43, 44);
    console.log(num);

    var whichOne = "#emailsenvelope" + num;
    console.log(whichOne);

    $(whichOne).toggleClass('showEmails');

})
