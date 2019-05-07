SPA_RESOLVE_INIT = function(transition, sigal) {
  $('#footer').hide();
  $('#header').html(
    '<a href="#/my-wallet">\n' +
      '         <svg class="icon" aria-hidden="true">\n' +
      '           <use xlink:href="#icon-fanhui"></use>\n' +
      '         </svg>\n' +
      '       </a>\n' +
      '       <span class="size-36 game-hall-title">绑定银行卡</span>'
  );
  $('#header').css('justify-content', 'flex-start');
  $('.game-hall-title').css('flex-grow', '1');
  $('.game-hall-title').css('text-align', 'center');
  $('.back').css('color', '#fff');
  $('#main').html(
    '\n' +
      '<div class="bank-card public-set">\n' +
      '<ul class="bank-card-form public-set-form">\n' +
      '<li>\n' +
      '  <span>真实姓名</span>\n' +
      ' <input type="text" class="name" />\n' +
      '  <svg class="icon detail-icon" aria-hidden="true">\n' +
      '                <use xlink:href="#icon-iconzhuanqu23"></use>\n' +
      '              </svg>\n' +
      ' </li>\n' +
      ' <li>\n' +
      '<span>银行名称</span>\n' +
      ' <input type="text" class="bank" />\n' +
      ' </li>\n' +
      ' <li>\n' +
      '<span>卡号账号</span>\n' +
      ' <input type="text" class="card-num" />\n' +
      '  <svg class="icon detail-icon" aria-hidden="true">\n' +
      '                <use xlink:href="#icon-iconzhuanqu23"></use>\n' +
      '              </svg>\n' +
      '  </li>\n' +
      ' <li>\n' +
      ' <span>提现密码</span>\n' +
      ' <input type="text" class="password" />\n' +
      '  <svg class="icon detail-icon" aria-hidden="true">\n' +
      '                <use xlink:href="#icon-iconzhuanqu23"></use>\n' +
      '              </svg>\n' +
      '  </li>\n' +
      '<li class="bank-card-submit public-set-submit">\n' +
      '<button>确 定</button>\n' +
      ' </li>\n' +
      ' </ul>\n' +
      ' <div class="dialog">\n' +
      '<div class="obscuration"></div>\n' +
      '<ul class="select-bank size-24">\n' +
      ' <li>\n' +
      '中国银行<input type="radio" name="kind" value="apple" checked />\n' +
      ' </li>\n' +
      ' <li>\n' +
      '中国工商银行<input type="radio" name="kind" value="apple" checked />\n' +
      '  </li>\n' +
      '<li>\n' +
      ' 中国农业银行<input type="radio" name="kind" value="apple" checked />\n' +
      ' </li>\n' +
      '<li>\n' +
      '  中国建设银行<input type="radio" name="kind" value="apple" checked />\n' +
      ' </li>\n' +
      '  <li>\n' +
      '中国建设银行<input type="radio" name="kind" value="apple" checked />\n' +
      '</li>\n' +
      ' <li>\n' +
      '中国建设银行<input type="radio" name="kind" value="apple" checked />\n' +
      ' </li>\n' +
      ' <li>\n' +
      ' 中国建设银行<input type="radio" name="kind" value="apple" checked />\n' +
      '</li>\n' +
      ' <li>\n' +
      ' 中国建设银行<input type="radio" name="kind" value="apple" checked />\n' +
      '  </li>\n' +
      '</ul>\n' +
      '</div>\n' +
      ' </div>\n'
  );
  $.addPageScript('js/bank-card.js', sigal);
};
