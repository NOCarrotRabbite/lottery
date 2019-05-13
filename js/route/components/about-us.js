SPA_RESOLVE_INIT = function(transition, sigal) {
  $('#footer').hide();
  $('#header').html(
    '<a href="#/account">\n' +
      '         <svg class="icon" aria-hidden="true">\n' +
      '           <use xlink:href="#icon-fanhui"></use>\n' +
      '         </svg>\n' +
      '       </a>\n' +
      '       <span class="size-36 game-hall-title">关于我们</span>'
  );
  $('#header').css('justify-content', 'flex-start');
  $('.game-hall-title').css('flex-grow', '1');
  $('.game-hall-title').css('text-align', 'center');
  $('.back').css('color', '#fff');
  $('#main').html(
    '\n' +
      '<div class="about-us">\n' +
      ' <header class="about-us-header">\n' +
      '  <div class="header-img" />\n' +
      ' <div class="header-account">抖音娱乐</div>\n' +
      '<div class="header-versions">当前版本：V2.3.19</div>\n' +
      '   </header>\n' +
      ' <ul class="about-us-content">\n' +
      '   <li>\n' +
      '  <span>\n' +
      '  <svg class="icon" aria-hidden="true">\n' +
      '<use xlink:href="#icon-liulanqi"></use>\n' +
      '</svg>平台官网：\n' +
      '<span class="color-red url-text">http:www.douyin898</span>\n' +
      '</span>\n' +
      ' <span class="about-us-copy copy-url">复制</span>\n' +
      '   </li>\n' +
      '  <li>\n' +
      '  <span>\n' +
      ' <svg class="icon" aria-hidden="true">\n' +
      '<use xlink:href="#icon-kefu4"></use>\n' +
      '</svg>客服 QQ：\n' +
      ' <span class="color-red qq-num">123456</span>\n' +
      '</span>\n' +
      ' <span class="about-us-copy qq-copy">复制</span>\n' +
      ' </li>\n' +
      '<li>\n' +
      '<span>\n' +
      '<svg class="icon" aria-hidden="true">\n' +
      '<use xlink:href="#icon-weixin"></use>\n' +
      '</svg>客服微信：\n' +
      '<span class="color-red we-chat-num">WX123456</span>\n' +
      ' </span>\n' +
      '<span class="about-us-copy we-chat-copy">复制</span>\n' +
      ' </li>\n' +
      '</ul>\n' +
      '<div class="about-us-code">\n' +
      '<div class="code"><img class="code-img" src="../images/erweima.jpg" alt="qq" /></div>\n' +
      '<p class="code-text">长按保存二维码</p>\n' +
      '  </div>\n' +
      '</div>'
  );
  $.addPageScript('js/about-us.js', sigal);
};
