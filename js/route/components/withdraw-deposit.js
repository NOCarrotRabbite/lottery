SPA_RESOLVE_INIT = function(transition, sigal) {
  $('#footer').hide();
  $('#header').html(
    '\n' +
      '       <a href="javascript:window.history.go(-1)" class="back">\n' +
      '         <svg class="icon" aria-hidden="true">\n' +
      '           <use xlink:href="#icon-fanhui"></use>\n' +
      '         </svg>\n' +
      '       </a>\n' +
      '       <span class="game-hall-title size-36">提现</span>'
  );
  $('#header').css('justify-content', 'flex-start');
  $('.game-hall-title').css('flex-grow', '1');
  $('.game-hall-title').css('text-align', 'center');
  $('.back').css('color', '#fff');
  $('#main').html(
    '\n' +
      '<div class="withdraw-deposit size-24">\n' +
      ' <ul class="withdraw-deposit-form">\n' +
      ' <li>\n' +
      '<span>真实姓名</span>\n' +
      '<span class="color-red name"></span>\n' +
      ' </li>\n' +
      '<li>\n' +
      ' <span>银行名称</span>\n' +
      '<span class="color-red  bank"></span>\n' +
      ' </li>\n' +
      ' <li>\n' +
      '<span>卡号账号</span>\n' +
      '<span class="color-red num"></span>\n' +
      ' </li>\n' +
      ' <li>\n' +
      ' <span>提现金额</span>\n' +
      ' <input type="text" class="money" placeholder="请输入提现金额" />\n' +
      '  <svg class="icon detail-icon" aria-hidden="true">\n' +
      '                <use xlink:href="#icon-iconzhuanqu23"></use>\n' +
      '              </svg>\n' +
      ' </li>\n' +
      ' <li>\n' +
      '<span>提现密码</span>\n' +
      '<input type="password" class="password"  placeholder="请输入提现密码" autocomplete="new-password"/>\n' +
      '  <svg class="icon detail-icon" aria-hidden="true">\n' +
      '                <use xlink:href="#icon-iconzhuanqu23"></use>\n' +
      '              </svg>\n' +
      ' </li>\n' +
      '<li class="withdraw-deposit-submit">\n' +
      '<button class="form-submit">提 交</button>\n' +
      '</li>\n' +
      '</ul>\n' +
      ' </div>'
  );
  $.addPageScript('js/withdraw-deposit.js', sigal);
};
