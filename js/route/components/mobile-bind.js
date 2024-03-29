SPA_RESOLVE_INIT = function(transition, sigal) {
  $('#header').show();
  $('#footer').hide();
  $('#header').html(
    '<a href="javascript:window.history.go(-1)">\n' +
      '         <svg class="icon" aria-hidden="true">\n' +
      '           <use xlink:href="#icon-fanhui"></use>\n' +
      '         </svg>\n' +
      '       </a>\n' +
      '       <span class="size-36 game-hall-title">找回密码</span>'
  );
  $('#header').css('justify-content', 'flex-start');
  $('.game-hall-title').css('flex-grow', '1');
  $('.game-hall-title').css('text-align', 'center');
  $('.back').css('color', '#fff');
  $('#main').html(
    '\n' +
      '<div class="mobile-bind">\n' +
      '<ul class="mobile-bind-form">\n' +
      ' <li>\n' +
      ' <span>用户账号</span>\n' +
      ' <input type="text" class="mobile-num" placeholder="请输入注册手机号码" />\n' +
      '  <svg class="icon close-icon" aria-hidden="true">\n' +
      '                <use xlink:href="#icon-iconzhuanqu23"></use>\n' +
      '              </svg>\n' +
      '</li>\n' +
      '<li>\n' +
      '<span>验证码&emsp;</span>\n' +
      '<div class="code">\n' +
      '<input type="password" class="mobile-code" placeholder="请输入验证码" autocomplete="new-password"/>\n' +
      '  <svg class="icon  close-icon2" aria-hidden="true">\n' +
      '                <use xlink:href="#icon-iconzhuanqu23"></use>\n' +
      '              </svg>\n' +
      ' </div>\n' +
      '<button class="get-code" disabled="disabled">获取验证码</button>\n' +
      '</li>\n' +
      ' <li>\n' +
      ' <span>新密码&emsp;</span>\n' +
      ' <input type="password" class="mobile-pwd" placeholder="请输入新密码" />\n' +
      '  <svg class="icon close-icon" aria-hidden="true">\n' +
      '                <use xlink:href="#icon-iconzhuanqu23"></use>\n' +
      '              </svg>\n' +
      '</li>\n' +
      '<li class="mobile-bind-submit">\n' +
      '<button class="form-submit">确 认</button>\n' +
      '</li>\n' +
      ' </ul>\n' +
      '</div>\n'
  );
  $.addPageScript('js/mobile-bind.js', sigal);
};
