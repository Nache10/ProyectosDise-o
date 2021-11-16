
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

    var swiper = new Swiper('.swiper-container', {
        speed:800,
        autoplay:{
            delay:4000
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
    $('.curling').click(function(){
        $('.sports-col-main-pic').css('background-image','url("img/conocenos/sports/curling2.jpg")');
        $('.cambiodeporte').html('Curling');
        $('.sports-col1').css('background-image','url("img/conocenos/sports/curling.jpg")');
    });
    $('.hockey').click(function(){
        $('.sports-col-main-pic').css('background-image','url("img/conocenos/sports/hockey.jpg")');
        $('.cambiodeporte').html('Hockey Hielo');
        $('.sports-col1').css('background-image','url("img/conocenos/sports/hockey2.jpg")');
    });
    $('.lacrosse').click(function(){
        $('.sports-col-main-pic').css('background-image','url("img/conocenos/sports/lacrosse.jpg")');
        $('.cambiodeporte').html('Lacrosse');
        $('.sports-col1').css('background-image','url("img/conocenos/sports/lacrosse2.jpg")');
    });
    $('.snowboarding').click(function(){
        $('.sports-col-main-pic').css('background-image','url("img/conocenos/sports/sp1.jpg")');
        $('.cambiodeporte').html('Snowboarding');
        $('.sports-col1').css('background-image','url("img/conocenos/sports/sp2.jpg")');
    });
    $('.volleyball').click(function(){
        $('.sports-col-main-pic').css('background-image','url("img/conocenos/sports/volley2.jpg")');
        $('.cambiodeporte').html('Volleyball');
        $('.sports-col1').css('background-image','url("img/conocenos/sports/volley.jpg")');
    });
    $('.esqui').click(function(){
        $('.sports-col-main-pic').css('background-image','url("img/conocenos/sports/ski.jpg")');
        $('.cambiodeporte').html('Esquí de pista');
        $('.sports-col1').css('background-image','url("img/conocenos/sports/ski2.jpg")');
    });
