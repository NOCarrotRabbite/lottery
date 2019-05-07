SPA_RESOLVE_INIT = function(transition, sigal) {
  $('#footer').hide();
  $('#header').html(
    '\n' +
      '       <a href="#/account" class="back">\n' +
      '         <svg class="icon" aria-hidden="true">\n' +
      '           <use xlink:href="#icon-fanhui"></use>\n' +
      '         </svg>\n' +
      '       </a>\n' +
      '       <span class="game-hall-title size-36">设置</span>'
  );
  $('#header').css('justify-content', 'flex-start');
  $('.game-hall-title').css('flex-grow', '1');
  $('.game-hall-title').css('text-align', 'center');
  $('.back').css('color', '#fff');
  $('#main').html(
    '\n' +
      '    <div class="setting size-24">\n' +
      '      <ul class="setting-content">\n' +
      '        <a href="#/bank-card">\n' +
      '          <li>\n' +
      '            <span><svg class="icon" aria-hidden="true">\n' +
      '           <use xlink:href="#icon-yinhangqia"></use>\n' +
      '         </svg>绑定银行卡</span>\n' +
      '          </li>\n' +
      '        </a>\n' +
      '        <a href="#/set-password">\n' +
      '          <li>\n' +
      '            <span><svg class="icon" aria-hidden="true">\n' +
      '           <use xlink:href="#icon-xiugaimima"></use>\n' +
      '         </svg>修改密码</span>\n' +
      '          </li>\n' +
      '        </a>\n' +
      '        <a href="#/set-withdraw-deposit-pwd">\n' +
      '          <li>\n' +
      '            <span><svg class="icon" aria-hidden="true">\n' +
      '           <use xlink:href="#icon-password"></use>\n' +
      '         </svg>提现密码</span>\n' +
      '          </li>\n' +
      '        </a>\n' +
      '        <a href="#/mobile-bind">\n' +
      '          <li>\n' +
      '            <span><svg class="icon" aria-hidden="true">\n' +
      '           <use xlink:href="#icon-icon-test"></use>\n' +
      '         </svg>手机绑定</span>\n' +
      '          </li>\n' +
      '        </a>\n' +
      '        <a href="#">\n' +
      '          <li>\n' +
      '            <span><svg class="icon" aria-hidden="true">\n' +
      '           <use xlink:href="#icon-web"></use>\n' +
      '         </svg>切换线路</span>\n' +
      '          </li>\n' +
      '        </a>\n' +
      '        <a href="#">\n' +
      '          <li>\n' +
      '            <span><svg class="icon" aria-hidden="true">\n' +
      '           <use xlink:href="#icon-qingchuhuancun"></use>\n' +
      '         </svg>清除缓存</span>\n' +
      '          </li>\n' +
      '        </a>\n' +
      '        <a href="#">\n' +
      '          <li>\n' +
      '            <span><svg class="icon" aria-hidden="true">\n' +
      '           <use xlink:href="#icon-tuichu"></use>\n' +
      '         </svg>退出</span>\n' +
      '          </li>\n' +
      '        </a>\n' +
      '      </ul>\n' +
      '    </div>'
  );
  $.addPageScript('js/setting.js', sigal);
};
