SPA_RESOLVE_INIT = function(transition, sigal) {
  let code = transition.query.code;
  if (code == 0) {
    $('#footer').show();
    $('#header').html('<span class="size-36">在线客服</span>');
    $('#header').css('justify-content', 'center');
  } else {
    $('#footer').hide();
    $('#header').html(
      '\n' +
        '       <a href="javascript:window.history.go(-1)" class="back">\n' +
        '         <svg class="icon" aria-hidden="true">\n' +
        '           <use xlink:href="#icon-fanhui"></use>\n' +
        '         </svg>\n' +
        '       </a>\n' +
        '       <span class="game-hall-title size-36">在线客服</span>'
    );
    $('#header').css('justify-content', 'flex-start');
    $('.game-hall-title').css('flex-grow', '1');
    $('.game-hall-title').css('text-align', 'center');
    $('.back').css('color', '#fff');
  }
  $('#main').html(
    '\n' +
      '    <div class="service">\n' +
      '      <div class="service-code">\n' +
      '        <div class="service-img"></div>\n' +
      '        <p class="service-text">长按保存微信客服二维码</p>\n' +
      '      </div>\n' +
      '      <div class="service-qq">\n' +
      '        <span class="service-qq-icon">          \n' +
      '         <svg class="icon" aria-hidden="true">\n' +
      '           <use xlink:href="#icon-social-qq"></use>\n' +
      '         </svg>\n' +
      '        </span>\n' +
      '        <span>QQ客服</span>\n' +
      '        <button class="btn">点击添加客服QQ聊天</button>\n' +
      '      </div>\n' +
      '    </div>'
  );
  $.addPageScript('js/customer-main.js', sigal);
};
