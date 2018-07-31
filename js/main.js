$(function() {
  /* Landing Page fade in */
   $("#landing_pic").fadeIn(400, function() {
    $("#landing_intro").animate({top: "52%", opacity: 1}, 300, function() {
      $("#landing_left_line").animate({width: 'toggle'}, 200);
      $("#landing_right_line").animate({width: "toggle"}, 200, function() {
        $("#landing_name").animate({top: "54%", opacity: "show"}, 400, function() {
          $("#landing_arrow_holder").animate({top: "88%", opacity: "show"}, 150)
        });
      });
    });  
   });
  $("#landing_arrow_holder").click(function() {
    $('html,body').animate({scrollTop: $("#about_me").offset().top}, 500, "swing");
  })

  /* Element scroll in */
  var documentElement = $(document);
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

  var thallaioImg = $("#thallaio_img");
  var thallaioOverlay = $("#thallaio_overlay");
  documentElement.on('scroll', function() {
    var range = thallaioImg.offset().top - $(window).scrollTop();
    console.log(range);
    if (range > 50 && range < 350) {
      // thallaioOverlay.animate({opacity: 1}, 150);
      thallaioOverlay.removeClass("project_overlay");
      thallaioOverlay.addClass("onMode");
      console.log('in range');
    } else {
      // thallaioOverlay.animate({opacity: 0}, 150);
      thallaioOverlay.removeClass("onMode");
      thallaioOverlay.addClass("project_overlay");
      console.log('out of range');
    }
  })


});