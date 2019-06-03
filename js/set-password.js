(function() {
  $(function() {
    //自动获取焦点
    $('.old-pwd').focus();
    //input框删除icon
    $.inputClear($('.old-pwd'), $('.old-pwd').next());
    $.inputClear($('.new-pwd'), $('.new-pwd').next());
    $.inputClear($('.repetition-pwd'), $('.repetition-pwd').next());
    let user_num = localStorage.getItem('tel');
    $('.set-password-submit').on('click', function() {
      let data = {
        user_num: user_num,
        old_password: $('.old-pwd').val(),
        new_password: $('.new-pwd').val()
      };
      $.jsonAjax(API.UP_PASSWORD_API, 'POST', data)
        .then(function(res) {
          console.log(res);
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
