(function() {
  $(function() {
    //获取验证码
    $.getCode(60, $('.user-code'), $('.user'), 'reg');
    //跳转登录
    $('.register-login').on('click', function() {
      window.location.href = '#/login';
    });
    //控制删除icon
    $.inputClear($('.name'), $('.name').next());
    $.inputClear($('.user'), $('.user').next());
    $.inputClear($('.user-num'), $('.user-num').next());
    $.inputClear($('.password'), $('.password').next());
    //注册时间函数
    $('.register-submit').on('click', function() {
      let nick_name = $('.name').val();
      let user_num = $('.user').val();
      let password = $('.password').val();
      let send_vc = $('.user-num').val();
      let data = {
        nick_name: nick_name,
        user_num: user_num,
        user_password: password,
        send_vc: send_vc
      };
      $.jsonAjax(API.REG_USER_API, 'POST', data)
        .then(function(res) {
          if (res.status == true) {
            $.messageBox(res.message, 600);
            window.location.href = '#/login';
          } else {
            $.messageBox(res.message, 600);
          }
        })
        .catch(function(error) {
          console.log(error.status);
        });
    });
  });
})();
