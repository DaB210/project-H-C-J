// 异步函数，用于渲染标题图片
async function titleImage() {
  // 获取视频标题图片元素
  let titImg = document.querySelector(".titImg").children[0];
  // 发起请求获取轮播图数据
  let titImgRes = await request("carouselGroup/getAllCarouselGroup", {
    projectId: 1,
  });
  // 将获取到的图片地址赋值给标题图片元素的src属性
  titImg.src = titImgRes.data.rows[0].w_carousels[0].url;

  // 获取业务标题图片元素
  let businessTitle = document.querySelector(".businessTitle .titImg").children[0];
  // 将获取到的图片地址赋值给业务标题图片元素的src属性
  businessTitle.src = titImgRes.data.rows[0].w_carousels[1].url;
}

// 异步函数，用于渲染业务图片和信息
async function businessImage() {
  // 获取业务内容容器元素
  let businessContent = document.querySelector(".businessContent");
  // 发起请求获取特定分类下的业务信息
  let businessContentRes = await request("classify/getById", {
    id: 11,
    projectId: 1,
  });
  let InfoList = businessContentRes.data.w_cases;
  console.log(InfoList);
  // 遍历业务信息列表
  InfoList.forEach(item => {
    // 创建每一个业务卡片元素
    let card = document.createElement("div");
    card.classList.add("item");
    card.style.backgroundImage = `url(${item.cover})`;

    // 创建遮罩层元素
    let mask = document.createElement("div");
    mask.classList.add("mask");
    card.appendChild(mask);

    // 创建遮罩层内文本元素
    let maskTextBox = document.createElement("div");
    let maskTit = document.createElement("div");
    let maskTitTxt = document.createElement("h3");
    let maskTxt = document.createElement("p");
    let icon = document.createElement("i");

    // 设置遮罩层内文本内容和样式
    maskTitTxt.innerText = item.name;
    maskTxt.innerText = item.content.slice(3, -8);
    maskTextBox.classList.add("maskTextBox");
    maskTit.classList.add("maskTit");
    maskTitTxt.classList.add("maskTitTxt");
    maskTxt.classList.add("maskTxt");
    icon.classList.add("icon");
    icon.classList.add("iconfont");
    icon.classList.add("icon-xiajiantou");

    // 将遮罩层内文本元素挂载到遮罩层上
    maskTextBox.appendChild(maskTit);
    maskTit.appendChild(maskTitTxt);
    maskTextBox.appendChild(maskTxt);
    maskTextBox.appendChild(icon);
    card.appendChild(maskTextBox);

    // 将业务卡片元素添加到业务内容容器中
    businessContent.appendChild(card);
  });
}

// 滚动事件处理
window.onscroll = function () {
  // 首页头部视频效果
  if (document.documentElement.scrollTop < window.innerHeight) {
    videoBox.style.transform = `translateY(${document.documentElement.scrollTop / 1.65}px) `;
  }

  // 导航栏颜色及logo切换
  if (main.getBoundingClientRect().top <= 80) {
    nav.classList.add("colorActive");
    logo.src = "https://gw.alipayobjects.com/zos/bmw-prod/fae9a7a0-0800-4655-b8b5-af3150233bdf.svg";
  } else {
    nav.classList.remove("colorActive");
    logo.src = "https://gw.alipayobjects.com/zos/bmw-prod/25d46cbf-7f0f-4745-a6c5-75d977f8c1a5.svg";
  }

  // 导航栏显示/隐藏
  if (document.documentElement.scrollTop >= 80) {
    nav.style.transform = "translateY(-80px)";
  } else {
    nav.style.transform = "translateY(0px)";
  }

  // 判断当前是上滑页面还是下滑
  let afterScrollTop = document.documentElement.scrollTop;
  let delta = afterScrollTop - beforeScrollTop;
  // 上下滑动时导航栏的显示/隐藏
  delta > 0 && document.documentElement.scrollTop >= 80 ? (nav.style.transform = "translateY(-80px)") : (nav.style.transform = "translateY(0px)");
  beforeScrollTop = afterScrollTop;
};

// 调用渲染函数
titleImage();
businessImage();