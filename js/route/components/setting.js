SPA_RESOLVE_INIT = function(transition, sigal) {
    $('#footer').hide();
    $('#header').html('\n' +
        '       <a href="#/account" class="back">\n' +
        '         <svg class="icon" aria-hidden="true">\n' +
        '           <use xlink:href="#icon-fanhui"></use>\n' +
        '         </svg>\n' +
        '       </a>\n' +
        '       <span class="game-hall-title size-36">设置</span>');
    $('#header').css('justify-content', 'flex-start');
    $('.game-hall-title').css('flex-grow', '1');
    $('.game-hall-title').css('text-align', 'center');
    $('.back').css('color', '#fff');
    $('#main').html('\n' +
        '    <div class="wallet size-24">\n' +
        '      <ul class="wallet-header">\n' +
        '        <li>\n' +
        '         <svg class="icon" aria-hidden="true">\n' +
        '           <use xlink:href="#icon-lvzhou_gengduo_xiangqing"></use>\n' +
        '         </svg>\n' +
        '     \t</li>\n' +
        '        <li>\n' +
        '          <p>钱包余额</p>\n' +
        '          <p class="pad-top">0.00元宝</p>\n' +
        '        </li>\n' +
        '        <li>\n' +
        '          <p>彩金余额</p>\n' +
        '          <p class="pad-top">0.00元宝</p>\n' +
        '        </li>\n' +
        '      </ul>\n' +
        '      <ul class="wallet-content">\n' +
        '        <a href="#">\n' +
        '          <li>\n' +
        '            <span>            \t\n' +
        '\t         <svg class="icon" aria-hidden="true">\n' +
        '\t           <use xlink:href="#icon-lvhanghuafei"></use>\n' +
        '\t         </svg>\n' +
        '            我的银行卡\n' +
        '        \t</span>\n' +
        '          </li>\n' +
        '        </a>\n' +
        '        <a href="#">\n' +
        '          <li>\n' +
        '            <span>      \t\n' +
        '\t         <svg class="icon" aria-hidden="true">\n' +
        '\t           <use xlink:href="#icon-lvhanghuafei"></use>\n' +
        '\t         </svg>充值</span>\n' +
        '          </li>\n' +
        '        </a>\n' +
        '        <a href="#">\n' +
        '          <li>\n' +
        '            <span>      \t\n' +
        '\t         <svg class="icon" aria-hidden="true">\n' +
        '\t           <use xlink:href="#icon-lvhanghuafei"></use>\n' +
        '\t         </svg>提现</span>\n' +
        '          </li>\n' +
        '        </a>\n' +
        '        <a href="#">\n' +
        '          <li>\n' +
        '            <span>      \t\n' +
        '\t         <svg class="icon" aria-hidden="true">\n' +
        '\t           <use xlink:href="#icon-lvhanghuafei"></use>\n' +
        '\t         </svg>充值记录</span>\n' +
        '          </li>\n' +
        '        </a>\n' +
        '        <a href="#">\n' +
        '          <li>\n' +
        '            <span>      \t\n' +
        '\t         <svg class="icon" aria-hidden="true">\n' +
        '\t           <use xlink:href="#icon-lvhanghuafei"></use>\n' +
        '\t         </svg>提现记录</span>\n' +
        '          </li>\n' +
        '        </a>\n' +
        '      </ul>\n' +
        '    </div>');
};
