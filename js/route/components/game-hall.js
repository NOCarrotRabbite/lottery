SPA_RESOLVE_INIT = function(transition, sigal) {
  $('#footer').hide();
  let type = transition.query.type;
  let title = '';
  let title_common =
    '<a href="#/index" class="back">\n' +
    '         <svg class="icon" aria-hidden="true">\n' +
    '           <use xlink:href="#icon-fanhui"></use>\n' +
    '         </svg>\n' +
    '       </a>';
  if (type == 1) {
    title =
      title_common + '<span class="game-hall-title size-36">炫彩大厅</span>';
  }
  if (type == 2) {
    title =
      title_common + '<span class="game-hall-title size-36">幻彩大厅</span>';
  }
  if (type == 3) {
    title =
      title_common + '<span class="game-hall-title size-36">瑞彩大厅</span>';
  }
  $('#header').html(title);
  $('#header').css('justify-content', 'flex-start');
  $('.game-hall-title').css('flex-grow', '1');
  $('.game-hall-title').css('text-align', 'center');
  $('.back').css('color', '#fff');
  $('#main').html(
    '\n' +
      '    <div class="game-hall-content">\n' +
      '      <a href="#/game-hall-item?hall_type=' + type + '&item_type=' + 1 + '">\n' +
      '        <div class="room pre primary">\n' +
      '          <button class="text first">赔率说明</button>\n' +
      '          <p class="text second hall-tag1">底注： <strong>1</strong></p>\n' +
      '          <p class="text second hall-tag2">准入： <strong>0</strong></p>\n' +
      '          <span class="text third">          \n' +
      '           <svg class="icon" aria-hidden="true">\n' +
      '             <use xlink:href="#icon-zhanghu1"></use>\n' +
      '           </svg>\n' +
      '           <strong>9739</strong>\n' +
      '          </span>\n' +
      '        </div>\n' +
      '      </a>\n' +
      '      <a href="#/game-hall-item?hall_type=' + type + '&item_type=' + 2 + '">\n' +
      '        <div class="room pre middle">\n' +
      '          <button class="text first">赔率说明</button>\n' +
      '          <p class="text second hall-tag1">底注： <strong>100</strong></p>\n' +
      '          <p class="text second hall-tag2">准入： <strong>50000</strong></p>\n' +
      '          <span class="text third">          \n' +
      '           <svg class="icon" aria-hidden="true">\n' +
      '             <use xlink:href="#icon-zhanghu1"></use>\n' +
      '           </svg>\n' +
      '           <strong>9739</strong>\n' +
      '          </span>\n' +
      '        </div>\n' +
      '      </a>\n' +
      '      <a href="#/game-hall-item?hall_type=' + type + '&item_type=' + 3 + '">\n' +
      '        <div class="room senior">\n' +
      '          <button class="text first">赔率说明</button>\n' +
      '          <p class="text second hall-tag1">底注： <strong>300</strong></p>\n' +
      '          <p class="text second hall-tag2">准入： <strong>100000</strong></p>\n' +
      '          <span class="text third">          \n' +
      '           <svg class="icon" aria-hidden="true">\n' +
      '             <use xlink:href="#icon-zhanghu1"></use>\n' +
      '           </svg>\n' +
      '           <strong>9739</strong>\n' +
      '          </span>\n' +
      '        </div>\n' +
      '      </a>\n' +
      '    </div>'
  );
  $.addPageScript('js/game-hall.js', sigal);
};
