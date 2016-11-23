
var generate = function(expression){
  return `<div class="expression col-xs-12 col-sm-6 col-md-2">
    <p class="ascii"><span>${expression}</span></p>
    <div>擦眼泪</div>
  </div>` 
}

var generateContent = function(){

  var expressions = [`w(ﾟДﾟ)w`, `(ノへ￣、)`, `(￣_,￣ )`, `ヽ(✿ﾟ▽ﾟ)ノ`, `（づ￣3￣）づ╭❤～`]

  var expressionsArrays = expressions.map((expression)=>{
    return generate(expression);
  });

  var expressionsHtml = expressionsArrays.join(' ');

  return `<div class="col-md-1"></div> ${expressionsHtml} <div class="col-md-1"></div>`
}


$(document).ready(function() {

  var a1 = generateContent()

  $(".popular .row1").html(a1)

	$("#navsad").click(function() {
    var top = $(".sad").offset().top
    $('html,body').animate({ scrollTop: top }, 'slow');
	});

	$("#navhappy").click(function() {
    $('html,body').animate({
      scrollTop: $(".happy").offset().top
    }, 'slow');
	});

	$("#navcute").click(function() {
    $('html,body').animate({
      scrollTop: $(".cute").offset().top
    }, 'slow');
	});

	$("#navangry").click(function() {
    $('html,body').animate({
        scrollTop: $(".angry").offset().top},
        'slow');
	});

	$("#navother").click(function() {
    $('html,body').animate({
        scrollTop: $(".others").offset().top},
        'slow');
	});

  $('.ascii span').on('mouseenter', function () {
      $(this).css('color', '#f39c12');
      $(this).parent('.ascii').css('margin-left', '-5px');
  });

  $('.ascii span').on('mouseout', function () {
      $(this).css('color', '');
      $(this).parent('.ascii').css('margin-left', '');
  });

  var clipboard = new Clipboard('.ascii span', {
      text: function (trigger) {
          $(trigger).css('color', '#40d47e');
          return $(trigger).html();
      }
  });

  clipboard.on('success', function (e) {
      setTimeout(function () {}, 800);
  });

});