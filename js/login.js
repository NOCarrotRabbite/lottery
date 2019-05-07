(function() {
  $(function () {
      $('.login-submit').on('click', () => {
          window.location.href = '#/index';
          /*let user_num = $('.user').val();
          let password = $('.password').val();
          let data = {
            user_num: user_num,
            password: password
          };*/
          /*$.jsonAjax(API.LOGIN_API, 'POST', data)
            .then(function(data) {
              window.location.href = '#/index';
              /!* if (data.status == true) {
                window.location.href = '#/index';
              } *!/
              console.log('data', data);
            })
            .catch(function(error) {
              console.log('11111', error.status);
            });*/
      });
  });
})();

