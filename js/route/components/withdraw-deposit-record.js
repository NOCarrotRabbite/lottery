SPA_RESOLVE_INIT = function(transition, sigal) {
  $('#footer').hide();
  $('#header').html(
    '\n' +
      '       <a href="javascript:window.history.go(-1)" class="back">\n' +
      '         <svg class="icon" aria-hidden="true">\n' +
      '           <use xlink:href="#icon-fanhui"></use>\n' +
      '         </svg>\n' +
      '       </a>\n' +
      '       <span class="game-hall-title size-36">提现记录</span>'
  );
  $('#header').css('justify-content', 'flex-start');
  $('.game-hall-title').css('flex-grow', '1');
  $('.game-hall-title').css('text-align', 'center');
  $('.back').css('color', '#fff');
  $('#main').html(
    '\n' +
      '<div class="withdraw-deposit-record public-records">\n' +
      '<ul class="withdraw-deposit-record-content">\n' +
      '<li class="size-28">\n' +
      ' <span>提现时间</span>\n' +
      '<span class="public-records-border">提现金额</span>\n' +
      '<span>提现状态</span>\n' +
      ' </li>\n' +
      /*     '<li>\n' +
      '<span>2019-04-24 14:01</span>\n' +
      '<span>1000.00</span>\n' +
      ' <span>已完成</span>\n' +
      '</li>\n' +
      ' <li>\n' +
      '<span>2019-04-24 14:01</span>\n' +
      '<span>1000.00</span>\n' +
      '<span>已完成</span>\n' +
      '</li>\n' +
      '<li>\n' +
      '<span>2019-04-24 14:01</span>\n' +
      '<span>1000.00</span>\n' +
      '<span>已完成</span>\n' +
      '</li>\n' +
      '<li>\n' +
      '<span>2019-04-24 14:01</span>\n' +
      '<span>1000.00</span>\n' +
      '<span>已完成</span>\n' +
      '</li>\n' + */
      '</ul>\n' +
      ' </div>'
  );
  $.addPageScript('js/withdraw-deposit-record.js', sigal);
};
