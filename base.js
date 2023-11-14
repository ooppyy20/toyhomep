$(document).ready(function(){

    // toy-box x scroll
    var curDown = false,
    curXPos = 0;

    $(".toy-box").mousemove(function(m){
        if(curDown){
            $(this).scrollLeft($(this).scrollLeft()-(m.pageX-curXPos)/20)
        }
    });
    $(".toy-box").mousedown(function(m){
        curXPos = m.pageX;
        curDown = true;
    });
    $("body").mouseup(function(){
        curDown = false;
    });
    $(".toy").mousemove(function(m){
        curDown = false;
    });




    // sound
    var bg_sound = new Audio('resources/sound/Home for the Holidays - TrackTribe.mp3');
    bg_sound.play();
    bg_sound.loop = true;

    $(".toy").on("click", function(){
        var str = '/resources/sound/paper-'+Math.floor(Math.random()*8+1)+'.mp3'
        var paper_sound = new Audio(str);
        paper_sound.play();
    });


    // toys
    $(".chapstick").on("click", function(){
        if($(this).attr("status") == "on") {
            $(this).attr("status", "off");
            bg_sound.volume = 0;
        }
        else {
            $(this).attr("status", "on");
            bg_sound.volume = 1;
        }
    });

    $(".picture").on("click", function(){
        var str = 'resources/image/bg'+Math.floor(Math.random()*5+1)+'.jpg';
        $(".content").css("background-image", "url("+str+")");
    });

    $(".crown").on("click", function(){
        $("#popup").removeAttr("style");
        $('.video').append(embed);
    });
    var embed = $('.youtube');
    $('.video').empty();
    $('#popup .close').click(function() {
        $('#popup').hide();
        $('.video').empty(); 
      });



    // draggable
    $(".draggable" ).draggable({ containment: ".toy-box", scroll: false});

    $(".olive").draggable({ containment: ".board", scroll: false,
           drag: function() {
                $(this).css("transform","scale(1.1) rotate(-30deg)");
            },
            stop: function() {
                $(this).css("transform","scale(1.0) rotate(0deg)");
            }
    });

});

