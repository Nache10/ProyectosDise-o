var swiper = new Swiper('.main_swipper',{
    simulateTouch:false,
   });

   var galleryThumbs = new Swiper('.gallery-thumbs-gorg', {
      spaceBetween: 0,
      slidesPerView: 4,
      freeMode: true,
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
    });
    var galleryTop = new Swiper('.gallery-top-gorg', {
      effect: 'coverflow', 
      spaceBetween: 1,
      thumbs: {
        swiper: galleryThumbs
      },
      keyboard: {
        enabled: true,
      },
    });

    var galleryThumbs = new Swiper('.gallery-thumbs-robot', {
      spaceBetween: 0,
      slidesPerView: 4,
      freeMode: true,
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
    });
    var galleryTop = new Swiper('.gallery-top-robot', {
      effect: 'coverflow', 
      spaceBetween: 1,
      thumbs: {
        swiper: galleryThumbs
      },
      keyboard: {
        enabled: true,
      },
    });

    var galleryThumbs = new Swiper('.gallery-thumbs-pulpo', {
      spaceBetween: 0,
      slidesPerView: 4,
      freeMode: true,
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
    });
    var galleryTop = new Swiper('.gallery-top-pulpo', {
      effect: 'coverflow', 
      spaceBetween: 1,
      thumbs: {
        swiper: galleryThumbs
      },
      keyboard: {
        enabled: true,
      },
    });

    var galleryThumbs = new Swiper('.gallery-thumbs-tintin', {
      spaceBetween: 0,
      slidesPerView: 4,
      freeMode: true,
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
    });
    var galleryTop = new Swiper('.gallery-top-tintin', {
      effect: 'coverflow', 
      spaceBetween: 1,
      thumbs: {
        swiper: galleryThumbs
      },
      keyboard: {
        enabled: true,
      },
    });

    var galleryThumbs = new Swiper('.gallery-thumbs-gallopato', {
      spaceBetween: 0,
      slidesPerView: 4,
      freeMode: true,
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
    });
    var galleryTop = new Swiper('.gallery-top-gallopato', {
      effect: 'coverflow', 
      spaceBetween: 1,
      thumbs: {
        swiper: galleryThumbs
      },
      keyboard: {
        enabled: true,
      },
    });

    var galleryThumbs = new Swiper('.gallery-thumbs-dragon', {
      spaceBetween: 0,
      slidesPerView: 4,
      freeMode: true,
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
    });
    var galleryTop = new Swiper('.gallery-top-dragon', {
      effect: 'coverflow', 
      spaceBetween: 1,
      thumbs: {
        swiper: galleryThumbs
      },
      keyboard: {
        enabled: true,
      },
    });


    //manejo de los slides en blog
    $('#leercuento1').click(function(){
      swiper.slideTo(0);
    });
    $('#leercuento2').click(function(){
      swiper.slideTo(1);
    });
    $('#leercuento3').click(function(){
      swiper.slideTo(2);
    });
    $('#leercuento4').click(function(){
      swiper.slideTo(3);
    });
    $('#leercuento5').click(function(){
      swiper.slideTo(4);
    });
    $('#leercuento6').click(function(){
      swiper.slideTo(5);
    });

    $('#abrircuento1').click(function(){
      swiper.slideTo(0);
    });
    $('#abrircuento2').click(function(){
      swiper.slideTo(1);
    });
    $('#abrircuento3').click(function(){
      swiper.slideTo(2);
    });
    $('#abrircuento4').click(function(){
      swiper.slideTo(3);
    });
    $('#abrircuento5').click(function(){
      swiper.slideTo(4);
    });
    $('#abrircuento6').click(function(){
      swiper.slideTo(5);
    });

    $('.cuento-foto').click(function(){
      $('.cuentos').get(0).scrollIntoView();

      if($(this).hasClass('robot')){
          swiper.slideTo(0);
      }
      if($(this).hasClass('gorg')){
          swiper.slideTo(1);
      }
      if($(this).hasClass('pulpo')){
          swiper.slideTo(2);
      }
      if($(this).hasClass('tintin')){
          swiper.slideTo(3);
      }
      if($(this).hasClass('gallopato')){
          swiper.slideTo(4);
      }
      if($(this).hasClass('dragon')){
          swiper.slideTo(5);
      }
    });
    //popup de cuento

    $('.abrircuento').click(function(){
      $('.salir').css('display','block');
      $('.cuentos').get(0).scrollIntoView();
      $('.cuentos').addClass('cuentosfocus');
      $('body').css('overflow','hidden');
    });
    $('.salir').click(function(){
      $('.salir').css('display','none');
      $('.cerrarblog').get(0).scrollIntoView();
      $('.cuentos').removeClass('cuentosfocus');
      $('body').css('overflow','scroll');
    });

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

    //adivinanzas

    $('.adivinanza').click(function(){
      $(this).toggleClass('flipped');
      $(this).find('.ad-respuesta').toggleClass('encima');
      $(this).find('.ad-overlay').toggleClass('none');
      $(this).find('.ad-respuesta').toggleClass('visible');
    });
    //juegos
    var swiper = new Swiper('.swiper-container-juegos', {
        speed:800,
        autoplay:{
            delay:4000
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
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