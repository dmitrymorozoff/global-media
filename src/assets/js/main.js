$('.video-frame__player').parent().click(function () {
    if($(this).children(".video-frame__player").get(0).paused){
        $(this).children(".video-frame__player").get(0).play();
        $(this).children(".video-frame__playpause").fadeOut();
    }else{
       $(this).children(".video-frame__player").get(0).pause();
        $(this).children(".video-frame__playpause").fadeIn();
    }
});
