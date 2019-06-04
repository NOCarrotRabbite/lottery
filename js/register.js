(function() {
  $(function() {
    $('.register-submit').on('click', function() {
      let nick_name = $('.name').val();
      let user_num = $('.user').val();
      let password = $('.password').val();
      let data = {
        nick_name: nick_name,
        user_num: user_num,
        user_password: password
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
    $('.register-login').on('click', function() {
      window.location.href = '#/login';
    });
    $.inputClear($('.name'), $('.name').next());
    $.inputClear($('.user'), $('.user').next());
    $.inputClear($('.password'), $('.password').next());
  });
})();
