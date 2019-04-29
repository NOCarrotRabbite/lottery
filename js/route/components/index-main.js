SPA_RESOLVE_INIT = function(transition) {
    $('#footer').show();
    $('#header').html('<a href="#/index">\n' +
        '         <svg class="icon" aria-hidden="true">\n' +
        '           <use xlink:href="#icon-lvzhou_gengduo_xiangqing"></use>\n' +
        '         </svg>\n' +
        '       </a>\n' +
        '       <span class="size-36">竞猜大厅</span>\n' +
        '       <a href="#/index">\n' +
        '         <svg class="icon" aria-hidden="true">\n' +
        '           <use xlink:href="#icon-yonghu"></use>\n' +
        '         </svg>\n' +
        '       </a>');
    $('#header').css('justify-content', 'space-between');
    $('#main').html('\n' +
        '    <div class="lobby">\n' +
        '      <div class="banner">\n' +
        '        <p class="banner-text">彩金活动</p>\n' +
        '      </div>\n' +
        '      <div class="broadcast">\n' +
        '        <svg class="icon icon-logo" aria-hidden="true">\n' +
        '            <use xlink:href="#icon-tongzhi"></use>\n' +
        '        </svg>\n' +
        '        <marquee class="broadcast-text">\n' +
        '          尊敬的游戏玩家您好：因支付通道变更，请您充值前联系在线客服取得充值方式，如您自行充值造成的损失本平台概不负责，祝各位玩家生活愉快，好运常在~~~\n' +
        '        </marquee>\n' +
        '      </div>\n' +
        '      <div class="menu">\n' +
        '        <div class="menu-top">\n' +
        '        \t<a href="#/game-hall?type=1" class="menu-content">\n' +
        '\t            <div class="menu-content-left">\n' +
        '\t              <div class="left-img xuancai"></div>\n' +
        '\t            </div>\n' +
        '\t            <div class="menu-content-right">\n' +
        '\t              <span class="classify size-28">\n' +
        '\t                炫彩厅\n' +
        '\t              </span>\n' +
        '\t              <p class="periods">全天179期</p>\n' +
        '\t            </div>\n' +
        '        \t</a>\n' +
        '        \t<a href="#/game-hall?type=2" class="menu-content">\n' +
        '\t            <div class="menu-content-left">\n' +
        '\t              <div class="left-img huancai"></div>\n' +
        '\t            </div>\n' +
        '\t            <div class="menu-content-right">\n' +
        '\t              <span class="classify size-28">\n' +
        '\t                幻彩厅\n' +
        '\t              </span>\n' +
        '\t              <p class="periods">全天394期</p>\n' +
        '\t            </div>\n' +
        '        \t</a>\n' +
        '        </div>\n' +
        '        <div class="menu-bottom">\n' +
        '        \t<a href="#/game-hall?type=3" class="menu-content">\n' +
        '\t            <div class="menu-content-left">\n' +
        '\t              <div class="left-img ruicai"></div>\n' +
        '\t            </div>\n' +
        '\t            <div class="menu-content-right">\n' +
        '\t              <span class="classify size-28">\n' +
        '\t                瑞彩厅\n' +
        '\t              </span>\n' +
        '\t              <p class="periods">全天480期</p>\n' +
        '\t            </div>\n' +
        '        \t</a>\n' +
        '        \t<a href="#" class="menu-content">\n' +
        '\t            <div class="menu-content-left">\n' +
        '\t              <div class="left-img more"></div>\n' +
        '\t            </div>\n' +
        '\t            <div class="menu-content-right">\n' +
        '\t              <span class="classify size-28">\n' +
        '\t                敬请期待\n' +
        '\t              </span>\n' +
        '\t              <p class="periods">全天96期</p>\n' +
        '\t            </div>\n' +
        '        \t</a>\n' +
        '        </div>\n' +
        '      </div>\n' +
        '      <div class="rank">\n' +
        '        <p class="rank-title size-28">-- 最新中奖榜 --</p>\n' +
        '        <ul class="rank-content">\n' +
        '          <li>\n' +
        '            <span>丽丽****</span>\n' +
        '            <span>投注瑞彩厅</span>\n' +
        '            <span class="color-red">喜中10000.00元</span>\n' +
        '          </li>\n' +
        '          <li>\n' +
        '            <span>丽丽****</span>\n' +
        '            <span>投注瑞彩厅</span>\n' +
        '            <span class="color-red">喜中10000.00元</span>\n' +
        '          </li>\n' +
        '          <li>\n' +
        '            <span>丽丽****</span>\n' +
        '            <span>投注瑞彩厅</span>\n' +
        '            <span class="color-red">喜中10000.00元</span>\n' +
        '          </li>\n' +
        '          <li>\n' +
        '            <span>丽丽****</span>\n' +
        '            <span>投注瑞彩厅</span>\n' +
        '            <span class="color-red">喜中10000.00元</span>\n' +
        '          </li>\n' +
        '          <li>\n' +
        '            <span>丽丽****</span>\n' +
        '            <span>投注瑞彩厅</span>\n' +
        '            <span class="color-red">喜中10000.00元</span>\n' +
        '          </li>\n' +
        '          <li>\n' +
        '            <span>丽丽****</span>\n' +
        '            <span>投注瑞彩厅</span>\n' +
        '            <span class="color-red">喜中10000.00元</span>\n' +
        '          </li>\n' +
        '        </ul>\n' +
        '      </div>\n' +
        '    </div>');
}
