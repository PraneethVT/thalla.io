$(function() {
  $("#landing_pic").fadeIn(400, function() {
    $("#top").animate({top: "52%", opacity: "show"}, 200, function() {
      $("#line1").animate({width: 'toggle'}, 200);
      $("#line2").animate({width: "toggle"}, 200, function() {
        
        $("#bottom").animate({top: "54%", opacity: "show"}, 350, function() {
          $("#my_story").fadeIn(1000);
          $("#arrow_holder").fadeIn(1000);
        });
      });
    });  
  });
});