    ScrollReveal().reveal('.titulo', {delay:1500,duration:1500});   
    ScrollReveal().reveal('.mi1', {delay:250,distance:'1000px',origin:'top'});
    ScrollReveal().reveal('.mi2', {delay:350,distance:'2000px',origin:'top'});
    ScrollReveal().reveal('.mi3', {delay:650,distance:'3000px',origin:'top'});
    ScrollReveal().reveal('.mi4', {delay:350,distance:'2000px',origin:'top'});
    ScrollReveal().reveal('.mi5', {delay:250,distance:'1000px',origin:'top'});
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
    $('.mosaicofooter-item').click(function(){
        $(location).attr('href','gallery.html');
    });
   
