SPA_RESOLVE_INIT = function(transition, sigal) {
  $('#main').html(
    '\n' +
      '<div class="register public-member">\n' +
      '<ul class="register-form public-member-form">\n' +
      '<li class="title">注 册</li>\n' +
      '<li>\n' +
      '<input type="text" placeholder="请输入用户昵称" />\n' +
      '<span class="icon">X</span>\n' +
      '</li>\n' +
      '<li>\n' +
      '<input type="text" placeholder="请输入用户账号" />\n' +
      ' <span class="icon">X</span>\n' +
      '</li>\n' +
      '<li>\n' +
      '<input type="text" placeholder="请输入用户密码" />\n' +
      '<span class="icon">X</span>\n' +
      '</li>\n' +
      '<li><button class="register-submit public-member-submit">注册</button></li>\n' +
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
