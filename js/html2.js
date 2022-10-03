// ドロップダウンメニュー
//.menuをhoverした場合
$(".drop-btn").hover(function(){
  //.dropdown-menuをslideDown
  $(".sub-menu:not(:animated)", this).slideDown(200);
  //hoverが外れた場合
    }, function(){
  //.dropdown-menuをslideUp
  $(".sub-menu",this).hide(10);
});

$(function(){
  $('.ham-btn').click(function(){
   $(this).toggleClass('active');
   $('.hnav').slideToggle(230); 
   });
});


$('.hdrop-btn1').hover(
  function(){
   $('.hsub-menu1').slideDown(230);
  },
  function(){
   $('.hsub-menu1').hide();
});

$('.hdrop-btn2').hover(
  function(){
   $('.hsub-menu2').slideDown(230);
  },
  function(){
   $('.hsub-menu2').hide();
});

$('.hdrop-btn3').hover(
  function(){
   $('.hsub-menu3').slideDown(230);
  },
  function(){
   $('.hsub-menu3').hide();
});

$('.hdrop-btn4').hover(
  function(){
   $('.hsub-menu4').slideDown(230);
  },
  function(){
   $('.hsub-menu4').hide();
});

$('.hdrop-btn5').hover(
  function(){
   $('.hsub-menu5').slideDown(230);
  },
  function(){
   $('.hsub-menu5').hide();
});

$('.hdrop-btn6').hover(
  function(){
   $('.hsub-menu6').slideDown(230);
  },
  function(){
   $('.hsub-menu6').hide();
});


$('.hdrop-btn > a::after').hover(
  function(){
   $(this).addClass('.none');
  },
  function(){
   $(this).removeClass('.none');
 });

$(window).on('resize', function () { 
  　if (window.matchMedia('(min-width:768px)').matches) { 
    $(".hnav").slideUp(200);
    $('.ham-btn').removeClass('active');
  } 
}
);
