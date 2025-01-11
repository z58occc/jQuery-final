$(document).ready(function () {
  $(".dropdown").click(function (e) {
    e.preventDefault();
    $(this).toggleClass("active");
    $(this).siblings(".dropdown-open").slideToggle();
  });

  $(".top-btn").click(function (e) {
    e.preventDefault();
    $("html,body").animate(
      {
        scrollTop: 0,
      },
      100
    );
  });
});
