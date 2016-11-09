$(document).ready(function(){





  $(".right-text-header a").click(function(){
    $(".ui.right.settings,.ui.right.messages").removeClass("visible");
    $(".pusher").removeClass("dimmed");
  });


  $( ".st-invest-btn" ).click(function() {
    $(".m-share").toggleClass('open');
  });
  $( " .js-social" ).click(function() {
    $(".m-share-login").toggleClass('open');
  });
  $( ".m-share-header a,.close-share" ).click(function() {
    $(".m-share,.m-share-social,.m-share-login").removeClass('open');
  });


  $('.ui.dropdown').dropdown({
    on: 'hover'
  });;


  $('.mobile-btn').click(function() {
    $('.mobile-menu.sidebar')
    .sidebar('setting', 'transition', 'overlay')
    .sidebar('toggle')
    ;
  });

  $('.js-comment').click(function() {
    $('.messages.sidebar')
    .sidebar('setting', 'transition', 'overlay')
    .sidebar('toggle')
    ;
  });

  $('.js-settings').click(function() {
    $('.settings.sidebar')
    .sidebar('setting', 'transition', 'overlay')
    .sidebar('toggle')
    ;
  });


// $('.vertical.menu.sidebar').first()
//   .sidebar('attach events', '.mobile-btn', 'show')
// ;
// $('.open.button')
//   .removeClass('disabled')
// ;



$('#context1 .menu .item')
.tab({
  context: $('#context1')
})
;
$('#context2 .menu .item')
.tab({
    // special keyword works same as above
    context: 'parent'
  })
;
$('#context3 .menu .item')
.tab({
    // special keyword works same as above
    context: 'parent'
  })
;
$('#context4 .menu .item')
.tab({
    // special keyword works same as above
    context: 'parent'
  })
;


$('#government').progress({
  percent: 14
});
$('#corporate').progress({
  percent: 17
});
$('#cap').progress({
  percent: 51
});
$('#equities').progress({
  percent: 22
});
$('#smallCap').progress({
  percent: 19
});
$('#marketing').progress({
  percent: 79
});

function attachUISlider (el, opt){
  if (el != null){
    noUiSlider.create(el, opt);
  }
}

attachUISlider(
  document.getElementById('tap'),
  {
    start: 40,
    behaviour: 'tap',
    connect: 'upper',
    range: {
      'min':  20,
      'max':  80
    }
  }
  );

attachUISlider(
  document.getElementById('tap2'),
  {
    start: 60,
    behaviour: 'tap2',
    connect: 'upper',
    range: {
      'min':  20,
      'max':  80
    }
  }
  );
attachUISlider(
  document.getElementById('tap3'),
  {
    start: 52,
    behaviour: 'tap3',
    connect: 'upper',
    range: {
      'min':  20,
      'max':  80
    } 
  }
  );

attachUISlider(
  document.getElementById('tap4'),
  {
    start: 32,
    behaviour: 'tap4',
    connect: 'upper',
    range: {
      'min':  20,
      'max':  80
    }
  }
  );

attachUISlider(
  document.getElementById('tap5'),
  {
    start: 72,
    behaviour: 'tap5',
    connect: 'upper',
    range: {
      'min':  20,
      'max':  80
    }
  }
  );

attachUISlider(
  document.getElementById('tap6'),
  {
    start: 35,
    behaviour: 'tap6',
    connect: 'upper',
    range: {
      'min':  20,
      'max':  80
    }
  }
  );




$('.see-below').click(function() {
  console.log("click");
  $(this).removeAttr("href");
  $("html, body").animate({ scrollTop: $(".view-portfolio").offset().top}, 1000);
});




$( ".right.menu .ui.dropdown.item" )
.mouseenter(function() {
  $(".ui.stackable.inverted.menu .right.menu").addClass('has-js');
})
.mouseleave(function() {
  $(".ui.stackable.inverted.menu .right.menu").removeClass('has-js');
});


var $width = $('.ui.container');
var margL = $width.css('margin-left');
$('.section-header').width(margL);



$(".slides").poposlides({
  auto:false,
  nav:true,
  playspeed:3500,
  fadespeed:500,
  loop:true,
  pagination:true,
  pagecenter:true,
  prev:".prev",
  next:".next"
});

$('.ui.sticky')
  .sticky({
    context: 'header'
  })
;

});

$( window ).resize(function() {

  var $width = $('.ui.container');
  var margL = $width.css('margin-left');
  $('.section-header').width(margL);  

});
$(window).scroll(function(){

});