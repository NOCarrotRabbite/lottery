(function() {
  $(function() {
    let user_num = localStorage.getItem('tel');
    let data = {
      user_num: user_num,
      state: 'cz_record'
    };
    $.jsonAjax(API.USER_RECORD, 'POST', data)
      .then(function(res) {
        if (res.status == true) {
          for (let i = 0; i < res.data.length; i++) {
            let dom =
              '<li>\n' +
              '          <span>' +
              res.data[i].invest_time +
              '</span>\n' +
              '          <span>' +
              res.data[i].invest_num +
              '</span>\n' +
              '          <span>' +
              res.data[i].invest_type +
              '</span>\n' +
              '        </li>';
            $('.recharge-record-content').append(dom);
          }
        }
      })
      .catch(function(error) {
        console.log(error.status);
      });
  });
})();
