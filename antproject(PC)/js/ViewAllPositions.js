 // 初始化swiper轮播图，两个参数
      // 一个当前轮播图的容器类名
      // 当前轮播图的配置项
      var mySwiper = new Swiper(".swiper", {
        // slidesPerView: 2,
        direction: "horizontal", // 垂直切换选项
        loop: true, // 循环模式选项
        // autoplay: true,
        // effect: "cards",
        // cardsEffect: {
        //   slideShadows: false,
        //   //transformEl:'.text',
        // },
        freeMode: true,

        // 如果需要分页器
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },

        // 如果需要前进后退按钮
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        keyboard: true,

        simulateTouch: false, //禁止鼠标模拟

        // 如果需要滚动条
        // scrollbar: {
        //   el: ".swiper-scrollbar",
          // },
          autoplay:true,//等同于以下设置
  autoplay: {
    delay: 3000,
    stopOnLastSlide: false,
    disableOnInteraction: true,
    },
      });




window.addEventListener('scroll', function() {
 let navbar = document.querySelector('.search_box');
let mySwiper=this.document.querySelector(".swiper")
  if (window.scrollY >= 450) {
    navbar.classList.add('sticky');
    mySwiper.classList.add('search_mgb');
  } else {
    navbar.classList.remove('sticky');
    mySwiper.classList.remove('search_mgb');
  }
      });