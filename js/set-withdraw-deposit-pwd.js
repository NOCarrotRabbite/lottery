(function() {
  $(function() {
    //input框删除icon控制
    $.inputClear($('.old-pwd'), $('.old-pwd').next());
    $.inputClear($('.new-pwd'), $('.new-pwd').next());
    $.inputClear($('.repetition-pwd'), $('.repetition-pwd').next());
    //修改密码
    $('.form-submit').on('click', function() {
      let user_num = localStorage.getItem('tel');
      let data = {
        user_num: user_num,
        state: 'set_draw_password',
        old_draw_password: $('.old-pwd').val(),
        new_draw_password: $('.new-pwd').val()
      };
      $.jsonAjax(API.DRAW_CORE_API, 'POST', data)
        .then(function(res) {
          if (res.status == true) {
            $.messageBox(res.message, 600);
            window.location.href = 'javascript:window.history.go(-1)';
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
