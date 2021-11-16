
    //tarjetas hover
    $('.precio-item').hover(function(){
        $(this).find('.precio-item-titulo').css('opacity','1');
        $(this).find('.precio-item-descripcion').css('opacity','1');
    },function(){
        $(this).find('.precio-item-titulo').css('opacity','0');
        $(this).find('.precio-item-descripcion').css('opacity','0');
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
    //apuntes descarga
    $('.curso>*').click(function(e){
      e.preventDefault();
      window.location.href = "apuntes/apuntes.txt";
    });
    //cambio de video
    $('.vid1').click(function(){
      $('iframe').attr('src','https://www.youtube.com/embed/Ps54eXe8YHY');
    });
    $('.vid2').click(function(){
      $('iframe').attr('src','https://www.youtube.com/embed/9JBDGNwfSYU');
    });
    $('.vid3').click(function(){
      $('iframe').attr('src','https://www.youtube.com/embed/NOpzysr0PJQ');
    });