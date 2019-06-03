(function() {
  $(function() {
    //复制
    $.copy($('.bank-copy'), $('.bank-code'), '银行卡号复制成功');
    $.copy($('.service-copy'), $('.service-name'), '收款人姓名复制成功');
    //提交充值申请
    $('.bank-recharge-submit').on('click', function() {
      let user_num = localStorage.getItem('tel');
      let time = $.dateFtt('yyyy-MM-dd hh:mm:ss', new Date());
      let data = {
        state: 'user_invest',
        money: $('.money').val(),
        user_num: user_num,
        time: time,
        type: '网银'
      };
      $.jsonAjax(API.INVEST_DRAW_API, 'POST', data)
        .then(function(res) {
          if (res.status == true) {
            $.messageBox(res.message, 600);
            window.location.href = 'javascript:window.history.go(-1)';
          } else {
            $.messageBox(res.message, 600);
          }
        })
        .catch(function(error) {
          console.log(error.status);
        });
    });
  });
})();
