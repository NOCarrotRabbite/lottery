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
      '<li class="code-li">\n' +
      '<div class="code">\n' +
      '<input type="text" class="user-num" placeholder="请输入验证码" />\n' +
      '  <svg class="icon detail-icon" aria-hidden="true">\n' +
      '     <use xlink:href="#icon-iconzhuanqu23"></use>\n' +
      '  </svg>\n' +
      '</div>\n' +
      '<button class="user-code" disabled="disabled">获取验证码</button>\n' +
      '</li>\n' +
      '<li>\n' +
      '<input type="password" class="password" placeholder="请输入用户密码" />\n' +
      '  <svg class="icon detail-icon" aria-hidden="true">\n' +
      '     <use xlink:href="#icon-iconzhuanqu23"></use>\n' +
      '  </svg>\n' +
      '</li>\n' +
      '<li><button class="register-submit public-member-button">注册</button><button class="public-member-button  register-login">登录</button></li>\n' +
      '<li class="register-text">提示：密码由数字+字母+小数点+下划线组成</li>\n' +
      '</ul></div>\n' +
      '</div>'
  );
  $.addPageScript('js/register.js', sigal);
};
