SPA_RESOLVE_INIT = function(transition, sigal) {
  $('#footer').hide();
  $('#header').html(
    '<a href="javascript:window.history.go(-1)">\n' +
      '         <svg class="icon" aria-hidden="true">\n' +
      '           <use xlink:href="#icon-fanhui"></use>\n' +
      '         </svg>\n' +
      '       </a>\n' +
      '       <span class="size-36 game-hall-title">修改提现密码</span>'
  );
  $('#header').css('justify-content', 'flex-start');
  $('.game-hall-title').css('flex-grow', '1');
  $('.game-hall-title').css('text-align', 'center');
  $('.back').css('color', '#fff');
  $('#main').html(
    '\n' +
      '<div class="set-withdraw-deposit-pwd public-set">\n' +
      '<ul class="set-withdraw-deposit-pwd-form public-set-form">\n' +
      '<li>\n' +
      '  <span>旧提现密码</span>\n' +
      ' <input type="text" class="old-pwd" placeholder="首次设置可不填" />\n' +
      '  <svg class="icon detail-icon" aria-hidden="true">\n' +
      '                <use xlink:href="#icon-iconzhuanqu23"></use>\n' +
      '              </svg>\n' +
      ' </li>\n' +
      ' <li>\n' +
      '<span>新提现密码</span>\n' +
      ' <input type="text" class="new-pwd" placeholder="请输入新提现密码" />\n' +
      '  <svg class="icon detail-icon" aria-hidden="true">\n' +
      '                <use xlink:href="#icon-iconzhuanqu23"></use>\n' +
      '              </svg>\n' +
      '  </li>\n' +
      ' <li>\n' +
      ' <span>重复新密码</span>\n' +
      ' <input type="text" class="repetition-pwd" placeholder="请再次输入密码" />\n' +
      '  <svg class="icon detail-icon" aria-hidden="true">\n' +
      '                <use xlink:href="#icon-iconzhuanqu23"></use>\n' +
      '              </svg>\n' +
      '  </li>\n' +
      '<li class="set-withdraw-deposit-pwd-submit public-set-submit">\n' +
      '<button class="form-submit">确 定</button>\n' +
      ' </li>\n' +
      ' </ul>\n' +
      ' </div>\n'
  );
  $.addPageScript('js/set-withdraw-deposit-pwd.js', sigal);
};
