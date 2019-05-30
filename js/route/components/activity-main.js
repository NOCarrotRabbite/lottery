SPA_RESOLVE_INIT = function(transition, sigal) {
  $('#footer').show();
  $('#header').html('<span class="size-36">活动中心</span>');
  $('#header').css('justify-content', 'center');
  $('#main').html(
    '\n' +
      '    <div class="activity">\n' +
      '      <div class="banner">\n' +
      '        <p class="banner-text">彩金活动</p>\n' +
      '      </div>\n' +
      '      <div class="activity-content">\n' +
      '        <div class="tab">\n' +
      '          <span class="tab-nav">通知公告</span>\n' +
      '          <span class="tab-nav">我的消息</span>\n' +
      '        </div>\n' +
      '        <ul class="tab-content award">\n' +
      '        </ul>\n' +
      '        <ul class="tab-content message">\n' +
      '        </ul>\n' +
      '      </div>\n' +
      '    </div>'
  );
  $.addPageScript('js/activity.js', sigal);
};
