(function() {
  $(function() {
    //复制
    $.copy($('.btn'), $('.color-red'), '用户名复制成功，您可以扫码支付了');
    //提交充值申请
    $('.payment-submit').on('click', function() {
      let user_num = localStorage.getItem('tel');
      let url = window.location.href;
      let code = url.substr(url.length - 1);
      let time = $.dateFtt('yyyy-MM-dd hh:mm:ss', new Date());
      let data = {
        state: 'user_invest',
        money: $('.money').val(),
        user_num: user_num,
        time: time,
        type: code == 1 ? '支付宝' : '微信'
      };
      $.jsonAjax(API.INVEST_DRAW_API, 'POST', data)
        .then(function(res) {
          console.log(res);
          if (res.status == true) {
            $.messageBox(res.message);
            window.location.href = 'javascript:window.history.go(-1)';
          } else {
            $.messageBox(res.message);
          }
        })
        .catch(function(error) {
          console.log(error.status);
        });
    });
  });
})();
