setTimeout(function(){
    $('.header-video').css('animation','videoheader 2s ease forwards')
}
,1500);
setTimeout(function(){
    $('.header-letras h1').css('z-index','99');
    $('.header-letras h1').css('opacity','1');
}
,2000);

setTimeout(function(){
    if(window.innerWidth>900){
    var panel = document.getElementById("panel");

    document.addEventListener("mousemove", function(event) {
        var x = event.pageX,
            y = event.pageY;
        
        var width = window.innerWidth;
        var height = window.innerHeight;
        
        var percentX = (x / width) - 0.5;
        var percentY = (y / height) - 0.5;
        
        var degX = -percentY * 15 + 'deg';
        var degY = percentX * 15 + 'deg';
        panel.style.transform = 'rotateX(' + degX + ') rotateY(' + degY + ')';
        
        var posX = 50 + (20 * percentX) + '%';
        var posY = 50 + (40 * percentY) + '%';
        panel.style.backgroundPosition = posX + ' ' + posY;
    });
    }
},2000);
setTimeout(function(){
    $('.header-video').css('opacity','.85');
}
,2000);
$("video[autoplay]").each(function(){ this.play(); });
//swipers 
var swiper = new Swiper('.swiper1', {
  grabCursor: true,
  spaceBetween: 50,
});
var ww = $(window).width()
if(ww>800){
var swiper2 = new Swiper('.swiper2', {
    slidesPerView: 3,
    centeredSlides: true,
    spaceBetween: 50,
    grabCursor: true,
    loop: true,
});
}else{
    var swiper2 = new Swiper('.swiper2', {
    slidesPerView: 1,
    centeredSlides: true,
    spaceBetween: 50,
    grabCursor: true,
    loop: true,
}); 
}

$(window).resize(function(){
    var ww = $(window).width()
    if (ww>1000) swiper2.params.slidesPerView = 3;
    if (ww>800 && ww<=1000) swiper2.params.slidesPerView = 3;
    if (ww<=800) swiper2.params.slidesPerView = 1;
});




//Scrolreveal
setTimeout(function(){
    $('.contenido-title').css('opacity','1');
},2200);
ScrollReveal().reveal('.ct1', {delay:150,distance:'200px',origin:'left',reset:true });
ScrollReveal().reveal('.ctt1', {delay:150,distance:'200px',origin:'left',reset:true });
ScrollReveal().reveal('.cf1', {delay:150,distance:'200px',origin:'right',reset:true });
//letras de colores
$('.a').hover(function(){
    $(this).css('color','#65077F')
});
$('.p').hover(function(){
    $(this).css('color','#b61c24')
});
$('.r').hover(function(){
    $(this).css('color','#EE6E2E')
});
$('.e').hover(function(){
    $(this).css('color','#F2CB07')
});
$('.n').hover(function(){
    $(this).css('color','#61f205')
});
$('.d').hover(function(){
    $(this).css('color','#00f6cb')
});

$('.s').hover(function(){
    $(this).css('color','#65077F')
});
$('.i').hover(function(){
    $(this).css('color','#b61c24')
});
$('.m').hover(function(){
    $(this).css('color','#61f205')
});
$('.p').hover(function(){
    $(this).css('color','#00f6cb')
});

$('.f').hover(function(){
    $(this).css('color','#00f6cb')
});
$('.u').hover(function(){
    $(this).css('color','#65077F')
});

$('.c1').click(function(){
    swiper.slideNext();
    if(swiper.realIndex==0){
        $('.contenido-control').css('color','#EE6E2E');
    } else if (swiper.realIndex == 1){
        $('.contenido-control').css('color','#F2CB07');
    } else if (swiper.realIndex == 2){
        $('.contenido-control').css('color','#04D976');
    }
});
$('.c2').click(function(){
    swiper.slidePrev();
    if(swiper.realIndex==0){
        $('.contenido-control').css('color','#EE6E2E');
    } else if (swiper.realIndex == 1){
        $('.contenido-control').css('color','#F2CB07');
    } else if (swiper.realIndex == 2){
        $('.contenido-control').css('color','#04D976');
    }
});

$('.testers-control1').click(function(){
    swiper2.slideNext();
});
$('.testers-control2').click(function(){
    swiper2.slidePrev();
});


//cajas apuntes 
$('.parapapas-main1').hover(function(){
    $(this).css('align-items','center');
    $('.parapapas-main1 h2').css('padding','60px 30px');
    $(this).css('background-image','url(img/index/deberesh.jpg)');
},function(){
    $(this).css('align-items','flex-end');
    $('.parapapas-main1 h2').css('padding','30px 20px');
    $(this).css('background-image','url(img/index/deberes.jpg)');
});

$('.parapapas-main2').hover(function(){
    $(this).css('align-items','center');
    $('.parapapas-main2 h2').css('padding','60px 30px');
    $(this).css('background-image','url(img/index/videosh.jpg)');
},function(){
    $(this).css('align-items','flex-end');
    $('.parapapas-main2 h2').css('padding','30px 20px');
    $(this).css('background-image','url(img/index/videos.jpg)');
});

//tarjetas hover
$('.precio-item').hover(function(){
    $(this).find('.precio-item-titulo').css('opacity','1');
    $(this).find('.precio-item-descripcion').css('opacity','1');
},function(){
    $(this).find('.precio-item-titulo').css('opacity','0');
    $(this).find('.precio-item-descripcion').css('opacity','0');
});

var colores = ['#65077F','#EE6E2E','#F2CB07','#04D976'];
//Equipo hover de colores
$('.equipo-persona').hover(function(){
    var num = Math.round(Math.random()*(4-1)+parseInt(1));
    var color = colores[num-1];
    $(this).css('border','5px solid '+color+'');
    // $(this).find('.persona-info h3').css('color',color);
},function(){
    $(this).css('border','1px solid black');
    // $(this).find('.persona-info h3').css('color','black');

});
//Enlaces de redireccion

$('.index').click(function(){
    window.location.href = "index.html";
});
$('.papas').click(function(){
    window.location.href = "papas.html";
});
$('.kids').click(function(){
    window.location.href = "kids.html";
});
$('.contact').click(function(){
    window.location.href = "contacto.html";
});


