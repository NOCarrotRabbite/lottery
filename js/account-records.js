(function() {
  $(function() {
    let user_num = localStorage.getItem('tel');
    let data = {
      user_num: user_num,
      state: 'change_record'
    };
    $.jsonAjax(API.USER_RECORD_API, 'POST', data)
      .then(function(res) {
        if (res.status == true) {
          for (let i = 0; i < res.data.length; i++) {
            let dom =
              '<li>\n' +
              '          <span>' +
              res.data[i].time +
              '</span>\n' +
              '          <span>' +
              res.data[i].money +
              '</span>\n' +
              ' <span>' +
              res.data[i].condition +
              '</span>\n' +
              '        </li>';
            $('.account-records-content').append(dom);
          }
        } else {
          $.messageBox(res.message);
        }
      })
      .catch(function(error) {
        console.log(error.status);
      });
  });
})();
