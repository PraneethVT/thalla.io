$(function() {
  /* Landing Page fade in */
   $("#landing_pic").fadeIn(400, function() {
    $("#landing_intro").animate({top: "52%", opacity: "show"}, 150, function() {
      $("#landing_left_line").animate({width: 'toggle'}, 150);
      $("#landing_right_line").animate({width: "toggle"}, 150, function() {
        $("#landing_name").animate({top: "54%", opacity: "show"}, 400, function() {
          $("#landing_arrow_holder").animate({top: "88%", opacity: "show"}, 150)
        });
      });
    });  
   });
  $("#landing_arrow_holder").click(function() {
    $('html,body').animate({scrollTop: $("#about_me").offset().top}, 500, "swing");
  })


  var documentElement = $(document);
  //var aboutMeHeader = $("#about_me_header");
 /* documentElement.on('scroll', function() {
    console.log("About Me Header Top: " + aboutMeHeader.offset().top);
    console.log("Document Top: " + documentElement.scrollTop());
    console.log("Window height: " + $(window).height());
    var answer = (aboutMeHeader.offset().top - documentElement.scrollTop()) / $(window).height();
    console.log("Answer: " + answer);

    if (answer > 0 && answer < 0.85) {
      $("#about_me_header").fadeTo(1000, 1);
    }
  
  });*/

  var fadeInScrollElement = $(".fadein_with_scroll");
  documentElement.on('scroll', function() {
    fadeInScrollElement.each(function() {
      var $this = $(this);
      var answer = ($this.offset().top - documentElement.scrollTop()) / $(window).height();

      if (answer > 0 && answer < 0.9) {
        $this.animate({marginTop: 0, opacity: 1}, 400);
      }
    })
  })
  

  /* Projects Section overlay animations */
  $("#thallaio_img").click(function() {
    $("#thallaio_overlay").toggle("scale");
  })
  $("#thallaio_img").mouseleave(function() {
    $("#thallaio_overlay").toggle("scale");
  });


  $("#upward_img").click(function() {
    $("#upward_overlay").animate({opacity: "show"}, 400);
  })
  $("#upward_img").mouseleave(function() {
    $("#upward_overlay").animate({opacity: "hide"}, 400);
  });


  $("#lebot_img").click(function() {
    $("#lebot_overlay").animate({opacity: "show"}, 400);
  })
  $("#lebot_img").mouseleave(function() {
    $("#lebot_overlay").animate({opacity: "hide"}, 400);
  });

});