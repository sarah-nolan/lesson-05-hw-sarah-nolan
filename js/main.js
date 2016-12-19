$(document).ready(function(){

  $('#citypix-form').submit(function(event){
    var city = $('#city-type').val();

    if(city === "New York" || city === "new york" || city ===  "NYC" || city === "nyc" || city === "New York City" || city === "new york city")  {
      $("body").removeClass().addClass("nyc");
      $(".error-message").addClass("hidden");
    } else if (city === "Austin" || city ===  "austin" || city === "ATX" || city === "atx") {
      $("body").removeClass().addClass("austin");
      $(".error-message").addClass("hidden");
    } else if (city === "Los Angeles" || city ===  "LA" || city === "L.A." || city === "la" || city === "l.a." || city === "Hollywood" || city === "hollywood" || city === "LAX" || city === "lax") {
      $("body").removeClass().addClass("la");
      $(".error-message").addClass("hidden");
    } else if (city === "San Francisco" || city === "san francisco" || city === "SF" || city === "sf" || city === "Bay Area" || city === "bay area") {
      $("body").removeClass().addClass("sf");
      $(".error-message").addClass("hidden");
    } else if (city === city === "Sydney" || city === "sydney" || city === "SYD" || city === "syd") {
      $("body").removeClass().addClass("sydney");
      $(".error-message").addClass("hidden");
    } else {
      $("body").removeClass();
      $(".error-message").removeClass("hidden");
    }
    event.preventDefault();
  });

});
