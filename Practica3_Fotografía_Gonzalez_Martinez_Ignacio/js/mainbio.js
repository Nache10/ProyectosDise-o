    ScrollReveal().reveal('.titulo', {delay:1500,duration:1500});
    ScrollReveal().reveal('.mi1', {delay:650,distance:'1000px',origin:'top'});
    ScrollReveal().reveal('.mi2', {delay:350,distance:'2000px',origin:'top'});
    ScrollReveal().reveal('.mi3', {delay:650,distance:'1000px',origin:'top'});
    ScrollReveal().reveal('.mi4', {delay:350,distance:'2000px',origin:'top'});
    ScrollReveal().reveal('.mi5', {delay:650,distance:'1000px',origin:'top'});
    var menu = false;
    $('.icon-container').click(function(){
        if(!menu){
            $('.menu-list').addClass('appear');
            $('.bar1').addClass('rosamenu');
            $('.bar1').addClass('ch1');
            $('.bar2').addClass('rosamenu');
            $('.bar2').addClass('ch2');
            $('.bar3').addClass('rosamenu');
            $('.bar3').addClass('ch3');
            menu=true;
        } else {
            $('.menu-list').removeClass('appear');
            $('.bar1').removeClass('rosamenu');
            $('.bar1').removeClass('ch1');
            $('.bar2').removeClass('rosamenu');
            $('.bar2').removeClass('ch2');
            $('.bar3').removeClass('rosamenu');
            $('.bar3').removeClass('ch3');
            menu=false;
        }
    });
    $('.timeline-content').hover(function(){
        $(this).find('h2').css('color','#f3557B');
        $(this).css('padding','0');
    },function(){
        $(this).find('h2').css('color','#ebeff0');
        $(this).css('padding','30px');
    });
    $('.timeline-content').click(function(){
        $('.lightbox').addClass('lightboxanim');
        $('nav').addClass('navanim')
        $('.close').css('display','block');
        $('footer').css('display','none');
        $('body').css('overflow','hidden');
        if($(this).hasClass('tc1')){
            $('.light-img').css('background-image','url("../img/aw1.jpg")');
        }
        if($(this).hasClass('tc2')){
            $('.light-img').css('background-image','url("../img/aw2.jpg")');
        }
        if($(this).hasClass('tc3')){
            $('.light-img').css('background-image','url("../img/aw3.jpg")');
            $('.light-img').css('background-position','right center');

        }
        if($(this).hasClass('tc4')){
            $('.light-img').css('background-image','url("../img/aw4.jpg")');
        }
        if($(this).hasClass('tc5')){
            $('.light-img').css('background-image','url("../img/aw5.jpg")');
        }
        if($(this).hasClass('tc6')){
            $('.light-img').css('background-image','url("../img/aw6.jpg")');
        }
    });
    $('.close').click(function(){
        $('.lightbox').removeClass('lightboxanim');
        $('nav').removeClass('navanim')
        $('.close').css('display','none');
        $('footer').css('display','block');
        $('body').css('overflow','scroll');
    });
    $('.mosaicofooter-item').click(function(){
        $(location).attr('href','gallery.html');
    });
