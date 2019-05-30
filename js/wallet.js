(function() {
  $(function() {
    let user_num = localStorage.getItem('tel');
    //请求页面数据
    $.jsonAjax(API.GET_USER_MONER_API, 'POST', { user_num: user_num })
      .then(function(res) {
        if (res.status == true) {
          $('.wallet-gold').text(res.data.glod);
          $('.wallet-money').text(res.data.money);
        }
      })
      .catch(function(error) {
        console.log(error.status);
      });
  });
})();
