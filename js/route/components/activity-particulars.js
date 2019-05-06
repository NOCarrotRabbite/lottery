SPA_RESOLVE_INIT = function(transition, sigal) {
  $('#footer').hide();
  $('#header').html(
    '<a href="#/index-main">\n' +
      '         <svg class="icon" aria-hidden="true">\n' +
      '           <use xlink:href="#icon-fanhui"></use>\n' +
      '         </svg>\n' +
      '       </a>\n' +
      '       <span class="size-36 game-hall-title">活动详情</span>'
  );
  $('#header').css('justify-content', 'flex-start');
  $('.game-hall-title').css('flex-grow', '1');
  $('.game-hall-title').css('text-align', 'center');
  $('.back').css('color', '#fff');
  $('#main').html(
    '\n' +
      '<div class="activity-particulars public-details">\n' +
      '<header class="header-title">\n' +
      '<strong>彩金活动</strong>\n' +
      ' <p class="date">2019-02-22 00:31:25</p>\n' +
      ' </header>\n' +
      '<div class="activity-particulars-content public-details-content">\n' +
      ' <p>为感谢广大新老客户长期以来对</p>\n' +
      ' <p>"XXX竞猜平台"的支持</p>\n' +
      ' <p>平台特推出新年大礼包!</p>\n' +
      '<p>充值10000元送588彩金红包</p>\n' +
      ' <p>充值30000元送1088彩金红包</p>\n' +
      '<p>充值50000元送1888彩金红包</p>\n' +
      '<p>充值100000元送4888彩金红包</p>\n' +
      ' <p>充值200000元送10888彩金红包</p>\n' +
      ' </div>\n' +
      '</div>'
  );
};
