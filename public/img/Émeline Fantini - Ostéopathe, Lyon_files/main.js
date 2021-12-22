$(document).ready(function () {
  $(".hero > h1").css("color", "#FFE5E4");
  $(".hero__chevron").on("click", function () {
    $(".hero").slideToggle("slow");
  })
})