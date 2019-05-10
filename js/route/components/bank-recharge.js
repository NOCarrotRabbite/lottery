SPA_RESOLVE_INIT = function(transition, sigal) {
  $('#footer').hide();
  $('#header').html(
    '<a href="#/charge">\n' +
      '         <svg class="icon" aria-hidden="true">\n' +
      '           <use xlink:href="#icon-fanhui"></use>\n' +
      '         </svg>\n' +
      '       </a>\n' +
      '       <span class="size-36 game-hall-title">网银充值</span>'
  );
  $('#header').css('justify-content', 'flex-start');
  $('.game-hall-title').css('flex-grow', '1');
  $('.game-hall-title').css('text-align', 'center');
  $('.back').css('color', '#fff');
  $('#main').html(
    '\n' +
      '<div class="bank-recharge">\n' +
      '<ul class="top-card">\n' +
      '<li class="color-red">银行付款信息</li>\n' +
      '<li>开户银行：请联系财务索取卡号</li>\n' +
      ' <li>\n' +
      '<span>银行卡号：<span class="bank-code">000</span></span>\n' +
      '<span class="copy-btn bank-copy">复制</span>\n' +
      ' </li>\n' +
      '<li>\n' +
      '<span>收款人：<span class="service-name">财务001</span></span>\n' +
      '<span class="copy-btn service-copy">复制</span>\n' +
      ' </li>\n' +
      '</ul>\n' +
      ' <ul class="bank-recharge-form">\n' +
      '<li>请输入充值金额（元）</li>\n' +
      '<li><input type="text" /></li>\n' +
      '<li class="hint">网银充值说明：</li>\n' +
      '<li class="hint">\n' +
      ' 1.在首页点击客服选项卡，添加本站财务客服索取具体支付方式。\n' +
      '</li>\n' +
      '<li>\n' +
      '<button class="bank-recharge-submit">请按要求转款后再提交申请</button>\n' +
      '</li>\n' +
      ' </ul>\n' +
      '</div>'
  );
  $.addPageScript('js/bank-recharge.js', sigal);
};
