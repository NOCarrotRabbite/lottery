(function() {
  $(function() {
    let user_num = localStorage.getItem('tel');
    let nick_name = localStorage.getItem('nickname');
    $('.account-code').text(user_num);
    $('.account-name').text(nick_name);
    $.jsonAjax(API.TODAY_GAIN_API, 'POST', { user_num: user_num })
      .then(function(res) {
        if (res.status == true) {
          let money = (Number(res.data.gold) + Number(res.data.money)).toFixed(2);
          let gain_money = res.data.gain_money.toFixed(2);
          $('.money').text(money);
          $('.gain-money').text(gain_money);
        }
      })
      .catch(function(error) {
        console.log(error.status);
      });
  });
})();
