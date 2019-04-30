SPA_RESOLVE_INIT = function(transition, sigal) {
  $('#footer').hide();
  $('#header').html(
    '\n' +
      '       <a href="#/account" class="back">\n' +
      '         <svg class="icon" aria-hidden="true">\n' +
      '           <use xlink:href="#icon-fanhui"></use>\n' +
      '         </svg>\n' +
      '       </a>\n' +
      '       <span class="game-hall-title size-36">钱包</span>'
  );
  $('#header').css('justify-content', 'flex-start');
  $('.game-hall-title').css('flex-grow', '1');
  $('.game-hall-title').css('text-align', 'center');
  $('.back').css('color', '#fff');
  $('#main').html(
    '\n' +
      '    <div class="wallet">\n' +
      '      <ul class="wallet-header">\n' +
      '        <li class="header-icon">\n' +
      '         <svg class="icon" aria-hidden="true">\n' +
      '           <use xlink:href="#icon-qiandai"></use>\n' +
      '         </svg>\n' +
      '     \t</li>\n' +
      '        <li>\n' +
      '          <p>钱包余额</p>\n' +
      '          <p class="pad-top"><strong>0.00</strong> 元宝</p>\n' +
      '        </li>\n' +
      '        <li>\n' +
      '          <p>彩金余额</p>\n' +
      '          <p class="pad-top"><strong>0.00</strong> 元宝</p>\n' +
      '        </li>\n' +
      '      </ul>\n' +
      '      <ul class="wallet-content">\n' +
      '        <a href="#/bank-card">\n' +
      '          <li>\n' +
      '            <span>            \t\n' +
      '\t         <svg class="icon" aria-hidden="true">\n' +
      '\t           <use xlink:href="#icon-yinhangqia"></use>\n' +
      '\t         </svg>我的银行卡</span>\n' +
      '          </li>\n' +
      '        </a>\n' +
      '        <a href="#/charge">\n' +
      '          <li>\n' +
      '            <span>      \t\n' +
      '\t         <svg class="icon" aria-hidden="true">\n' +
      '\t           <use xlink:href="#icon-29"></use>\n' +
      '\t         </svg>充值</span>\n' +
      '          </li>\n' +
      '        </a>\n' +
      '        <a href="#/withdraw-deposit">\n' +
      '          <li>\n' +
      '            <span>      \t\n' +
      '\t         <svg class="icon" aria-hidden="true">\n' +
      '\t           <use xlink:href="#icon-tixian"></use>\n' +
      '\t         </svg>提现</span>\n' +
      '          </li>\n' +
      '        </a>\n' +
      '        <a href="#/recharge-record">\n' +
      '          <li>\n' +
      '            <span>      \t\n' +
      '\t         <svg class="icon" aria-hidden="true">\n' +
      '\t           <use xlink:href="#icon-chongzhijilu1"></use>\n' +
      '\t         </svg>充值记录</span>\n' +
      '          </li>\n' +
      '        </a>\n' +
      '        <a href="#/withdraw-deposit-record">\n' +
      '          <li>\n' +
      '            <span>      \t\n' +
      '\t         <svg class="icon" aria-hidden="true">\n' +
      '\t           <use xlink:href="#icon-tixianmingxi"></use>\n' +
      '\t         </svg>提现记录</span>\n' +
      '          </li>\n' +
      '        </a>\n' +
      '      </ul>\n' +
      '    </div>'
  );
};
