(function() {
  $(function() {
    let user_num = localStorage.getItem('tel');
    //请求页面数据
    $.jsonAjax(API.GET_USER_MONER_API, 'POST', { user_num: user_num })
      .then(function(res) {
        if (res.status == true) {
          $('.wallet-gold').text(res.data.glod);
          $('.wallet-money').text(res.data.money);
        } else {
          $.messageBox(res.message,600);
        }
      })
      .catch(function(error) {
        console.log(error.status);
      });
    $('.my-bank').on('click', function() {
      let obj = {
        user_num: user_num,
        state: 'have_draw_password'
      };
      $.jsonAjax(API.DRAW_CORE_API, 'POST', obj)
        .then(function(res) {
          if (res.status == true) {
            if (res.have_draw_password == 0) {
              $.dialogBox('请设置提现密码!', '#/set-withdraw-deposit-pwd');
            } else {
              window.location.href = '#/bank-card';
            }
          }
        })
        .catch(function(error) {
          console.log(error.status);
        });
    });
    $('.my-withdraw-deposit').on('click', function() {
      queryData(1);
      function queryData(state) {
        let obj = {
          user_num: user_num,
          state: state == 1 ? 'have_draw_password' : 'have_bank_card'
        };
        $.jsonAjax(API.DRAW_CORE_API, 'POST', obj)
          .then(function(res) {
            if (res.status == true) {
              if (state == 1) {
                if (res.have_draw_password == 0) {
                  $.dialogBox('请设置提现密码!', '#/set-withdraw-deposit-pwd');
                } else {
                  let obj = {
                    user_num: user_num,
                    state: 'have_bank_card'
                  };
                  queryData(2);
                }
              } else if (state == 2) {
                if (res.have_card_id == 0) {
                  $.dialogBox('请绑定银行卡!', '#/bank-card');
                } else {
                  window.location.href = '#/withdraw-deposit';
                }
              }
            }
          })
          .catch(function(error) {
            console.log(error.status);
          });
      }
    });
  });
})();
