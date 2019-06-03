(function() {
  $(function() {
    //获取页面数据
    function qurryData(state) {
      $('.tab-content>li').remove();
      let user_num = localStorage.getItem('tel');
      let data = {
        user_num: user_num,
        state: state == 0 ? 'obt_game_notice' : 'obt_user_notice'
      };
      $.jsonAjax(API.NOTICE_API, 'POST', data)
        .then(function(res) {
          if (res.status == true) {
            if (state == 0) {
              for (let i = 0; i < res.data.length; i++) {
                let dom =
                  ' <li>\n' +
                  ' <span>\n' +
                  res.data[i].notice_title +
                  ' </span>\n' +
                  ' <span>' +
                  res.data[i].notice_time +
                  '</span>\n' +
                  ' <span class="notice-id">' +
                  res.data[i].notice_id +
                  '</span>\n' +
                  '</li>\n';
                $('.award').append(dom);
              }
            } else if (state == 1) {
              for (let i = 0; i < res.data.length; i++) {
                let dom =
                  ' <li>\n' +
                  ' <span>\n' +
                  res.data[i].notice_title +
                  ' </span>\n' +
                  ' <span>' +
                  res.data[i].notice_time +
                  '</span>\n' +
                  ' <span class="notice-id">' +
                  res.data[i].notice_id +
                  '</span>\n' +
                  '</li>\n';
                $('.message').append(dom);
              }
            }
          } else {
            $.messageBox(res.message, 600);
          }
        })
        .catch(function(error) {
          console.log(error.status);
        });
    }
    //tab切换
    let url = window.location.href;
    let code = url.substr(url.length - 1);
    qurryData(code);
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
        qurryData(i);
      };
    }
    //我的消息-详情
    $('.message').on('click', 'li', event => {
      let id = event.currentTarget.children[2].innerText;
      window.location.href = '#/my-message?code=' + id;
    });
    //通知公告-详情
    $('.award').on('click', 'li', event => {
      let id = event.currentTarget.children[2].innerText;
      window.location.href = '#/notice-particulars?code=' + id;
    });
    //最新活动-详情
    $('.banner').on('click', function() {
      window.location.href = '#/activity-particulars';
    });
  });
})();
