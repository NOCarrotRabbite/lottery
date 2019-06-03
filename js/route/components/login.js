SPA_RESOLVE_INIT = function(transition, sigal) {
  $('#header').hide();
  $('#footer').hide();
  $('#main').html(
    '\n' +
      '<div class="login"><img src="/assets/images/login.jpg" class="login-image"/>\n' +
      '<div class="public-member"><ul class="login-form public-member-form">\n' +
      '<li>\n' +
      '<input type="text"  class="user" placeholder="请输入用户账号" />\n' +
      '  <svg class="icon detail-icon" aria-hidden="true">\n' +
      '     <use xlink:href="#icon-iconzhuanqu23"></use>\n' +
      '  </svg>\n' +
      '</li>\n' +
      '<li>\n' +
      '<input type="password"  class="password" placeholder="请输入用户密码" />\n' +
      '  <svg class="icon detail-icon" aria-hidden="true">\n' +
      '      <use xlink:href="#icon-iconzhuanqu23"></use>\n' +
      '  </svg>\n' +
      '</li>\n' +
      '<li><button class="login-submit public-member-submit">登 录</button></li>\n' +
      '<li class="register-href">\n' +
      '<a href="#/register">注 册</a>\n' +
      '<a href="#">忘记密码</a>\n' +
      '</li>\n' +
      '</ul></div>\n' +
      '</div>'
  );
  $.addPageScript('js/login.js', sigal);
};
