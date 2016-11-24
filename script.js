// //I've updated the jQuery for popular only, 
// the rest sections are still coded in html

//content generation function
var generateContent = function(){
  var expressions = [[{
  	expression:`w(ﾟДﾟ)w`,
  	explanation:`啊啊`
  },{
  	expression:`(ノへ￣、)`,
  	explanation:`擦眼泪`
  },{
  	expression:`(￣_,￣ )`, 
  	explanation:`不屑`
  },{
  	expression:`ヽ(✿ﾟ▽ﾟ)ノ`, 
  	explanation:`好耶`
  },{
  	expression:`（づ￣3￣）づ╭❤～`, 
  	explanation:`亲亲`
  }],[{
  	expression:`(～￣(OO)￣)ブ`,
  	explanation:`猪头`
  },{
  	expression:`(* ￣3)(ε￣ *)`,
  	explanation:`啵啵`
  },{
  	expression:`(*￣rǒ￣)`, 
  	explanation:`挖鼻屎`
  },{
  	expression:`┗|｀O′|┛`, 
  	explanation:`嗷`
  },{
  	expression:`φ(≧ω≦*)♪`, 
  	explanation:`开熏`
  }],[{
  	expression:`(u‿ฺu✿ฺ)`,
  	explanation:`好滴`
  },{
  	expression:`o(*￣▽￣*)ブ`,
  	explanation:`哈喽`
  },{
  	expression:`♪(^∇^*)`, 
  	explanation:`啦啦`
  },{
  	expression:`o(*≧▽≦)ツ┏━┓`, 
  	explanation:`牌桌`
  },{
  	expression:`╰(*°▽°*)╯`, 
  	explanation:`惊喜`
  }]];
  var expressionsArrays=[];
  var a = ``; 
  for (i=0; i<expressions.length; i++) {
  	for (j=0; j<expressions[i].length; j++) {
   		expressionsArrays.push(`
   			<div class="expression col-xs-12 col-sm-6 col-md-2">
     			<p class="ascii"><span>${expressions[i][j].expression}</span></p>
     			<div>${expressions[i][j].explanation}</div>
   			</div>`);
  	}
  	var expressionHtml = expressionsArrays.join("");
  	a = a.concat(`<div class="row"><div class="col-md-1"></div> ${expressionHtml} <div class="col-md-1"></div></div>`); 
  	expressionsArrays = [];
  }
  return a; 
}


$(document).ready(function() {
//content generating for popular section
  var a1 = generateContent()

  $(".popular .popularjs").html(a1)
//navbar 

  // TODO: change the repetitive click events into a loop
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


//hover on content
  $('.ascii span').on('mouseenter', function () {
      $(this).css('color', '#f39c12');
      $(this).parent('.ascii').css('margin-left', '-5px');
  });

  $('.ascii span').on('mouseout', function () {
      $(this).css('color', '#373a3c');
      $(this).parent('.ascii').css('margin-left', '');
  });
//copy function by using clipboard
  var clipboard = new Clipboard('.ascii span', {
      text: function (trigger) {
          $(trigger).css('color', '#40d47e');
          return $(trigger).html();
      }
  });
//share function on twitter and facebook
  $("#twitter").click(function() {
  	var url='https://twitter.com/intent/tweet?text=' + encodeURIComponent("Please check out this funny website with us #");
  	window.open(url)
  });

  $("#facebook").click(function() {
  	var url="http://www.facebook.com/sharer/sharer.php?s=100&p[url]=" + encodeURIComponent("#");
  	window.open(url)
  });

});