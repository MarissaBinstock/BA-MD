

$(document).ready(function(){
	console.log("working");

// makes map appear
  $("button").click(function() {
  	$("map").toggle(1000);
    $("html, body").animate({scrollTop: $('.footer').offset().top}, 1000);
  console.log($('#blog').offset().top);

  });

// smoothscroll
  $('.scroll').on('click', function(e){
    e.preventDefault();
    var option = $(this).attr('href');
    console.log(option);
    $("html, body").animate({ scrollTop: $(option).offset().top-30}, 1000);
        });

// Form Validation

$('#myForm').validate ({
  rules:{
    name:{
      required: true,
    },
    email:{
      required: true,
      email: true
    }
  },
  messages:{
    name:"Please enter a valid name",
    email:"Please enter a valid email"
  }

})
     
});




// small-nav menu changes to select dropdown
  // $('select').on('change', function(){
  //   var option = $(this).val();
  //   console.log(option);
  //   $("html, body").animate({scrollTop: $('#'+option).offset().top}, 1000);
  // });