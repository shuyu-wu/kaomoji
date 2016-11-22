$(document).ready(function() {
	
	$("#navsad").click(function() {
    $('html,body').animate({
        scrollTop: $(".sad").offset().top},
        'slow');
	});

	$("#navhappy").click(function() {
    $('html,body').animate({
        scrollTop: $(".happy").offset().top},
        'slow');
	});

	$("#navcute").click(function() {
    $('html,body').animate({
        scrollTop: $(".cute").offset().top},
        'slow');
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