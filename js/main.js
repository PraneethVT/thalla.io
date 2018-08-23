$(function() {
  /* Landing Page fade in */
  $("#landing_intro").fadeIn(600);
  $("#landing_name").fadeIn(600, function() {
  });
  
  
  // $("#landing_arrow_holder").click(function() {
    // $('html,body').animate({scrollTop: $("#about_me").offset().top}, 500, "swing");
  // })

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

  /* Image overlay animations */
  var thallaioImg = $("#thallaio_img");
  var thallaioOverlay = $("#thallaio_overlay");
  var upwardImg = $("#upward_img");
  var upwardOverlay = $("#upward_overlay");
  var lebotImg = $("#lebot_img");
  var lebotOverlay = $("#lebot_overlay");
  documentElement.on('scroll', function() {
    var rangethallaio = thallaioImg.offset().top - $(window).scrollTop();
    var rangeupward = upwardImg.offset().top - $(window).scrollTop();
    var rangelebot = lebotImg.offset().top - $(window).scrollTop();
    if (rangethallaio > 100 && rangethallaio < 350) {
      thallaioOverlay.addClass("project_overlay_on");
      thallaioImg.addClass("darken_image");
    } else {
      thallaioOverlay.removeClass("project_overlay_on");
      thallaioImg.removeClass("darken_image");
    }

    if (rangeupward > 100 && rangeupward < 350) {
      upwardOverlay.addClass("project_overlay_on");
      upwardImg.addClass("darken_image");
    } else {
      upwardOverlay.removeClass("project_overlay_on");
      upwardImg.removeClass("darken_image");
    }

    if (rangelebot > 100 && rangelebot < 350) {
      lebotOverlay.addClass("project_overlay_on");
      lebotImg.addClass("darken_image");
    } else {
      lebotOverlay.removeClass("project_overlay_on");
      lebotImg.removeClass("darken_image");
    }
  })
});