
const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");
hamburger.addEventListener("click", function () {
  this.classList.toggle("active");
  menu.classList.toggle("active");
});

window.addEventListener("resize", function () {
  if (window.innerWidth > 782) {
    hamburger.classList.remove("active");
    menu.classList.remove("active");
  }
});

$('.auto-play').slick({
slidesToShow: 6,
autoplaySpeed: 2000,
autoplay: true,
responsive: [
    {
breakpoint: 1880,
settings: {
        slidesToShow: 6,
        slidesToScroll: 3,
        infinite: true,
        autoplaySpeed: 2000
      }
    },
    {
      breakpoint: 708,
      settings: {
      slidesToShow: 2,
      slidesToScroll: 2,
       autoplaySpeed: 2000
      }
    },
    {
      breakpoint: 599,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed: 2000
      }
    }
  ]
});