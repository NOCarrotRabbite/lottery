SPA_RESOLVE_INIT = function(transition, sigal) {
    $('#footer').hide();
    $('#header').html('\n' +
        '       <a href="#/index" class="back">\n' +
        '         <svg class="icon" aria-hidden="true">\n' +
        '           <use xlink:href="#icon-fanhui"></use>\n' +
        '         </svg>\n' +
        '       </a>\n' +
        '       <span class="game-hall-title size-36">炫彩大厅</span>');
    $('#header').css('justify-content', 'flex-start');
    $('.game-hall-title').css('flex-grow', '1');
    $('.game-hall-title').css('text-align', 'center');
    $('.back').css('color', '#fff');
    $('#main').html('\n' +
        '    <div class="game-hall-content">\n' +
        '        <div class="room pre primary"></div>\n' +
        '        <div class="room pre middle"></div>\n' +
        '        <div class="room senior"></div>\n' +
        '    </div>');
};
