(function() {
  $(function() {
    //请求页面数据
    let user_num = localStorage.getItem('tel');
    let url = window.location.href;
    let notice_id = url.substr(url.length - 1);
    let data = {
      user_num: user_num,
      state: 'obt_user_notice',
      notice_id: notice_id
    };
    $.jsonAjax(API.NOTICE_API, 'POST', data)
      .then(function(res) {
        if (res.status == true) {
          $('.message-title').text(res.data.notice_title);
          $('.message-date').text(res.data.notice_time);
          $('.my-message-content').text(res.data.notice_content);
        } else {
          $.messageBox(res.message);
        }
      })
      .catch(function(error) {
        console.log(error.status);
      });
  });
})();
