(function() {
  $(function() {
    let user_num = localStorage.getItem('tel');
    let nickname = localStorage.getItem('nickname');
    $('.name').text(nickname);
    //请求页面数据
    $.jsonAjax(API.GET_USER_MONER_API, 'POST', { user_num: user_num })
      .then(function(res) {
        if (res.status == true) {
          $('.personal-center-gold').text(res.data.glod);
          $('.personal-center-money').text(res.data.money);
        } else {
          $.messageBox(res.message, 600);
        }
      })
      .catch(function(error) {
        console.log(error.status);
      });
  });
})();
