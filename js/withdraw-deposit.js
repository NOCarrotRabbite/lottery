(function() {
  $(function() {
    //页面数据
    /*  $.jsonAjax(API.REG_USER_API, 'POST', data)
      .then(function(data) {
        if (data.status == true) {
          window.location.href = '#/login';
        }
      })
      .catch(function(error) {
        console.log(error.status);
      }); */
    //输入框删除icon控制
    $.inputClear($('.money'), $('.money').next());
    $.inputClear($('.password'), $('.password').next());
    //提交提现申请
    $('.form-submit').on('click', function() {
      let data = {
        name: $('.name').text(),
        bank: $('.bank').text(),
        num: $('.num').text(),
        money: $('.money').val(),
        password: $('.password').val()
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
