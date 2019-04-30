SPA_RESOLVE_INIT = function(transition, sigal) {
  $('#footer').hide();
  $('#header').html(
    '<a href="#/setting">\n' +
      '         <svg class="icon" aria-hidden="true">\n' +
      '           <use xlink:href="#icon-fanhui"></use>\n' +
      '         </svg>\n' +
      '       </a>\n' +
      '       <span class="size-36 game-hall-title">修改登录密码</span>'
  );
  $('#header').css('justify-content', 'flex-start');
  $('.game-hall-title').css('flex-grow', '1');
  $('.game-hall-title').css('text-align', 'center');
  $('.back').css('color', '#fff');
  $('#main').html(
    '\n' +
      '<div class="set-password">\n' +
      '<ul class="set-password-form">\n' +
      '<li>\n' +
      '  <span>旧登录密码</span>\n' +
      ' <input type="text" />\n' +
      '  <svg class="icon detail-icon" aria-hidden="true">\n' +
      '                <use xlink:href="#icon-iconzhuanqu23"></use>\n' +
      '              </svg>\n' +
      ' </li>\n' +
      ' <li>\n' +
      '<span>新登录密码</span>\n' +
      ' <input type="text" />\n' +
      '  <svg class="icon detail-icon" aria-hidden="true">\n' +
      '                <use xlink:href="#icon-iconzhuanqu23"></use>\n' +
      '              </svg>\n' +
      '  </li>\n' +
      ' <li>\n' +
      ' <span>重复新密码</span>\n' +
      ' <input type="text" />\n' +
      '  <svg class="icon detail-icon" aria-hidden="true">\n' +
      '                <use xlink:href="#icon-iconzhuanqu23"></use>\n' +
      '              </svg>\n' +
      '  </li>\n' +
      '<li class="set-password-submit">\n' +
      '<button>确 定</button>\n' +
      ' </li>\n' +
      ' </ul>\n' +
      ' </div>\n'
  );
};
