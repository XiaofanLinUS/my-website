var $header = $('header');
var imgSrc = ['./img/heading.jpg' , './img/e.jpg', './img/s.jpg'];
var index = 0;
var interval = 2500;
var bp = $header.css("background-image");
setInterval(function() {
    bp = bp.substring(bp.indexOf(",")+1);
    index = (index + 1) % imgSrc.length;
    var backProp = bp  +  ", url('"
	   + imgSrc[index] + "')";
    $header.css("background-image", backProp);
}, interval);
