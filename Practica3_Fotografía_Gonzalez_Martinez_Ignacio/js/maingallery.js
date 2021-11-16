
    var menu = false;
    ScrollReveal().reveal('.titulo', {delay:1500,duration:1500});
    ScrollReveal().reveal('.mi1', {delay:250,distance:'1000px',origin:'top'});
    ScrollReveal().reveal('.mi2', {delay:350,distance:'2000px',origin:'top'});
    ScrollReveal().reveal('.mi3', {delay:650,distance:'3000px',origin:'top'});
    ScrollReveal().reveal('.mi4', {delay:350,distance:'2000px',origin:'top'});
    ScrollReveal().reveal('.mi5', {delay:250,distance:'1000px',origin:'top'});

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
    var project = 1;
    $('.gallery-pic').click(function(){

        if($(this).hasClass('pic1')){
            $('.galleryp1m1').css('background-image','url("../img/g1.jpg")');
            $('.galleryp1m1').css('background-position','center center');
            $('.galleryp1m2').addClass('movilfoto');
            if($( window ).width()<1000){
                $('.galleryp1m2').css('background-image','url("../img/g1.jpg")');
            }else if($( window ).width()>1000){
                $('.galleryp1m2').css('background','#1d1918');
            }
            project = 1;
        }
        if($(this).hasClass('pic2')){
            $('.galleryp1m1').css('background-image','url("../img/g2.jpg")');
            $('.galleryp1m1').css('background-position','center center');
            $('.galleryp1m2').addClass('movilfoto');
            if($( window ).width()<1000){
                $('.galleryp1m2').css('background-image','url("../img/g2.jpg")');
            }else if($( window ).width()>1000){
                $('.galleryp1m2').css('background','#1d1918');
            }
            project = 2;
        }
        if($(this).hasClass('pic3')){
            $('.galleryp1m1').css('background-image','url("../img/g3.jpg")');
            $('.galleryp1m1').css('background-position','center center');
            $('.galleryp1m2').addClass('movilfoto');
            if($( window ).width()<1000){
                $('.galleryp1m2').css('background-image','url("../img/g3.jpg")');
            }else if($( window ).width()>1000){
                $('.galleryp1m2').css('background','#1d1918');
            }
            project = 3;
        }
        if($(this).hasClass('pic4')){
            $('.galleryp1m1').css('background-image','url("../img/g4.jpg")');
            $('.galleryp1m1').css('background-position','center center');
            $('.galleryp1m2').addClass('movilfoto');
            if($( window ).width()<1000){
                $('.galleryp1m2').css('background-image','url("../img/g4.jpg")');
            }else if($( window ).width()>1000){
                $('.galleryp1m2').css('background','#1d1918');
            }
            project = 4;
        }
        if($(this).hasClass('pic5')){
            $('.galleryp1m1').css('background-image','url("../img/g5.jpg")');
            $('.galleryp1m1').css('background-position','center center');
            $('.galleryp1m2').addClass('movilfoto');
            if($( window ).width()<1000){
                $('.galleryp1m2').css('background-image','url("../img/g5.jpg")');
            }else if($( window ).width()>1000){
                $('.galleryp1m2').css('background','#1d1918');
            }
            project = 5;
        }
        if($(this).hasClass('pic6')){
            $('.galleryp1m1').css('background-image','url("../img/g6.jpg")');
            $('.galleryp1m1').css('background-position','right center');
            $('.galleryp1m2').addClass('movilfoto');
            if($( window ).width()<1000){
                $('.galleryp1m2').css('background-image','url("../img/g6.jpg")');
            }else if($( window ).width()>1000){
                $('.galleryp1m2').css('background','#1d1918');
            }
            project = 6;
        }
        if($(this).hasClass('pic7')){
            $('.galleryp1m1').css('background-image','url("../img/g7.jpg")');
            $('.galleryp1m1').css('background-position','center center');
            $('.galleryp1m2').addClass('movilfoto');
            if($( window ).width()<1000){
                $('.galleryp1m2').css('background-image','url("../img/g7.jpg")');
            }else if($( window ).width()>1000){
                $('.galleryp1m2').css('background','#1d1918');
            }
            project = 7;
        }
        if($(this).hasClass('pic8')){
            $('.galleryp1m1').css('background-image','url("../img/g8.jpg")');
            $('.galleryp1m1').css('background-position','center center');
            $('.galleryp1m2').addClass('movilfoto');
            if($( window ).width()<1000){
                $('.galleryp1m2').css('background-image','url("../img/g8.jpg")');
            }else if($( window ).width()>1000){
                $('.galleryp1m2').css('background','#1d1918');
            }
            project = 8;
        }
        if($(this).hasClass('pic9')){
            $('.galleryp1m1').css('background-image','url("../img/g9.jpg")');
            $('.galleryp1m1').css('background-position','center center');
            $('.galleryp1m2').addClass('movilfoto');
            if($( window ).width()<1000){
                $('.galleryp1m2').css('background-image','url("../img/g9.jpg")');
            }else if($( window ).width()>1000){
                $('.galleryp1m2').css('background','#1d1918');
            }
            project = 9;
        }
        if($(this).hasClass('pic10')){
            $('.galleryp1m1').css('background-image','url("../img/g10.jpg")');
            $('.galleryp1m1').css('background-position','center center');   
            $('.galleryp1m2').addClass('movilfoto');
            if($( window ).width()<1000){
                $('.galleryp1m2').css('background-image','url("../img/g10.jpg")');
            }else if($( window ).width()>1000){
                $('.galleryp1m2').css('background','#1d1918');
            }
            project = 10;
        }

        $('.galleryp1m1').addClass('cs');
        $('.galleryp1m1').css('transform','translate(0%)');
        $('body').addClass('go');
        $('nav').addClass('none');
        $('footer').addClass('none');
        $('.galleryp1m2').addClass('cs2');
        $('.galleryp1m2').css('transform','translate(0%)');
    });

    $('.close').click(function(){
        $('.galleryp1m1').css('transform','translate(-100%)');
        $('body').removeClass('go');
        $('nav').removeClass('none');
        $('footer').removeClass('none');
        $('.galleryp1m2').css('transform','translate(100%)');
    });

    $(window).resize(function(){
        if($( window ).width()<1000){
            $('.galleryp1m2').css('background-image','url("../img/g'+project+'.jpg")');
        }else if($( window ).width()>1000){
            $('.galleryp1m2').css('background','#1d1918');
        }     

    });
    $('.mosaicofooter-item').click(function(){
        $(location).attr('href','https://www.instagram.com/g_calatrava/');
    });
