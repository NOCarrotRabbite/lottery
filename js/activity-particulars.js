(function() {
  $(function() {
    //请求页面数据
    //请求页面数据
    let user_num = localStorage.getItem('tel');
    let data = {
      user_num: user_num,
      state: 'obt_game_activity'
    };
    $.jsonAjax(API.NOTICE_API, 'POST', data)
      .then(function(res) {
        console.log('res', res);
        if (res.status == true) {
          $('.activity-title').text(res.data.notice_title);
          $('.activity-date').text(res.data.notice_time);
          $('.activity-particulars-content').text(res.data.notice_content);
        }
      })
      .catch(function(error) {
        console.log(error.status);
      });
  });
})();
