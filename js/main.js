$(function() {
  /* Landing Page fade in */
  $("#landing_intro").fadeIn(500);
  $("#landing_name").fadeIn(500, function() {
    $("#landing_arrow").animate({opacity: 1}, 500);
  });
  
  
  $("#landing_arrow_holder").click(function() {
    $('html,body').animate({scrollTop: $("#about_me").offset().top}, 500, "swing");
  })

  /* Element scroll in */
  /* Default page wise */
  ScrollReveal().reveal('.fadein_with_scroll', 
  {
    distance: "2em",
    origin: "bottom",
    viewFactor: "0.1"
  });

  /* About Me */
  ScrollReveal().reveal('.about_me_header', 
  {
    distance: "2em",
    origin: "right",
    viewFactor: "0.9"
  });
  ScrollReveal().reveal('#about_me_header_first', 
  {
    distance: "2em",
    origin: "left",
    viewFactor: "0.9"
  });
  
  ScrollReveal().reveal('#about_me_header_last', 
  {
    distance: "2em",
    origin: "left",
    viewFactor: "0.9"
  });

  /* Projects */
  ScrollReveal().reveal('#projects_header', 
  {
    distance: "2em",
    origin: "left",
    viewFactor: "0.9"
  });

  /* Experiences */
  ScrollReveal().reveal('#experiences_header', 
  {
    distance: "1em",
    origin: "bottom",
    viewFactor: "0.9"
  });

  ScrollReveal().reveal('#experiences_line', 
  {
    distance: "1em",
    origin: "bottom",
    viewFactor: "0.9"
  });

  ScrollReveal().reveal('.experience_img', 
  {
    distance: "2em",
    origin: "bottom",
    viewFactor: "0.3"
  });

  ScrollReveal().reveal('.experience_text_container', 
  {
    distance: "2em",
    origin: "bottom",
    viewFactor: "0.3"
  });
  /* Footer */
  ScrollReveal().reveal('#footer_message', 
  {
    distance: "1em",
    origin: "bottom",
    viewFactor: "0.5"
  });
  ScrollReveal().reveal('#footer_email', 
  {
    distance: "1em",
    origin: "bottom",
    viewFactor: "0.5"
  });
  ScrollReveal().reveal('#footer_copyright', 
  {
    distance: "1em",
    origin: "bottom",
    viewFactor: "0.5"
  });








  /* Project image overlay animations */
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