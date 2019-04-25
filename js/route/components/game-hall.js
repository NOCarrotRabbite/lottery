SPA_RESOLVE_INIT = function(transition, sigal) {
    console.log(transition);
    $('#footer').hide();
    $('#header').html('\n' +
        '       <a href="#/index" class="back">\n' +
        '         <svg class="icon" aria-hidden="true">\n' +
        '           <use xlink:href="#icon-fanhui"></use>\n' +
        '         </svg>\n' +
        '       </a>\n' +
        '       <h4 class="game-hall-title">炫彩大厅</h4>');
    $('#header').css('justify-content', 'flex-start');
    $('.game-hall-title').css('flex-grow', '1');
    $('.game-hall-title').css('text-align', 'center');
    $('.back').css('color', '#fff');
    $('#main').html('\n' +
        '    <div class="game-hall-content">\n' +
        '        <div class="room pre"></div>\n' +
        '        <div class="room pre"></div>\n' +
        '        <div class="room"></div>\n' +
        '    </div>');
};
