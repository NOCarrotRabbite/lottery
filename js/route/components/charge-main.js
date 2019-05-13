SPA_RESOLVE_INIT = function(transition, sigal) {
  let code = transition.query.code;
  if (code == 0) {
    $('#footer').show();
    $('#header').html('<span class="size-36">充值</span>');
    $('#header').css('justify-content', 'center');
  } else {
    $('#footer').hide();
    $('#header').html(
      '\n' +
        '       <a href="javascript:window.history.go(-1)" class="back">\n' +
        '         <svg class="icon" aria-hidden="true">\n' +
        '           <use xlink:href="#icon-fanhui"></use>\n' +
        '         </svg>\n' +
        '       </a>\n' +
        '       <span class="game-hall-title size-36">充值</span>'
    );
    $('#header').css('justify-content', 'flex-start');
    $('.game-hall-title').css('flex-grow', '1');
    $('.game-hall-title').css('text-align', 'center');
    $('.back').css('color', '#fff');
  }
  $('#main').html(
    '\n' +
      '    <div class="recharge">\n' +
      '      <p class="title size-28">在线充值</p>\n' +
      '      <a href="#/payment?code=1" class="recharge-content-list">\n' +
      '        <img\n' +
      '          class="recharge-content-img"\n' +
      '          src="assets/images/alipay-icon.png"\n' +
      '          alt="支付宝"\n' +
      '        />\n' +
      '        <span class="recharge-content-text ">支付宝扫码快速到账</span>\n' +
      '      </a>\n' +
      '      <a href="#/payment?code=2" class="recharge-content-list">\n' +
      '        <img\n' +
      '          class="recharge-content-img"\n' +
      '          src="assets/images/wechat-icon.png"\n' +
      '          alt="微信"\n' +
      '        />\n' +
      '        <span class="recharge-content-text">微信扫码快速到账</span>\n' +
      '      </a>\n' +
      '      <a href="#/bank-recharge" class="recharge-content-list">\n' +
      '        <img\n' +
      '          class="recharge-content-img"\n' +
      '          src="assets/images/net-bank-icon.png"\n' +
      '          alt="银行卡"\n' +
      '        />\n' +
      '        <span class="recharge-content-text">网银充值</span>\n' +
      '      </a>\n' +
      '      <div class="control-btn">\n' +
      '        <button class="btn transfer-btn">查看转账记录</button>\n' +
      '        <button class="btn service-btn">联系在线客服</button>\n' +
      '      </div>\n' +
      '    </div>'
  );
  $.addPageScript('js/charge.js', sigal);
};
