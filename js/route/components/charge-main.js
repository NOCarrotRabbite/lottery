SPA_RESOLVE_INIT = function(transition) {
    $('#header').html('<h4>充值</h4>');
    $('#header').css('justify-content', 'center');
    $('#main').html('\n' +
        '    <div class="recharge">\n' +
        '      <p class="title">在线充值</p>\n' +
        '      <div class="recharge-content-list">\n' +
        '        <img\n' +
        '          class="recharge-content-img"\n' +
        '          src="assets/images/zhifubao.jpg"\n' +
        '          alt="支付宝"\n' +
        '        />\n' +
        '        <p class="recharge-content-text">支付宝扫码快速到账</p>\n' +
        '      </div>\n' +
        '      <div class="recharge-content-list">\n' +
        '        <img\n' +
        '          class="recharge-content-img"\n' +
        '          src="assets/images/weixin.jpg"\n' +
        '          alt="支付宝"\n' +
        '        />\n' +
        '        <p class="recharge-content-text">微信扫码快速到账</p>\n' +
        '      </div>\n' +
        '      <div class="recharge-content-list">\n' +
        '        <img\n' +
        '          class="recharge-content-img"\n' +
        '          src="assets/images/yinlian.jpg"\n' +
        '          alt="支付宝"\n' +
        '        />\n' +
        '        <p class="recharge-content-text">网银充值</p>\n' +
        '      </div>\n' +
        '      <div class="control-btn">\n' +
        '        <button class="btn">查看转账记录</button>\n' +
        '        <button class="btn">联系在线客服</button>\n' +
        '      </div>\n' +
        '    </div>');
}
