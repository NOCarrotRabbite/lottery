(function() {
  $(function() {
    //请求页面展示数据
    /*  $.jsonAjax(API.REG_USER_API, 'POST', data)
      .then(function(data) {
        if (data.status == true) {
          window.location.href = '#/login';
        }
      })
      .catch(function(error) {
        console.log(error.status);
      }); */
    //复制官网
    $.copy($('.copy-url'), $('.url-text'), '复制成功，可以发送给朋友们了~');
    //复制QQ
    $.copy($('.qq-copy'), $('.qq-num'), '复制成功，可以发送给朋友们了~');
    //复制微信
    $.copy(
      $('.we-chat-copy'),
      $('.we-chat-num'),
      '复制成功，可以发送给朋友们了~'
    );
  });
})();
