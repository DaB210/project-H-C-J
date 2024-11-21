

 document.addEventListener("scroll", function() {
  let scrollDistance = window.scrollY; // 获取滚动距离

  if (scrollDistance >= 650) {

    document.querySelector(".logo img").src = "./icon/logo_black.svg";
     const topElement = document.querySelector(".head");
    topElement.style.width = "100%";
      topElement.style.backgroundColor = "#ffffff"; // 可根据需要修改颜色
      var paragraphs = topElement.querySelectorAll("p");
for (var i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style.color = "#333333";
    paragraphs[0].style.color = "#1677FF";
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






$(function() {
  var carouselList = $('.carousel-list');
  var carouselItems = $('.carousel-list li');
  var currentIndex = 0;
  var interval;

  function startCarousel() {
    interval = setInterval(function() {
      carouselItems.eq(currentIndex).fadeOut();
      currentIndex = (currentIndex + 1) % carouselItems.length;
      carouselItems.eq(currentIndex).fadeIn();
    }, 2000);
  }

  function stopCarousel() {
    clearInterval(interval);
  }

  startCarousel();

  carouselList.hover(
    function() {
      stopCarousel();
    },
    function() {
      startCarousel();
    }
  );
});






