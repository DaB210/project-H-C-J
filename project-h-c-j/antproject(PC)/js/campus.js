

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
    paragraphs[2].style.color = "#1677FF";
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











// //wow
//   // 初始化WOW
//       // new WOW().init();
//       // wow自定义配置项
//       const wow = new WOW({
//         // 定义wow的类名，默认为wow
//         boxClass: "deliver_title deliver deliver_below",
//         // 默认使用的是animated
//         animateClass: "animated",
//         // 设置元素触发动画的偏移量，即元素的顶部距离浏览器底部多少距离触发动画
//         offset: 200,
//         // 是否在移动端使用wow
//         mobile: true,
//         // 是否不断检测页面上新的wow元素
//         live: true,
//       });
//       wow.init();



// 初始化WOW
const wow = new WOW({
  // 定义wow的类名，默认为wow
  boxClass: "deliver_title deliver deliver_below ",
  // 默认使用的是animated
  animateClass: "animated",
  // 设置元素触发动画的偏移量，即元素的顶部距离浏览器底部多少距离触发动画
  offset: function() {
    // 获取图片元素的高度和宽度
    const image = document.querySelector(".below_title");
    const imageHeight = image.offsetHeight;
    const imageWidth = image.offsetWidth;
    // 计算偏移量
    const offset = Math.max(imageHeight, imageWidth);
    return offset;
  },
  // 是否在移动端使用wow
  mobile: true,
  // 是否不断检测页面上新的wow元素
  live: true,
});

wow.init();








$(document).ready(function() {
  // 获取所有的li元素
  var lis = $('.deliver li');

  // 用于存储上一个被触碰的列表项
  // var prevLi = null;
  // 检查是否有li元素，并且长度大于0
  if (lis.length > 0) {
    // 默认给第一个li添加left4类
    lis.first().addClass('left4');
  }
  // 为每个li元素添加鼠标悬停事件监听器
  lis.each(function() {
    $(this).off('mouseover').hover(function() { // 使用.off()移除之前绑定的事件监听器
      if (prevLi !== null) {
        // 删除上一个被触碰的列表项的 left4 类
        prevLi.removeClass('left4'); 
      }
      // 给当前被触碰的列表项添加 left4 类
      $(this).addClass('left4'); 
      // 更新上一个被触碰的列表项
      prevLi = $(this); 
    });
  });


});



// 获取所有的li元素和inbox_int元素
const tabs = document.querySelectorAll('.tab');
const inboxInts = document.querySelectorAll('.inbox_int');

// 为每个li元素添加点击事件监听器
tabs.forEach((tab, index) => {
  tab.addEventListener('click', () => {
    // 隐藏所有inbox_int元素
    inboxInts.forEach(inboxInt => {
      inboxInt.style.display = 'none'; // 隐藏所有内容区域
    });

    // 移除所有li元素的active类
    tabs.forEach(t => t.classList.remove('active'));

    // 显示与被点击的li对应的inbox_int元素
    inboxInts[index].style.display = 'block'; // 显示当前内容区域

    // 为被点击的li元素添加active类，表示它当前是选中状态
    tab.classList.add('active'); // 添加active类
  });
});

// 打开网页时，默认选中第一个li元素
tabs[0].classList.add('active');