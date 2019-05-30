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
      '<strong class="activity-title">彩金活动</strong>\n' +
      ' <p class="date activity-date">2019-02-22 00:31:25</p>\n' +
      ' </header>\n' +
      '<div class="activity-particulars-content public-details-content">\n' +
      ' </div>\n' +
      '</div>'
  );
  $.addPageScript('js/activity-particulars.js', sigal);
};
