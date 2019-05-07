(function() {
  $('.login-submit').on('click', () => {
    let user_num = $('.user').val();
    let password = $('.password').val();
    let data = {
      user_num: user_num,
      password: password
    };
    let param = {
      url: API.LOGIN_API,
      type: 'POST',
      data: data
    };
    getAjax(param).then(
      function(data) {
        if (data.status == true) {
          window.location.href = '#/index';
        }
        console.log('data', data);
      },
      function(error) {
        console.log('11111', error.status);
      }
    );
  });
})();
