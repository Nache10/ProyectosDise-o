$(".rotate").textrotator({
    animation: "dissolve", //fade, flip, flipUp, flipCube, flipCubeUp and spin.
    separator: ",", 
    speed: 10000 
});
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

$('.intro-span').hover(function(){
    $('.intro-button').css('color','#1d1918');
},function(){
    $('.intro-button').css('color','#ebeff0');
});

$('.models-item').hover(function(){
    $(this).find('.models-item-pic').addClass('animodelspic');
    $(this).find('.models-item-content').find('.models-item-content-title').addClass('animodels');
},function(){
    $(this).find('.models-item-pic').removeClass('animodelspic');
    $(this).find('.models-item-content').find('.models-item-content-title').removeClass('animodels');
});

$('.mi2').hover(function(){
    $(this).find('.models-item-content').find('.ct2').addClass('animodels2');
},function(){
    $(this).find('.models-item-content').find('.ct2').removeClass('animodels2');
});

$('.pr1').hover(
    function() {
        $('.rosa').addClass('prhover');
        $('.prjs').removeClass('base');
    }, function() {
        $('.rosa').removeClass('prhover');
        $('.prjs').addClass('base');
    }
);
$('.pr2').hover(
    function() {
        $('.rosa2').addClass('prhover');
        $('.prjs2').removeClass('base');
    }, function() {
        $('.rosa2').removeClass('prhover');
        $('.prjs2').addClass('base');
    }
);
$('.pr3').hover(
    function() {
        $('.rosa3').addClass('prhover');
        $('.prjs3').removeClass('base');
    }, function() {
        $('.rosa3').removeClass('prhover');
        $('.prjs3').addClass('base');
    }
);
$('.pr4').hover(
    function() {
        $('.rosa4').addClass('prhover');
        $('.prjs4').removeClass('base');
    }, function() {
        $('.rosa4').removeClass('prhover');
        $('.prjs4').addClass('base');
    }
);

$('.linkjs').hover(
    function() {
        $(this).addClass('link');
    }, function() {
        $(this).removeClass('link');
    }
);

//MANEJO SCROLL REVEAL
ScrollReveal().reveal('.gallery-pic', {delay:100 });
ScrollReveal().reveal('.esp-pic', {delay:150,distance:'200px',origin:'left' });
ScrollReveal().reveal('.pic-inv', {delay:150,distance:'200px',origin:'right' });
ScrollReveal().reveal('.esp-text', {delay:150,distance:'200px',origin:'right' });
ScrollReveal().reveal('.text-inv', {delay:150,distance:'200px',origin:'left' });
ScrollReveal().reveal('.banner1', {delay:150,distance:'200px',origin:'top',reset:true });
ScrollReveal().reveal('.banner2', {delay:150,distance:'200px',origin:'bottom',reset:true });
ScrollReveal().reveal('.banner3', {delay:150,distance:'200px',origin:'top',reset:true });
ScrollReveal().reveal('.banner4', {delay:150,distance:'200px',origin:'bottom',reset:true });
ScrollReveal().reveal('.banner5', {delay:150,distance:'200px',origin:'top',reset:true });