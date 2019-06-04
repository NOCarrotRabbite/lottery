SPA_RESOLVE_INIT = function(transition, sigal) {
  $('#header').hide();
  $('#footer').hide();
  $('#main').html(
    '\n' +
      '<div class="register"><img src="/assets/images/login.jpg" class="login-image">\n' +
      '<div class="public-member"><ul class="register-form public-member-form">\n' +
      '<li>\n' +
      '<input type="text" class="name" placeholder="请输入用户昵称" />\n' +
      '  <svg class="icon detail-icon" aria-hidden="true">\n' +
      '                <use xlink:href="#icon-iconzhuanqu23"></use>\n' +
      '              </svg>\n' +
      '</li>\n' +
      '<li>\n' +
      '<input type="text" class="user" placeholder="请输入手机号" />\n' +
      '  <svg class="icon detail-icon" aria-hidden="true">\n' +
      '     <use xlink:href="#icon-iconzhuanqu23"></use>\n' +
      '  </svg>\n' +
      '</li>\n' +
      '<li>\n' +
      '<input type="password" class="password" placeholder="请输入用户密码" />\n' +
      '  <svg class="icon detail-icon" aria-hidden="true">\n' +
      '     <use xlink:href="#icon-iconzhuanqu23"></use>\n' +
      '  </svg>\n' +
      '</li>\n' +
      '<li><button class="register-submit public-member-button">注册</button><button class="public-member-button  register-login">登录</button></li>\n' +
      '</ul></div>\n' +
      '</div>'
  );
  $.addPageScript('js/register.js', sigal);
};
