(function() {
  $(function() {
    //请求页面数据
    let user_num = localStorage.getItem('tel');
    let url = window.location.href;
    let notice_id = url.substr(url.length - 1);
    let data = {
      user_num: user_num,
      state: 'obt_game_notice',
      notice_id: notice_id
    };
    $.jsonAjax(API.NOTICE_API, 'POST', data)
      .then(function(res) {
        if (res.status == true) {
          $('.notice-title').text(res.data.notice_title);
          $('.notice-date').text(res.data.notice_time);
          $('.notice-particulars-content').text(res.data.notice_content);
        } else {
          $.messageBox(res.message, 600);
        }
      })
      .catch(function(error) {
        console.log(error.status);
      });
  });
})();
