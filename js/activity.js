(function() {
  $(function() {
    //获取页面数据
    /*  $.jsonAjax(API.REG_USER_API, 'POST', data)
        .then(function(data) {
          if (data.status == true) {
            window.location.href = '#/login';
          }
        })
        .catch(function(error) {
          console.log(error.status);
        }); */
    //tab切换
    let url = window.location.href;
    let code = url.substr(url.length - 1);
    let tab_nav = document.querySelectorAll('.tab-nav');
    let tab_content = document.querySelectorAll('.tab-content');
    let index = code;
    tab_nav[code].classList.add('active');
    tab_content[code].classList.add('on');
    for (let i = 0; i < tab_nav.length; i++) {
      tab_nav[i].onclick = function() {
        tab_nav[index].classList.remove('active');
        tab_content[index].classList.remove('on');
        index = i;
        tab_nav[index].classList.add('active');
        tab_content[index].classList.add('on');
      };
    }
    //我的消息-详情
    $('.message>li').on('click', event => {
      window.location.href = '#/my-message';
    });
    //通知公告-详情
    $('.award>li').on('click', event => {
      window.location.href = '#/notice-particulars';
    });
    //最新活动-详情
    $('.banner').on('click', function() {
      window.location.href = '#/activity-particulars';
    });
  });
})();
