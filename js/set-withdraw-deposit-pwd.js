(function() {
  $(function() {
    //input框删除icon控制
    $.inputClear($('.old-pwd'), $('.old-pwd').next());
    $.inputClear($('.new-pwd'), $('.new-pwd').next());
    $.inputClear($('.repetition-pwd'), $('.repetition-pwd').next());
    //修改密码
    $('.form-submit').on('click', function() {
      let data = {
        oldPwd: $('.old-pwd').val(),
        newPwd: $('.new-pwd').val(),
        repetitionPwd: $('.repetition-pwd').val()
      };
      /*  $.jsonAjax(API.REG_USER_API, 'POST', data)
      .then(function(data) {
        if (data.status == true) {
          window.location.href = '#/login';
        }
      })
      .catch(function(error) {
        console.log(error.status);
      }); */
    });
  });
})();
