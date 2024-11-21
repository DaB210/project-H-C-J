 // 获取所有的图像元素和二维码图片元素
  const socialIcons = document.querySelectorAll('.hangQR img');
  const qrCodes = document.querySelectorAll('.hangQR_up img');

  // 添加事件监听器
  socialIcons.forEach((icon, index) => {
    icon.addEventListener('mouseenter', () => {
      // 鼠标触碰时显示对应的二维码图片
      qrCodes[index].style.display = 'block';

    });

    icon.addEventListener('mouseleave', () => {
      // 鼠标移出时隐藏对应的二维码图片
      qrCodes[index].style.display = 'none';
 
    });
  });