(function() {
  $(function() {
    $('.register-submit').on('click', () => {
      console.log('!!!!!!!!');
      let nick_name = $('.name').val();
      let user_num = $('.user').val();
      let password = $('.password').val();
      let data = {
        nick_name: nick_name,
        user_num: user_num,
        password: password
      };
      window.location.href = '#/login';
      /* $.jsonAjax(API.REG_USER_API, 'POST', data)
        .then(function(data) {
          if (data.status == true) {
            window.location.href = '#/index';
          }
          console.log('data', data);
        })
        .catch(function(error) {
          console.log('11111', error.status);
        }); */
    });
    $.inputClear($('.name'), $('.name').next());
    $.inputClear($('.user'), $('.user').next());
    $.inputClear($('.password'), $('.password').next());
  });
})();
