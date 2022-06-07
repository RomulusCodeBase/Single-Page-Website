window.onload = function() {
  AOS.init();
};

$('#header-container').slick({
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  autoplay: true,
  autoplaySpeed: 2000
});

