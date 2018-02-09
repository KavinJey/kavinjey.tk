$(document).ready(function() {
    // all custom jQuery will go here
    $('person').hover(
      function(){
      // hover code
      console.log("hello");
      $('rectangle').css('opacity', "1");
  

      console.log("yes");

   }, function(){
      // unhover code
      $('rectangle').css('opacity', "0");




   }
);

});
