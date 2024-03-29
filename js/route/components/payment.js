SPA_RESOLVE_INIT = function(transition, sigal) {
  $('#footer').hide();
  let type = transition.query.code;
  let title = '';
  if (type == 1) {
    title = '支付宝';
  } else {
    title = '微信';
  }
  $('#header').html(
    '<a href="javascript:window.history.go(-1)">\n' +
      '         <svg class="icon" aria-hidden="true">\n' +
      '           <use xlink:href="#icon-fanhui"></use>\n' +
      '         </svg>\n' +
      '       </a>\n' +
      '       <span class="size-36 game-hall-title">' +
      title +
      '扫码快速到账</span>'
  );
  $('#header').css('justify-content', 'flex-start');
  $('.game-hall-title').css('flex-grow', '1');
  $('.game-hall-title').css('text-align', 'center');
  $('.back').css('color', '#fff');
  $('#main').html(
    '\n' +
      '<div class="payment">\n' +
      '<div class="payment-header">\n' +
      '<div class="code"></div>\n' +
      '<p>长按图片可扫描二维码</p>\n' +
      ' </div>\n' +
      '<ul class="payment-form">\n' +
      '<li>\n' +
      '<span>用户名称</span>\n' +
      ' <span class="color-red">WX123</span>\n' +
      '<span class="btn">复制</span>\n' +
      '</li>\n' +
      ' <li>\n' +
      '<span>充值金额</span>\n' +
      '<input class="money" type="text" placeholder="请输入充值金额" />\n' +
      '</li>\n' +
      ' <li class="hint">\n' +
      ' <span>充值步骤：</span>\n' +
      '<p>请扫码联系财务客服索取付款方式</p>\n' +
      '</li>\n' +
      '<li>\n' +
      '<button class="payment-submit">请先扫码付款再提交申请</button>\n' +
      '</li>\n' +
      '</ul>\n' +
      '</div>'
  );
  $.addPageScript('js/payment.js', sigal);
};
