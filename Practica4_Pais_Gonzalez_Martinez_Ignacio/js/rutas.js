
    $(document).ready(function(){
        if ($(window).scrollTop()>50) {
            $("nav").removeClass('esconder');
            $("nav").addClass('aparecer');
        }       
    });
    $(window).scroll(function() {
        if ($(window).scrollTop()>50) {
            $("nav").removeClass('esconder');
            $("nav").addClass('aparecer');
        } else {
            $("nav").removeClass('aparecer');
            $("nav").addClass('esconder');
        }
    });
    //INSTAGRAM
    $('.pic1js').hover(
        function(){
            $(this).removeClass('pic1');
            $(this).addClass('pic1h');
            $(this).find('.relleno').css('opacity',1);
        },
        function(){
            $(this).removeClass('pic1h');
            $(this).addClass('pic1');
            $(this).find('.relleno').css('opacity',0);
        }
    );
    $('.pic2js').hover(
        function(){
            $(this).removeClass('pic2');
            $(this).addClass('pic2h');
            $(this).find('.relleno').css('opacity',1);
        },
        function(){
            $(this).removeClass('pic2h');
            $(this).addClass('pic2');
            $(this).find('.relleno').css('opacity',0);
        }
    );
    $('.pic3js').hover(
        function(){
            $(this).removeClass('pic3');
            $(this).addClass('pic3h');
            $(this).find('.relleno').css('opacity',1);
        },
        function(){
            $(this).removeClass('pic3h');
            $(this).addClass('pic3');
            $(this).find('.relleno').css('opacity',0);
        }
    );
    $('.pic4js').hover(
        function(){
            $(this).removeClass('pic4');
            $(this).addClass('pic4h');
            $(this).find('.relleno').css('opacity',1);
        },
        function(){
            $(this).removeClass('pic4h');
            $(this).addClass('pic4');
            $(this).find('.relleno').css('opacity',0);
        }
    );
    $('.pic5js').hover(
        function(){
            $(this).removeClass('pic5');
            $(this).addClass('pic5h');
            $(this).find('.relleno').css('opacity',1);
        },
        function(){
            $(this).removeClass('pic5h');
            $(this).addClass('pic5');
            $(this).find('.relleno').css('opacity',0);
        }
    );
    $('.pic6js').hover(
        function(){
            $(this).removeClass('pic6');
            $(this).addClass('pic6h');
            $(this).find('.relleno').css('opacity',1);
        },
        function(){
            $(this).removeClass('pic6h');
            $(this).addClass('pic6');
            $(this).find('.relleno').css('opacity',0);
        }
    );
    $('.pic7js').hover(
        function(){
            $(this).removeClass('pic7');
            $(this).addClass('pic7h');
            $(this).find('.relleno').css('opacity',1);
        },
        function(){
            $(this).removeClass('pic7h');
            $(this).addClass('pic7');
            $(this).find('.relleno').css('opacity',0);
        }
    );
    $('.pic8js').hover(
        function(){
            $(this).removeClass('pic8');
            $(this).addClass('pic8h');
            $(this).find('.relleno').css('opacity',1);
        },
        function(){
            $(this).removeClass('pic8h');
            $(this).addClass('pic8');
            $(this).find('.relleno').css('opacity',0);
        }
    );
    // REDIRECCIONES  
    $('.topten-post-button').click(function(){
        window.location.href = "blog.html";
    });

    $('.undia-gallery-col-pic').click(function(){
        window.location.href = "blog.html";
    });
    $('.header-menu-logo').click(function(){
        window.location.href = "index.html";
    });
    
    $('.inicio').click(function(){
        window.location.href = "index.html";
    });

    $('.conocenos').click(function(){
        window.location.href = "conocenos.html";
    });

    $('.rutas').click(function(){
        window.location.href = "rutas.html";
    });

    $('.contacto').click(function(){
        window.location.href = "contacto.html";
    });


    var rutas = new Swiper('.swiperrutas', {
        touchRatio:0,
    });
    $('.ir1').click(function(){
        rutas.slideTo(1,1000, true);
        $('html, body').scrollTop(($(".rutaMonte").offset().top)-370);
    });
    $('.ir2').click(function(){
        rutas.slideTo(2,1000, true);
        $('html, body').scrollTop(($(".rutaMonte").offset().top)-370);
    });
    $('.ir3').click(function(){
        rutas.slideTo(3,1000, true);
        $('html, body').scrollTop(($(".rutaMonte").offset().top)-370);
    });
    $('.ir1 , .ir2 , .ir3').hover(function(){
        $(this).find('.intro-ruta-content h3').css('background-color','white');
        $(this).find('.intro-ruta-content h3').css('color','black');
        $(this).find('.intro-ruta-content h3').css('text-shadow','0px 0px 0px white');
    },function(){
        $(this).find('.intro-ruta-content h3').css('background-color','transparent');
        $(this).find('.intro-ruta-content h3').css('color','white');
        $(this).find('.intro-ruta-content h3').css('text-shadow','2px 2px 2px black');
    });
    var slide2 = new Swiper('.swiperruta1', {
        direction : 'vertical',
        on:{
            slideChange: function () { console.log('ha cambiado') }
        },
    });
    

    
    // $('.rutaMonte').click(function(){
    //     if(slide2.realIndex<=5 && slide2.isEnd){
    //         $('.rutaMonte').css('background-image','url(img/index/ciudades/ciu5.jpg)');
    //     } else if (slide2.realIndex<=4 && slide2.isEnd) {
    //         console.log(slide2.realIndex);
    //     } else if (slide2.realIndex<=3 && slide2.isEnd) {
    //         console.log(slide2.realIndex);
    //     } else if (slide2.realIndex<=2 && slide2.isEnd) {
    //         console.log(slide2.realIndex);
    //     } else if (slide2.realIndex<=1 && slide2.isEnd) {
    //         console.log(slide2.realIndex);
    //     }
    // });
    
    $('.c1').click(function(){
        slide2.slideTo(0,1000, true);
    });
    $('.c2').click(function(){
        slide2.slideTo(1,1000, true);
    });
    $('.c3').click(function(){
        slide2.slideTo(2,1000, true);
    });
    $('.c4').click(function(){
        slide2.slideTo(3,1000, true);
    });
    $('.c5').click(function(){
        slide2.slideTo(4,1000, true);
    });
    $('.c6').click(function(){
        slide2.slideTo(5,1000, true);
    });
    var slide22 = new Swiper('.swiperruta2', {
        direction : 'vertical',
    });
    $('.c11').click(function(){
        slide22.slideTo(0,1000, true);
    });
    $('.c22').click(function(){
        slide22.slideTo(1,1000, true);
    });
    $('.c33').click(function(){
        slide22.slideTo(2,1000, true);
    });
    $('.c44').click(function(){
        slide22.slideTo(3,1000, true);
    });
    $('.c55').click(function(){
        slide22.slideTo(4,1000, true);
    });
    $('.c66').click(function(){
        slide22.slideTo(5,1000, true);
    });
    var slide222 = new Swiper('.swiperruta3', {
        direction : 'vertical',
    });
    $('.c111').click(function(){
        slide222.slideTo(0,1000, true);
    });
    $('.c222').click(function(){
        slide222.slideTo(1,1000, true);
    });
    $('.c333').click(function(){
        slide222.slideTo(2,1000, true);
    });
    $('.c444').click(function(){
        slide222.slideTo(3,1000, true);
    });
    $('.c555').click(function(){
        slide222.slideTo(4,1000, true);
    });
    $('.c666').click(function(){
        slide222.slideTo(5,1000, true);
    });
