window.onload = function () {

  $(function () {
    $("#navbar").load("nav.html");
  });

  $(".mapping-project").click(function () {
    window.open($(this).find("a").attr("href"));
    return false;
  });

  $(".project").click(function () {
    window.location = $(this).find("a").attr("href");
    return false;
  });

  $(function () {
    $(document).scroll(function () {
      var $nav = $(".navbar");
      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height() / 2);
    });
  });

}