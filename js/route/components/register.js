SPA_RESOLVE_INIT = function(transition, sigal) {
  $('#main').html(
    '\n' +
      '<div class="register public-member">\n' +
      '<ul class="register-form public-member-form">\n' +
      '<li class="title">注 册</li>\n' +
      '<li>\n' +
      '<input type="text" class="name" placeholder="请输入用户昵称" />\n' +
      '  <svg class="icon detail-icon" aria-hidden="true">\n' +
      '                <use xlink:href="#icon-iconzhuanqu23"></use>\n' +
      '              </svg>\n' +
      '</li>\n' +
      '<li>\n' +
      '<input type="text" class="user" placeholder="请输入用户账号" />\n' +
      '  <svg class="icon detail-icon" aria-hidden="true">\n' +
      '     <use xlink:href="#icon-iconzhuanqu23"></use>\n' +
      '  </svg>\n' +
      '</li>\n' +
      '<li>\n' +
      '<input type="text" class="password" placeholder="请输入用户密码" />\n' +
      '  <svg class="icon detail-icon" aria-hidden="true">\n' +
      '     <use xlink:href="#icon-iconzhuanqu23"></use>\n' +
      '  </svg>\n' +
      '</li>\n' +
      '<li><button class="register-submit public-member-submit">注册</button></li>\n' +
      '</ul>\n' +
      '</div>'
  );
  $.addPageScript('js/register.js', sigal);
};
