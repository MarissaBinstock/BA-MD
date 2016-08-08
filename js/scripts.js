

$(document).ready(function(){
	console.log("working");

// makes map appear
  $("button").click(function() {
  	$("map").toggle(1000);
    $("html, body").animate({scrollTop: $('map').offset().top+500}, 1000);
  });

// small-nav menu changes to select dropdown
  $('select').on('change', function(){
    var option = $(this).val();
    console.log(option);
    $("html, body").animate({scrollTop: $('#'+option).offset().top}, 1000);
  });

// smoothscroll
  $('.scroll').on('click', function(e){
    e.preventDefault();
    var option = $(this).attr('href');
    console.log(option);
    $("html, body").animate({ scrollTop: $(option).offset().top-30}, 1000);
        });

 // to make the map scroll to the bottom of the page
     $('#bottom').on("click", function () {
        $('html, body').animate({ scrollTop: $(document).height() }, 1200);
                return false;
      });	
});

