SPA_RESOLVE_INIT = function(transition, sigal) {
  $('#footer').hide();
  $('#header').html(
    '<a href="#/activity?code=0">\n' +
      '         <svg class="icon" aria-hidden="true">\n' +
      '           <use xlink:href="#icon-fanhui"></use>\n' +
      '         </svg>\n' +
      '       </a>\n' +
      '       <span class="size-36 game-hall-title">公告详情</span>'
  );
  $('#header').css('justify-content', 'flex-start');
  $('.game-hall-title').css('flex-grow', '1');
  $('.game-hall-title').css('text-align', 'center');
  $('.back').css('color', '#fff');
  $('#main').html(
    '\n' +
      '<div class="notice-particulars public-details">\n' +
      '<div class="header-title size-28">\n' +
      '<strong class="notice-title">全网返奖率最高</strong>\n' +
      '<p class="size-24 notice-date">2019-02-22 00:31:25</p>\n' +
      '</div>\n' +
      '<div class="notice-particulars-content public-details-content ">\n' +
      '</div>\n' +
      ' </div>'
  );
  $.addPageScript('js/notice-particulars.js', sigal);
};
