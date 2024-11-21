 


 document.addEventListener("scroll", function() {
  let scrollDistance = window.scrollY; // 获取滚动距离

  if (scrollDistance >= 80) {

    document.querySelector(".logo img").src = "./icon/logo_black.svg";
     const topElement = document.querySelector(".head");
    topElement.style.width = "100%";
      topElement.style.backgroundColor = "#ffffff"; // 可根据需要修改颜色
      var paragraphs = topElement.querySelectorAll("p");
for (var i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style.color = "#333333";
    paragraphs[3].style.color = "#1677FF";
}
  } else {
    document.querySelector(".logo img").src = "./icon/logo.svg";
    const topElement = document.querySelector(".head");
    topElement.style.width = "";
    topElement.style.backgroundColor = "";
            var paragraphs = topElement.querySelectorAll("p");
for (var i = 0; i < paragraphs.length; i++) {
  paragraphs[i].style.color = "";
      }
      
  }
}); 

// 导航栏
let nav = document.querySelector(".top .head");
// 页面主体
let beforeScrollTop = document.documentElement.scrollTop;
window.onscroll = function () {



  // 导航栏显示/隐藏
  if (document.documentElement.scrollTop >= 80) {
    nav.style.transform = "translateY(-80px)";
  } else {
    nav.style.transform = "translateY(0px)";
  }
  // 判断当前是上滑页面还是下滑
  // 在滚动时记录当前的卷去高度
  let afterScrollTop = document.documentElement.scrollTop;
  // 将当前卷去高度减去前面记录的卷去高度 得到差值
  let delta = afterScrollTop - beforeScrollTop;
  // if (delta === 0) return false;
  // 差值大于0表示当前正在下滑，反之上滑
  delta > 0 && document.documentElement.scrollTop >= 80
    ? (nav.style.transform = "translateY(-80px)")
    : // 向上滑动
      (nav.style.transform = "translateY(0px)");
  // 每次判断完将基准位置置为当前滚动位置
  beforeScrollTop = afterScrollTop;
};















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
    delay: 6000,
    stopOnLastSlide: false,
    disableOnInteraction: true,
    },
      });



// 2222222222222
    // var swiper2 = new Swiper(".mySwiper2", {
    //   pagination: {
    //     el: ".swiper-pagination2",
    //     clickable: true,
    //     renderBullet: function (index, className) {
    //       return '<span class="' + className + '">' + (index + 1) + "</span>";
    //     },
    //   },
    // });






// 选项卡

        $(document).ready(function() {
      // 默认打开第一个选项卡
      toggleTab(0);
    });
    
    function toggleTab(index) {
      var tabs = document.getElementsByClassName('tab');
      var contents = document.getElementsByClassName('tab-content');
      
      for (var i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove('active');
        contents[i].style.display = 'none';
      }
      
      tabs[index].classList.add('active');
      contents[index].style.display = 'block';
    }



      

