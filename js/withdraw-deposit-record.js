(function() {
  $(function() {
    let user_num = localStorage.getItem('tel');
    let data = {
      user_num: user_num,
      state: 'tx_record'
    };
    $.jsonAjax(API.USER_RECORD_API, 'POST', data)
      .then(function(res) {
        if (res.status == true) {
          for (let i = 0; i < res.data.length; i++) {
            let dom =
              '<li>\n' +
              '          <span>' +
              res.data[i].draw_time +
              '</span>\n' +
              '          <span>' +
              res.data[i].draw_num +
              '</span>\n' +
              '          <span>' +
              res.data[i].draw_type +
              '</span>\n' +
              '        </li>';
            $('.withdraw-deposit-record-content').append(dom);
          }
        }
      })
      .catch(function(error) {
        console.log(error.status);
      });
  });
})();
