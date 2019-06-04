SPA_RESOLVE_INIT = function(transition, sigal) {
  $('#footer').hide();
  $('#header').html(
    '<a href="#/account">\n' +
      '         <svg class="icon" aria-hidden="true">\n' +
      '           <use xlink:href="#icon-fanhui"></use>\n' +
      '         </svg>\n' +
      '       </a>\n' +
      '       <span class="size-36">账户明细</span>\n' +
      '       <a href="javascript:void(0)" class="filtrate-btn">\n' +
      '         筛选\n' +
      '       </a>'
  );
  $('#header').css('justify-content', 'space-between');
  $('.back').css('color', '#fff');
  $('#main').html(
    '\n' +
      '    <div class="account-details">\n' +
      '      <ul class="account-details-list">\n' +
      '        <li class="size-28">\n' +
      '          <span class="border-color">时间</span>\n' +
      '          <span>彩种</span>\n' +
      '          <span class="public-records-border">金额</span>\n' +
      '          <span>状态</span>\n' +
      '        </li>\n' +
      '      </ul>\n' +
      '      <div class="screen">\n' +
      '        <div class="screen-kind">\n' +
      '          筛选时间：\n' +
      '          <div class="choice-date">\n' +
      '            <input type="text" class="date begin-date" placeholder="请选择日期" />\n' +
      '            <span>-</span>\n' +
      '            <input type="text" class="date end-date" placeholder="请选择日期" />\n' +
      '          </div>\n' +
      '        </div>\n' +
      '        <div class="screen-kind">\n' +
      '          筛选彩种：\n' +
      '          <p class="kind">全部彩种</p>\n' +
      '        </div>\n' +
      '        <div class="control-btn">\n' +
      '          <button class="close">取消</button>\n' +
      '          <button class="submit">确定</button>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '      <div class="dialog">\n' +
      '        <div class="mask-layer"></div>\n' +
      '        <ul class="select-kind">\n' +
      '          <li>\n' +
      '            全部彩种<div class="radio-bg active radio-init"></div>\n' +
      '          </li>\n' +
      '          <li>\n' +
      '            北京幸运28<div class="radio-bg"></div>\n' +
      '          </li>\n' +
      '          <li>\n' +
      '            加拿大幸运28<div class="radio-bg"></div>\n' +
      '          </li>\n' +
      '          <li>\n' +
      '            北京赛车<div class="radio-bg"></div>\n' +
      '          </li>\n' +
      '        </ul>\n' +
      '      </div>\n' +
      '    </div>'
  );
  $.addPageScript('js/account-details.js', sigal);
};
