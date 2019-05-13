(function() {
  $(function() {
    //复制
    $.copy($('.bank-copy'), $('.bank-code'), '银行卡号复制成功');
    $.copy($('.service-copy'), $('.service-name'), '收款人姓名复制成功');
    //提交充值申请
    $('.bank-recharge-submit').on('click', function() {
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
