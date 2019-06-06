(function() {
  $(function() {
    //自动获取焦点
    $('.mobile-num').focus();
    //输入框删除icon控制
    $.inputClear($('.mobile-num'), $('.mobile-num').next());
    $.inputClear($('.mobile-code'), $('.mobile-code').next());
    $.inputClear($('.mobile-pwd'), $('.mobile-pwd').next());

    //发送验证码
    $.getCode(60, $('.get-code'), $('.mobile-num'), 'reset_login_password');
    //确认修改密码
    $('.form-submit').on('click', function() {
      let data = {
        user_num: $('.mobile-num').val(),
        send_vc: $('.mobile-code').val(),
        new_password: $('.mobile-pwd').val()
      };
      $.jsonAjax(API.FORGET_PASSWORD_API, 'POST', data)
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
