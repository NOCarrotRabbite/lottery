(function() {
  $(function() {
    $('.login-submit').on('click', () => {
      let user_num = $('.user').val();
      let password = $('.password').val();
      let data = {
        user_num: user_num,
        password: password
      };
      window.location.href = '#/index';
      /*  $.jsonAjax(API.LOGIN_API, 'POST', data)
        .then(function(data) {
          window.location.href = '#/index';
          if (data.status == true) {
            window.location.href = '#/index';
          }
          console.log('data', data);
        })
        .catch(function(error) {
          console.log('11111', error.status);
        }); */
    });
    $.inputClear($('.user'), $('.user').next());
    $.inputClear($('.password'), $('.password').next());
  });
})();
