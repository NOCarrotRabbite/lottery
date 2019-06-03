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
        if (res.status == true) {
          var reg = new RegExp('\r\n', 'g');
          notice_content = res.data[0].notice_content.replace(reg, '<br/>');
          $('.activity-title').text(res.data[0].notice_title);
          $('.activity-date').text(res.data[0].notice_start_time);
          $('.activity-particulars-content').html(notice_content);
        } else {
          $.messageBox(res.message, 600);
        }
      })
      .catch(function(error) {
        console.log(error.status);
      });
  });
})();
