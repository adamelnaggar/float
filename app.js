var base = '';
var weight = '';
var unit = '';

  // if (document.getElementById('beginner').checked) {
  //   skills = document.getElementById('beginner').value;
  // }

function calculator(input) {
  unit = document.getElementById('weightunit').value;
  weight = document.getElementById('weight').value;
  if (unit == "lbs") {
    weight = weight * 0.453592;
  }
  base = weight/2.6666666;
  if (document.getElementById('beginner').checked) {
    base+=8;
  }
  else if (document.getElementById('expert').checked) {
    base-=2;
  }
  if (document.getElementById('pumping').checked) {
    base-=1;
  }
  else if (document.getElementById('mush').checked) {
    base+=5;
  }
  else if (document.getElementById('everything').checked) {
    base+=1;
  }
  if (document.getElementById('weekly').checked) {
    base+=1;
  }
  else if (document.getElementById('monthly').checked) {
    base+=2;
  }
  else if (document.getElementById('nowandthen').checked) {
    base+=5;
  }
  base = Math.round(base);
  $( ".tagline" ).css("margin-top", "0");
  $( ".float" ).css("margin-top", "0");
  $(".float").html(base+" litres");
  $(".tagline").html('is your ideal volume. <a id="tweet"><i class="fa fa-twitter" aria-hidden="true"></i></a><br><br><a href="#" id="aboutlin"><span id="aboutlink">About</span></a>');
  $(".inputbox").fadeOut(750);
  setTimeout(function(){
    $( ".tagline" ).fadeIn(750);
  $( ".float" ).fadeIn(750);
},750);
  
$("#aboutlin").on('click', function() {
  $(".about").fadeIn(750);
});

$(".close").on('click', function() {
  $(".about").fadeOut(750);
});

$("#tweet").on('click', function() {
  window.location = 'http://twitter.com/intent/tweet?text=Hmm, looks like I need '+base+' litres of surfboard volume. automatecutback.co.uk/float via @adamelnaggar_';
});
}

$( document ).ready(function(){

$("#tweet").on('click', function() {
  window.location = 'http://twitter.com/intent/tweet?text=I just used float, a surfboard volume calculator automatecutback.co.uk/float via @adamelnaggar_';
});

$( "#begin" ).click(function() {
  $( "#begin" ).animate({
  	marginTop: "70vh",
  }, 750);
  $( ".chain" ).animate({
  	height: "70vh",
  }, 750);
  setTimeout(function(){
    if ($(".moonwrapper").css('opacity')=='1') {
        $( ".tagline" ).css("color", "#4F5D6D");
    }
  $( ".float" ).animate({
  	marginTop: "70vh",
  }, 750);
  $( ".tagline" ).animate({
  	marginTop: "70vh",
  }, 750);
  $( ".chain" ).animate({
  	marginTop:"70vh"
  }, 750);
},750);
  setTimeout(function(){
    $( ".tagline" ).css("color", "#cddce4");
  	 	$("#begin").hide();
	$(".float").hide();
	$(".tagline").hide();
	$(".chain").hide();
	$(".inputbox").fadeIn(1000);
},1501);
});



});