// V2 using .attr("class","_").  Can't seem to get the error message to show up the way I can with V1 (commented out below).
$(document).ready(function(){

  $('#citypix-form').submit(function(event){
    var city = $('#city-type').val();

    if(city === "New York" || city === "new york" || city ===  "NYC" || city === "nyc" || city === "New York City" || city === "new york city")  {
      $("body").attr("class", "nyc");
      $(".error-message").attr("class", "hidden");
    } else if (city === "Austin" || city ===  "austin" || city === "ATX" || city === "atx") {
      $("body").attr("class", "austin");
      $(".error-message").attr("class", "hidden");
    } else if (city === "Los Angeles" || city ===  "LA" || city === "L.A." || city === "la" || city === "l.a." || city === "Hollywood" || city === "hollywood" || city === "LAX" || city === "lax") {
      $("body").attr("class", "la");
      $(".error-message").attr("class", "hidden");
    } else if (city === "San Francisco" || city === "san francisco" || city === "SF" || city === "sf" || city === "Bay Area" || city === "bay area") {
      $("body").attr("class", "sf");
      $(".error-message").attr("class", "hidden");
    } else if (city === city === "Sydney" || city === "sydney" || city === "SYD" || city === "syd") {
      $("body").attr("class", "sydney");
      $(".error-message").attr("class", "hidden");
    } else {
      $("body").removeClass();
      $(".error-message").removeClass("hidden");
      console.log("No City Pix for this location.")
    }
    event.preventDefault();
  });

});



// V1 using .removeClass() and .addClass() before I read the technical specs. The error message shows up for this one.
// $(document).ready(function(){
//
//   $('#citypix-form').submit(function(event){
//     var city = $('#city-type').val();
//
//     if(city === "New York" || city === "new york" || city ===  "NYC" || city === "nyc" || city === "New York City" || city === "new york city")  {
//       $("body").removeClass().addClass("nyc");
//       $(".error-message").addClass("hidden");
//     } else if (city === "Austin" || city ===  "austin" || city === "ATX" || city === "atx") {
//       $("body").removeClass().addClass("austin");
//       $(".error-message").addClass("hidden");
//     } else if (city === "Los Angeles" || city ===  "LA" || city === "L.A." || city === "la" || city === "l.a." || city === "Hollywood" || city === "hollywood" || city === "LAX" || city === "lax") {
//       $("body").removeClass().addClass("la");
//       $(".error-message").addClass("hidden");
//     } else if (city === "San Francisco" || city === "san francisco" || city === "SF" || city === "sf" || city === "Bay Area" || city === "bay area") {
//       $("body").removeClass().addClass("sf");
//       $(".error-message").addClass("hidden");
//     } else if (city === city === "Sydney" || city === "sydney" || city === "SYD" || city === "syd") {
//       $("body").removeClass().addClass("sydney");
//       $(".error-message").addClass("hidden");
//     } else {
//       $("body").removeClass();
//       $(".error-message").removeClass("hidden");
//     }
//     event.preventDefault();
//   });
//
// });
