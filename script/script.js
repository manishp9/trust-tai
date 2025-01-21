$(document).ready(function () {
  new WOW().init();
});

$(".navbar-toggle").click(function (e) {
  e.preventDefault();
  $("header").toggleClass("active");
  $(".nav-item-box").slideToggle();
});

$(window).scroll(function () {
  if ($(this).scrollTop() > 20) {
    // You can adjust the scroll position threshold
    $("header").addClass("scrolled");
    $(".nav-item-box").slideUp();
    $("header").removeClass("active");
  } else {
    $("header").removeClass("scrolled");
  }
});

$(".input-form input").focus(function () {
  $(this).parents(".input-form").addClass("active");
});

$(".input-form input").blur(function () {
  var inputValue = $(this).val();
  if (inputValue == "") {
    $(this).removeClass("filled");
    $(this).parents(".input-form").removeClass("active");
  } else {
    $(this).addClass("filled");
  }
});

$(document).ready(function () {
  // Open the first item by default
  $(".services-accodian-item").first().find(".service-accodian-para").show();
  $(".services-accodian-item").first().addClass("active");

  $(".services-accodian-heading h4").on("click", function () {
    var parentItem = $(this).closest(".services-accodian-item");

    // Toggle the corresponding .service-accodian-para
    parentItem.find(".service-accodian-para").slideToggle();

    // Rotate the arrow image
    $(this).find("img").toggleClass("rotate");

    // Toggle 'active' class on the clicked item
    parentItem.toggleClass("active");

    // Close other open accordions
    $(".services-accodian-item")
      .not(parentItem)
      .find(".service-accodian-para")
      .slideUp();
    $(".services-accodian-item")
      .not(parentItem)
      .find("img")
      .removeClass("rotate");
    $(".services-accodian-item").not(parentItem).removeClass("active");
  });
});

$(document).ready(function () {
  // Open the first item by default
  $(".faq-item").first().find(".faq-para").show();
  $(".faq-item").first().find("i").addClass("rotate");
  $(".faq-item").first().addClass("active");

  $(".faq-item h6").on("click", function () {
    var parentItem = $(this).closest(".faq-item");

    // Toggle the corresponding .faq-para
    parentItem.find(".faq-para").slideToggle();

    // Rotate the arrow image
    $(this).find("i").toggleClass("rotate");

    // Toggle 'active' class on the clicked item
    parentItem.toggleClass("active");

    // Close other open accordions
    $(".faq-item").not(parentItem).find(".faq-para").slideUp();
    $(".faq-item").not(parentItem).find("i").removeClass("rotate");
    $(".faq-item").not(parentItem).removeClass("active");
  });
});
$(document).ready(function () {
  // Open the first item by default
  $(".why-acoodian-item").first().find(".why-acoodian-para").show();
  $(".why-acoodian-item").first().addClass("active");

  $(".why-acoodian-item h4").on("click", function () {
    var parentItem = $(this).closest(".why-acoodian-item");

    // Toggle the corresponding .why-acoodian-para
    parentItem.find(".why-acoodian-para").slideToggle();

    // Rotate the arrow image
    $(this).find("i").toggleClass("rotate");

    // Toggle 'active' class on the clicked item
    parentItem.toggleClass("active");

    // Close other open accordions
    $(".why-acoodian-item")
      .not(parentItem)
      .find(".why-acoodian-para")
      .slideUp();
    $(".why-acoodian-item").not(parentItem).removeClass("active");
  });
});

$("#currentYear").text(new Date().getFullYear());
