// AOS JS
AOS.init();

// Owl Carousel JS
$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 30,
  nav: true,
  navText: ["PREV", "NEXT"],
  dots: false,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 5,
    },
  },
});

// Lightgallery JS
lightGallery(document.getElementById("anchor-tag"));
