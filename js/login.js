(function() {
  $(function() {
    $('.login-submit').on('click', () => {
      let user_num = $('.user').val();
      let password = $('.password').val();
      let data = {
        user_num: user_num,
        password: password
      };
      $.jsonAjax(API.LOGIN_API, 'POST', data)
        .then(function(res) {
          if (res.status == true) {
            //用户彩金
            localStorage.setItem('gold', res.data.gold);
            //昵称
            localStorage.setItem('nickname', res.data.nickname);
            //用户余额
            localStorage.setItem('money', res.data.money);
            //头像地址
            localStorage.setItem('headerImg', res.data.url);
            //电话
            localStorage.setItem('tel', res.data.user_num);

            window.location.href = '#/index';
          } else {
            $.messageBox(res.message);
          }
        })
        .catch(function(error) {
          console.log(error.status);
        });
    });
    $.inputClear($('.user'), $('.user').next());
    $.inputClear($('.password'), $('.password').next());
  });
})();
