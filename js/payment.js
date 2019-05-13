(function() {
  $(function() {
    //复制
    $.copy($('.btn'), $('.color-red'), '用户名复制成功，您可以扫码支付了');
    //提交充值申请
    $('.payment-submit').on('click', function() {
      let data = {
        money: $('.money').val()
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
