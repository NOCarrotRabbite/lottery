SPA_RESOLVE_INIT = function(transition, sigal) {
  $('#header').hide();
  $('#footer').hide();
  $('#main').html(
    '\n' +
      '<div class="login public-member">\n' +
      '<ul class="login-form public-member-form">\n' +
      '<li class="title">登 录</li>\n' +
      '<li>\n' +
      '<input type="text" class="user" placeholder="请输入用户账号" />\n' +
      '  <svg class="icon detail-icon" aria-hidden="true">\n' +
      '     <use xlink:href="#icon-iconzhuanqu23"></use>\n' +
      '  </svg>\n' +
      '</li>\n' +
      '<li>\n' +
      '<input type="password" class="password" placeholder="请输入用户密码" />\n' +
      '  <svg class="icon detail-icon" aria-hidden="true">\n' +
      '      <use xlink:href="#icon-iconzhuanqu23"></use>\n' +
      '  </svg>\n' +
      '</li>\n' +
      '<li><button class="login-submit public-member-submit">登 录</button></li>\n' +
      '<li class="register-href">\n' +
      '<a href="#/register">注 册</a>\n' +
      '<a href="#">忘记密码</a>\n' +
      '</li>\n' +
      '</ul>\n' +
      '</div>'
  );
  $.addPageScript('js/login.js', sigal);
};
