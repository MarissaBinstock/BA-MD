// $(document).ready(function(){
// 	console.log("Hello World");
// 	$("section").hide();
// })

$(document).ready(function(){
	console.log("working");
  // $(".message").click(function(){
  // 	console.log("working2")
  //   	alert('Thank you!');
  //   });
  // $(".about-us img").hide();
  // $("h4").click(function() {
  // 	$(".about-us img").fadeIn("slow")
  // })

  $("button").click(function() {
  	$("map").toggle(1000);
  });

  $('select').on('change', function(){
    var option = $(this).val();
    console.log(option);
    $("html, body").animate({scrollTop: $('#'+option).offset().top}, 1000);
  });

  	
});



