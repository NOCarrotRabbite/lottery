(function() {
  $(function() {
    //自动获取焦点
    $('.mobile-num').focus();
    //获取验证码
    $('.get-code').on('click', function() {
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
    //输入框删除icon控制
    $.inputClear($('.mobile-num'), $('.mobile-num').next());
    $.inputClear($('.mobile-code'), $('.mobile-code').next());
    //确认绑定手机
    $('.form-submit').on('click', function() {
      let data = {
        mobileNum: $('.mobile-num').val(),
        mobileCode: $('.mobile-code').val()
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
