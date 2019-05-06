SPA_RESOLVE_INIT = function(transition, sigal) {
  /* $('#footer').hide();
  let type = transition.query.code;
  let title = '';
  if (type == 1) {
    title = '支付宝';
  } else {
    title = '微信';
  }
  $('#header').html(
    '<a href="#/charge">\n' +
      '         <svg class="icon" aria-hidden="true">\n' +
      '           <use xlink:href="#icon-fanhui"></use>\n' +
      '         </svg>\n' +
      '       </a>\n' +
      '       <span class="size-36 game-hall-title">' +
      title +
      '登录</span>'
  );
  $('#header').css('justify-content', 'flex-start');
  $('.game-hall-title').css('flex-grow', '1');
  $('.game-hall-title').css('text-align', 'center');
  $('.back').css('color', '#fff'); */
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
      '<li class="register-href">\n' +
      '<a href="#">注 册</a>\n' +
      '<a href="#">忘记密码</a>\n' +
      '</li>\n' +
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
