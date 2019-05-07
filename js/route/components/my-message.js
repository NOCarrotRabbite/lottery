SPA_RESOLVE_INIT = function(transition, sigal) {
  $('#footer').hide();
  $('#header').html(
    '<a href="#/activity">\n' +
      '         <svg class="icon" aria-hidden="true">\n' +
      '           <use xlink:href="#icon-fanhui"></use>\n' +
      '         </svg>\n' +
      '       </a>\n' +
      '       <span class="size-36 game-hall-title">我的消息</span>'
  );
  $('#header').css('justify-content', 'flex-start');
  $('.game-hall-title').css('flex-grow', '1');
  $('.game-hall-title').css('text-align', 'center');
  $('.back').css('color', '#fff');
  $('#main').html(
    '\n' +
      '<div class="my-message public-details">\n' +
      '<div class="header-title">\n' +
      '<strong>我的消息1</strong>\n' +
      '<p class="size-24">2019-02-22 00:31:25</p>\n' +
      ' </div>\n' +
      '<div class="my-message-content public-details-content">\n' +
      '<p>我的消息111111111111</p>\n' +
      '</div>\n' +
      '</div>'
  );
  $.addPageScript('js/my-message.js', sigal);
};
