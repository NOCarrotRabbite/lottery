SPA_RESOLVE_INIT = function(transition, sigal) {
  $('#footer').show()
  $('#header').html('<span class="size-36">我的账户</span>')
  $('#header').css('justify-content', 'center')
  $('#main').html(
    '\n' +
      '    <div class="account">\n' +
      '      <header class="account-msg">\n' +
      '        <div class="header-img"></div>\n' +
      '        <div class="header-account">用户名：WX1234</div>\n' +
      '        <div class="header-username">昵称：不吃胡萝卜兔子</div>\n' +
      '      </header>\n' +
      '      <ul class="balance">\n' +
      '        <li>\n' +
      '          <p>余额</p>\n' +
      '          <p>0.0元宝</p>\n' +
      '        </li>\n' +
      '        <li>\n' +
      '          <p>今日盈亏</p>\n' +
      '          <p>0.0</p>\n' +
      '        </li>\n' +
      '      </ul>\n' +
      '      <ul class="user-menu">\n' +
      '        <a href="#/my-wallet">\n' +
      '          <li>\n' +
      '            <span>\n' +
      '              <svg class="icon list-icon" aria-hidden="true">\n' +
      '                <use xlink:href="#icon-qianbao1"></use>\n' +
      '              </svg>\n' +
      '              钱包\n' +
      '            </span>\n' +
      '            <span>\n' +
      '              <svg class="icon detail-icon" aria-hidden="true">\n' +
      '                <use xlink:href="#icon-xiangqing"></use>\n' +
      '              </svg>\n' +
      '            </span>\n' +
      '          </li>\n' +
      '        </a>\n' +
      '        <a href="#/account-records">\n' +
      '          <li>\n' +
      '            <span>\n' +
      '              <svg class="icon list-icon" aria-hidden="true">\n' +
      '                <use xlink:href="#icon-_jilu"></use>\n' +
      '              </svg>\n' +
      '              账变记录\n' +
      '            </span>\n' +
      '            <span>\n' +
      '              <svg class="icon detail-icon" aria-hidden="true">\n' +
      '                <use xlink:href="#icon-xiangqing"></use>\n' +
      '              </svg>\n' +
      '            </span>\n' +
      '          </li>\n' +
      '        </a>\n' +
      '        <a href="#/account-details">\n' +
      '          <li>\n' +
      '            <span>\n' +
      '              <svg class="icon list-icon" aria-hidden="true">\n' +
      '                <use xlink:href="#icon-youxi1"></use>\n' +
      '              </svg>\n' +
      '              账户明细\n' +
      '            </span>\n' +
      '            <span>\n' +
      '              <svg class="icon detail-icon" aria-hidden="true">\n' +
      '                <use xlink:href="#icon-xiangqing"></use>\n' +
      '              </svg>\n' +
      '            </span>\n' +
      '          </li>\n' +
      '        </a>\n' +
      '        <a href="#/setting">\n' +
      '          <li>\n' +
      '            <span>\n' +
      '              <svg class="icon list-icon" aria-hidden="true">\n' +
      '                <use xlink:href="#icon-shezhi"></use>\n' +
      '              </svg>\n' +
      '              设置\n' +
      '            </span>\n' +
      '            <span>\n' +
      '              <svg class="icon detail-icon" aria-hidden="true">\n' +
      '                <use xlink:href="#icon-xiangqing"></use>\n' +
      '              </svg>\n' +
      '            </span>\n' +
      '          </li>\n' +
      '        </a>\n' +
      '        <a href="#/about-us">\n' +
      '          <li>\n' +
      '            <span>\n' +
      '              <svg class="icon list-icon" aria-hidden="true">\n' +
      '                <use xlink:href="#icon-weixin"></use>\n' +
      '              </svg>\n' +
      '              关于我们\n' +
      '            </span>\n' +
      '            <span>\n' +
      '              <svg class="icon detail-icon" aria-hidden="true">\n' +
      '                <use xlink:href="#icon-xiangqing"></use>\n' +
      '              </svg>\n' +
      '            </span>\n' +
      '          </li>\n' +
      '        </a>\n' +
      '      </ul>\n' +
      '    </div>'
  )
  $.addPageScript('js/account-main.js', sigal);
}
