jQuery(function(){

    // $('.home-cooperation-tab').find('div').each(function(index, el) {
    //     var index = $(this).index();
    //     $(this).click(function(event) {
    //         $(this).addClass('active').siblings().removeClass('active');
    //         $('.home-cooperation-box  .home-cooperation-list:eq('+index+')').addClass('active').siblings().removeClass('active');
    //     });
    // });
    
    var swiper1 = new Swiper('.home-cooperation .swiper-container', {
          slidesPerView: 4,
          slidesPerGroup: 4,
          spaceBetween: 8,
          slidesPerColumn : 3,
          slidesPerColumnFill : 'row',
          navigation: {
            nextEl: '.cooperation-next',
            prevEl: '.cooperation-prev',
          },
          breakpoints: {
            991: {
              slidesPerView: 3,
              slidesPerGroup: 3,
            },
            736: {
              slidesPerView: 2,
              slidesPerGroup: 2,
            },
            375: {
              slidesPerView: 2,
              slidesPerGroup: 2,
            }
          }
    });

    // $('.home-news-tab').find('div').each(function(index, el) {
    //     var index = $(this).index();
    //     $(this).click(function(event) {
    //         $(this).addClass('active').siblings().removeClass('active');
    //         $('.home-news-box  .home-news-list:eq('+index+')').addClass('active').siblings().removeClass('active');
    //     });
    // });
    
    var swiper2 = new Swiper(".home-news-swiper", {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 10,
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        navigation: {
          nextEl: '.home-news-next',
          prevEl: '.home-news-prev',
        }
    });

    var swiper3 = new Swiper(".audience-swiper", {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 10,
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        navigation: {
          nextEl: '.audience-next',
          prevEl: '.audience-prev',
        }
    })

    var swiper4 = new Swiper('.brand-swiper', {
          slidesPerView: 4,
          slidesPerGroup: 4,
          spaceBetween: 0,
          slidesPerColumn : 3,
          slidesPerColumnFill : 'row',
          autoplay: {
            delay: 3000,
            disableOnInteraction: false,
          },
          breakpoints: {
            991: {
              slidesPerView: 3,
            },
            736: {
              slidesPerView: 2,
            },
            375: {
              slidesPerView: 2,
            }
          }
    });
    var swiper5 = new Swiper('.brand-enterprise-swiper', {
          slidesPerView: 5,
          slidesPerGroup: 5,
          spaceBetween: 0,
          slidesPerColumn : 3,
          slidesPerColumnFill : 'row',
          autoplay: true,
          breakpoints: {
            991: {
              slidesPerView: 3,
              slidesPerGroup: 3,
            },
            736: {
              slidesPerView: 2,
              slidesPerGroup: 2,
            },
            375: {
              slidesPerView: 2,
              slidesPerGroup: 2,
            }
          }
    });
    var swiper6 = new Swiper('.other-activities-swiper', {
          slidesPerView: 3,
          slidesPerGroup: 3,
          spaceBetween: 30,
          autoplay: true,
          pagination: {
            el: '.swiper-pagination',
            clickable :true,
          },
          breakpoints: {
            991: {
              slidesPerView: 2,
              slidesPerGroup: 2,
              spaceBetween: 20,
            },
            736: {
              slidesPerView: 2,
              slidesPerGroup: 2,
              spaceBetween: 15,
            },
            640: {
              slidesPerView: 1,
              slidesPerGroup: 1,
              spaceBetween: 10,
            }
          }
    });
    var swiper7 = new Swiper('.live-playback-swiper', {
          slidesPerView: 3,
          slidesPerGroup: 3,
          spaceBetween: 30,
          autoplay: true,
          breakpoints: {
            991: {
              slidesPerView: 2,
              slidesPerGroup: 2,
              spaceBetween: 20,
            },
            736: {
              slidesPerView: 2,
              slidesPerGroup: 2,
              spaceBetween: 15,
            },
            640: {
              slidesPerView: 1,
              slidesPerGroup: 1,
              spaceBetween: 10,
            }
          }
    });
});