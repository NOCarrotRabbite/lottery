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
        .then(function(data) {
          if (data.status == true) {
            //用户彩金
            localStorage.setItem('gold', data.data.gold);
            //昵称
            localStorage.setItem('nickname', data.data.nickname);
            //用户余额
            localStorage.setItem('money', data.data.money);
            //头像地址
            localStorage.setItem('url', data.data.url);

            window.location.href = '#/index';
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
