SPA_RESOLVE_INIT = function(transition, sigal) {
    $('#footer').hide();
    $('#header').html('<a href="#/game-hall" class="back">\n' +
        '         <svg class="icon" aria-hidden="true">\n' +
        '           <use xlink:href="#icon-fanhui1"></use>\n' +
        '         </svg>\n' +
        '       </a>\n' +
        '       <span class="hall-title size-36">炫彩厅</span>\n' +
        '       <span>\n' +
        '       <a href="#/index" class="zhuanghu-icon">\n' +
        '         <svg class="icon" aria-hidden="true">\n' +
        '           <use xlink:href="#icon-custom-service"></use>\n' +
        '         </svg>\n' +
        '       </a>\n' +
        '       <a href="#/index">\n' +
        '         <svg class="icon" aria-hidden="true">\n' +
        '           <use xlink:href="#icon-add1"></use>\n' +
        '         </svg>\n' +
        '       </a>\n' +
        '       </span>');
    $('#header').css('justify-content', 'space-between');
    $('#header .zhuanghu-icon').css('padding-right', '2rem');
    $('.hall-title').css('margin-right', '-6rem');
    $('#main').html('这是游戏大厅里的小厅页面！');
};
