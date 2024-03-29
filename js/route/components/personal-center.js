SPA_RESOLVE_INIT = function(transition, sigal) {
  $('#header').show();
  $('#footer').hide();
  $('#header').html(
    '<a href="#/index" class="return-icon">\n' +
      '         <strong>| | |</strong>\n' +
      '       </a>\n' +
      '       <span class="game-hall-title">个人中心</span>'
  );
  $('#header').css('justify-content', 'space-between');
  /* $('#header').css('background', 'transparent'); */
  $('.game-hall-title').css('text-align', 'center');
  $('.game-hall-title').css('flex-grow', '1');
  $('.game-hall-title').css('font-size', '2.4rem');
  $('.return-icon').css('color', '#fff');
  $('.return-icon').css('font-weight', 'bold');
  $('.return-icon').css('font-size', '2rem');
  $('#main').html(
    '\n' +
      '<div class="personal-center">\n' +
      '<img class="personal-bg-color" src="../assets/images/personal.jpg" alt="图片加载失败...">\n' +
      '<div class="personal-center-box"><div class="personal-center-header">\n' +
      '<img src="../../assets/images/head-image_M.png" alt="" class="header-img" />\n' +
      '<p class="name">林</p>\n' +
      '<div class="personal-center-header-btn">\n' +
      ' <a href="#/charge?code=1">充值</a> <a href="#/withdraw-deposit">提现</a>\n' +
      '</div>\n' +
      ' </div>\n' +
      '<ul class="personal-center-content">\n' +
      ' <li>\n' +
      '<span><svg class="icon" aria-hidden="true">\n' +
      '           <use xlink:href="#icon-chongzhi"></use>\n' +
      '         </svg>余额</span>\n' +
      '<span><span class="color-red personal-center-money">0.00</span>元宝</span>\n' +
      '</li>\n' +
      ' <li>\n' +
      '<span><svg class="icon" aria-hidden="true">\n' +
      '           <use xlink:href="#icon-chongzhi"></use>\n' +
      '         </svg>彩金</span>\n' +
      ' <span><span class="color-red personal-center-gold">0.00</span>元宝</span>\n' +
      '</li>\n' +
      ' <li class="personal-center-wallet"><a href="#/my-wallet">\n' +
      ' <span><svg class="icon" aria-hidden="true">\n' +
      '           <use xlink:href="#icon-qianbao2"></use>\n' +
      '         </svg>我的钱包</span>\n' +
      '</a></li>\n' +
      '<li class="personal-center-account"><a href="#/account-records">\n' +
      '<span><svg class="icon" aria-hidden="true">\n' +
      '           <use xlink:href="#icon-tixian"></use>\n' +
      '         </svg>账变记录</span>\n' +
      '</a></li>\n' +
      ' </ul>\n' +
      /*  '<p class="footer-icon"><a href="#/index"><svg class="icon" aria-hidden="true">\n' +
      '           <use xlink:href="#icon-zelvgongyongshouqi1"></use>\n' +
      '         </svg></a></p>\n' + */
      '</div></div>'
  );
  $.addPageScript('js/personal-center.js', sigal);
};
