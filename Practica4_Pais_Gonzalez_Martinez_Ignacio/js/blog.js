$(document).ready(function(){
    if ($(window).scrollTop()>100       ) {
        $("nav").removeClass('esconder');
        $("nav").addClass('aparecer');
    }       
});
$(window).scroll(function() {
    if ($(window).scrollTop()>100) {
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

$('.undia-gallery-col-pic').click(function(){
    window.location.href = "blog.html";
});
$('.header-menu-logo').click(function(){
    window.location.href = "index.html";
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

