function scrollToAbout(){
    $('html, body').animate({
        scrollTop: $('#about').offset().top
    }, 825);
}

function scrollToProjects(){
    $('html, body').animate({
        scrollTop: $('#projects').offset().top
    }, 825);
}

function scrollToContact(){
    $('html, body').animate({
        scrollTop: $('#contact').offset().top
    }, 825);
}

//var scrollBehaviorSupported = 'scroll-behavior' in document.documentElement.style;
//console.log('scroll-behavior supported:', scrollBehaviorSupported);
