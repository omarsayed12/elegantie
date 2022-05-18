$('.autoplay').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  mobileFirst: true,
  rtl: true,
  arrows: false,
  responsive: [{
    breakpoint: 1200,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: false,
      dots: true
    }
  },
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        dots: true
      }
    },
    ,{
   breakpoint: 319,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        centerMode: false,
      }
  }]
});
$('.new').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  mobileFirst: true,
  rtl: true,
  arrows: false,
  responsive: [{
    breakpoint: 1200,
    settings: {
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows: false,
      dots: true
    }
  },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        dots: true
      }
    },
    ,{
   breakpoint: 767,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        centerMode: false,
      }
  },{
    breakpoint: 319,
       settings: {
         slidesToShow: 1,
         slidesToScroll: 1,
         arrows: false,
         dots: true,
         centerMode: false,
       }
   }]
});

$('.product-display').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  mobileFirst: true,
  rtl: true,
  arrows: false,
  dots:true
});

$('.shop').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  mobileFirst: true,
  rtl: true,
  arrows: false,
  responsive: [{
    breakpoint: 1200,
    settings: {
      slidesToShow: 5,
      slidesToScroll: 1,
      arrows: false,
      dots: true
    }
  },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        dots: true
      }
    },
    ,{
   breakpoint: 767,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        centerMode: false,
      }
    },{
    breakpoint: 480,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 1,
      arrows: false,
      dots: true,
      centerMode: false,
    }
    }, {
      breakpoint: 319,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        centerMode: false,
      }
    }]
});


$('.best-sell').slick({
  slidesToShow: 7,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  mobileFirst: true,
  rtl: true,
  arrows: true,
  responsive: [{
    breakpoint: 1353,
    settings: {
      slidesToShow: 7,
      slidesToScroll: 1,
      arrows: false,
      dots: true,
      arrows: true,
    }
  },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 1,
        arrows: false,
        dots: true
      }
    },
    ,{
   breakpoint: 991,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        centerMode: false,
      }
    },
    {
    breakpoint: 768,
    settings: {
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows: false,
      dots: true,
      centerMode: false,
    }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        centerMode: false,
      }
    },
    {
      breakpoint: 425,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        centerMode: false,
      }
    },
    {
      breakpoint: 319,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        centerMode: false,
      }
  }]
});

