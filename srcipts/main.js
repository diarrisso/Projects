$(".coreleus-menu_hamburger").click(function () {
  $(this).toggleClass("is-active");
  $(".coreleus-menu_nav").toggle('.slideshow_shown');
  $('.remove').removeClass('.coreleus-menu_nav');

});

$('.remove').click(function () {
  $(".coreleus-menu_nav").css("display", 'none');
  $('.coreleus-menu_hamburger').removeClass("is-active");

});

function services_toggle() {
  var slideshow_normal = $("#service_slideshow_normal");

  if (slideshow_normal.hasClass("slideshow_shown")) {
    //Ausblenden Normal; Einblenden Large;
    $("#service_slideshow_normal").removeClass("slideshow_shown");
    $("#service_slideshow_normal").addClass("slideshow_hidden");
    $("#service_slideshow_large").addClass("slideshow_shown");
    $("#service_slideshow_large").removeClass("slideshow_hidden");
  } else {
    //Einblenden Normal; Ausblenden Large;
    $("#service_slideshow_normal").addClass("slideshow_shown");
    $("#service_slideshow_normal").removeClass("slideshow_hidden");
    $("#service_slideshow_large").removeClass("slideshow_shown");
    $("#service_slideshow_large").addClass("slideshow_hidden");
  }

}

function team_toggle() {

  var team_slideshow_normal = $("#team_slideshow_normal");
  if (team_slideshow_normal.hasClass("slideshow_shown")) {
    //Ausblenden Normal, Einblenden Large ;


    $("#team_slideshow_normal").removeClass("slideshow_shown");
    $("#team_slideshow_normal").addClass("slideshow_hidden");
    $("#team_slideshow_large").addClass("slideshow_shown");
    $("#team_slideshow_large").removeClass("slideshow_hidden");
  } else
  //Einblenden Normal; Ausblenden Large;
  {
    $("#team_slideshow_normal").addClass("slideshow_shown");
    $("#team_slideshow_normal").removeClass("slideshow_hidden");
    $("#team_slideshow_large").removeClass("slideshow_shown");
    $("#team_slideshow_large").addClass("slideshow_hidden");
  }


}

//coreleus Footer normal 

$("#impressum").click(function () {

  $("#impressum_slideshow_normal").removeClass("slideshow_show");
  $("#impressum_slideshow_normal").addClass("slideshow_hidden");
  $("#impressum_slideshow_large").removeClass("slideshow_hidden");
  $("#impressum_slideshow_large").addClass("slideshow_shown");
  $("#impressum_slideshow_normal").css("display", "none");
  $("#impressum_slideshow_large").css("display", "block");
});

// coreleus Impressum footer 

$("#coreleus-impressum").click(function () {

  $("#impressum_slideschow_large").removeClass("slideshow_show")
  $("#impressum_slideshow_large").addClass("slideshow_hidden");
  $("#impressum_slideshow_normal").removeClass("slideshow_hidden");
  $("#impressum_slideshow_normal").addClass("slideshow_shown");
  $("#impressum_slideshow_large").css("display", "none");
  $("#impressum_slideshow_normal").css("display", "block");

});
// service slideshow
const service_slideshow_normal = {
  type: "carousel",
  perView: 3,
  breakpoints: {
    1200: {
      perView: 1
    },
    800: {
      perView: 1
    }
  }
};

new Glide('.service_slideshow_normal', service_slideshow_normal).mount()

var service_slideshow_large = new Glide('.service_slideshow_large', {
  type: "carousel",
  perView: 1,

}).mount()

$(".service-card-click").click(function (obj) {
  var slideNum = $(this).attr("data-slide");
  services_toggle();

  service_slideshow_large.go("=" + slideNum);
  console.log(service_slideshow_large);

});


service_slideshow_large.on("move.after", () => {
  var i = service_slideshow_large.index
  console.log(service_slideshow_large.index);
  if (i == 3) {
    $("#service_slideshow_normal").addClass("slideshow_shown");
    $("#service_slideshow_normal").removeClass("slideshow_hidden");
    $("#service_slideshow_large").removeClass("slideshow_shown");
    $("#service_slideshow_large").addClass("slideshow_hidden");

  }

});

//team slideshow 

var team_slideshow_normal = {
  type: "carousel",
  perView: 2,
  breakpoints: {
    1024: {
      perView: 1
    },
    800: {
      perView: 1
    }
  }
};
new Glide('.team_slideshow_normal', team_slideshow_normal).mount()

var team_slideshow_large = new Glide('.team_slideshow_large', {
  type: "carousel",
  perView: 1,
  1024: {
    perView: 1
  },
  800: {
    perView: 1
  }
}).mount()

$(".team-card-click").click(function (obj) {
  var slideindex = $(this).attr("data-slide");
  team_toggle();

  team_slideshow_large.go("=" + slideindex);

});

team_slideshow_large.on("move.after ", () => {
  var i = team_slideshow_large.index
  console.log(service_slideshow_large.index);
  if (i == 2) {
    $("#team_slideshow_normal").addClass("slideshow_shown");
    $("#team_slideshow_normal").removeClass("slideshow_hidden");
    $("#team_slideshow_large").removeClass("slideshow_shown");
    $("#team_slideshow_large").addClass("slideshow_hidden");

  }

});

// close modale 

$('.close').click(function () {
  $("#team_slideshow_normal").addClass("slideshow_shown");
  $("#team_slideshow_normal").removeClass("slideshow_hidden");
  $("#team_slideshow_large").removeClass("slideshow_shown");
  $("#team_slideshow_large").addClass("slideshow_hidden");
});

//new Glide('.impressionen_slideshow', impressionen_slideshow).mount()
var impressionen_slideshow = new Glide('.impressionen_slideshow', {
  type: "carousel",
  perView: 1,
  breakpoints: {
    1024: {
      perView: 1
    },
    800: {
      perView: 1
    }
  }
}).mount()