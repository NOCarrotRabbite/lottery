SPA_RESOLVE_INIT = function(transition, sigal) {
  $('#header').hide();
  $('#footer').hide();
  $('#main').html(
    '\n' +
      '<div class="login">\n' +
      '<ul class="login-form">\n' +
      '<li class="title">登 录</li>\n' +
      '<li>\n' +
      '<input type="text" placeholder="请输入用户账号" />\n' +
      '<span class="icon">X</span>\n' +
      '</li>\n' +
      '<li>\n' +
      '<input type="password" placeholder="请输入用户密码" />\n' +
      '<span class="icon">X</span>\n' +
      '</li>\n' +
      '<li><button class="login-submit">登 录</button></li>\n' +
      '</ul>\n' +
      '</div>'
  );
  /*  let _body = document.getElementsByTagName('body')[0];
  let scriptEle = document.createElement('script');
  scriptEle.type = 'text/javascript';
  scriptEle.src = 'js/bank-card.js';
  scriptEle.async = true;
  if (sigal == 0) {
    _body.appendChild(scriptEle);
  } else {
    $("script[src='js/bank-card.js']").remove();
    _body.appendChild(scriptEle);
  } */
};
