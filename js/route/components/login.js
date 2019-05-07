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
      '<span class="icon">X</span>\n' +
      '</li>\n' +
      '<li>\n' +
      '<input type="password" class="password" placeholder="请输入用户密码" />\n' +
      '<span class="icon">X</span>\n' +
      '</li>\n' +
      '<li><button class="login-submit public-member-submit">登 录</button></li>\n' +
      '<li class="register-href">\n' +
      '<a href="#/register">注 册</a>\n' +
      '<a href="#">忘记密码</a>\n' +
      '</li>\n' +
      '</ul>\n' +
      '</div>'
  );
  let _body = document.getElementsByTagName('body')[0];
  let scriptEle = document.createElement('script');
  scriptEle.type = 'text/javascript';
  scriptEle.src = 'js/login.js';
  scriptEle.async = true;
  if (sigal == 0) {
    _body.appendChild(scriptEle);
  } else {
    $("script[src='js/login.js']").remove();
    _body.appendChild(scriptEle);
  }
};
