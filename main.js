$(function() {
  $("#landing_pic").fadeIn(400, function() {
    $("#landing_text_top").animate({top: "52%", opacity: "show"}, 150, function() {
      $("#left_line").animate({width: 'toggle'}, 150);
      $("#right_line").animate({width: "toggle"}, 150, function() {
        
        $("#landing_text_bottom").animate({top: "54%", opacity: "show"}, 400, function() {
          $("#my_story").fadeIn(1000);
          // $("#arrow_holder").fadeIn(1000);
          $("#arrow_holder").animate({top: "88%", opacity: "show"}, 150)
        });
      });
    });  
  });

  $("#arrow_holder").click(function() {
    $('html,body').animate({scrollTop: $("#about_me").offset().top}, 500, "swing");
  })
  
  $("#thallaio_img").click(function() {
    $("#thallaio_text").animate({opacity: "show"}, 400);
    $("#thallaio_desc").animate({opacity: "show"}, 400);
    $("#thallaio_line").animate({opacity: "show"}, 400);
  })

  $("#upward_img").click(function() {
    $("#upward_text").animate({opacity: "show"}, 400);
    $("#upward_desc").animate({opacity: "show"}, 400);
    $("#upward_line").animate({opacity: "show"}, 400);
  })

  $("#lebot_img").click(function() {
    $("#lebot_text").animate({opacity: "show"}, 400);
    $("#lebot_desc").animate({opacity: "show"}, 400);
    $("#lebot_line").animate({opacity: "show"}, 400);
  })

  $("#thallaio_img").mouseleave(function() {
    $("#thallaio_text").animate({opacity: "hide"}, 400);
    $("#thallaio_desc").animate({opacity: "hide"}, 400);
    $("#thallaio_line").animate({opacity: "hide"}, 400);
  });

  $("#upward_img").mouseleave(function() {
    $("#upward_text").animate({opacity: "hide"}, 400);
    $("#upward_desc").animate({opacity: "hide"}, 400);
    $("#upward_line").animate({opacity: "hide"}, 400);  
  });
  $("#lebot_img").mouseleave(function() {
    $("#lebot_text").animate({opacity: "hide"}, 400);
    $("#lebot_desc").animate({opacity: "hide"}, 400);
    $("#lebot_line").animate({opacity: "hide"}, 400);
  });

});