SPA_RESOLVE_INIT = function(transition) {
    $('#footer').show();
    $('#header').html('<span class="size-36">我的账户</span>');
    $('#header').css('justify-content', 'center');
    $('#main').html('\n' +
        '    <div class="account">\n' +
        '      <header class="account-msg">\n' +
        '        <div class="header-img"></div>\n' +
        '        <div class="header-account">用户名：WX1234</div>\n' +
        '        <div class="header-username">昵称：name</div>\n' +
        '      </header>\n' +
        '      <ul class="balance">\n' +
        '        <li>\n' +
        '          <p>余额</p>\n' +
        '          <p class="size-32">0.0元宝</p>\n' +
        '        </li>\n' +
        '        <li>\n' +
        '          <p>今日盈亏</p>\n' +
        '          <p class="size-32">0.0</p>\n' +
        '        </li>\n' +
        '      </ul>\n' +
        '      <ul class="user-menu">\n' +
        '        <a href="#">\n' +
        '          <li>\n' +
        '            <span><i class="menu-icon">Icon</i>钱包</span>\n' +
        '            <span>></span>\n' +
        '          </li>\n' +
        '        </a>\n' +
        '        <a href="#">\n' +
        '          <li>\n' +
        '            <span><i class="menu-icon">Icon</i>账变记录</span>\n' +
        '            <span>></span>\n' +
        '          </li>\n' +
        '        </a>\n' +
        '        <a href="#">\n' +
        '          <li>\n' +
        '            <span><i class="menu-icon">Icon</i>账户明细</span>\n' +
        '            <span>></span>\n' +
        '          </li>\n' +
        '        </a>\n' +
        '        <a href="#">\n' +
        '          <li>\n' +
        '            <span><i class="menu-icon">Icon</i>设置</span>\n' +
        '            <span>></span>\n' +
        '          </li>\n' +
        '        </a>\n' +
        '        <a href="#">\n' +
        '          <li>\n' +
        '            <span><i class="menu-icon">Icon</i>关于我们</span>\n' +
        '            <span>></span>\n' +
        '          </li>\n' +
        '        </a>\n' +
        '      </ul>\n' +
        '    </div>');
}
