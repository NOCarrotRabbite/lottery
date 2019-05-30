(function() {
  $(function() {
    //获取银行卡数据
    function queryData(obj, state) {
      $.jsonAjax(API.DRAW_CORE, 'POST', obj)
        .then(function(res) {
          if (res.status == true) {
            console.log('1111');
            if (state == 1) {
              if (res.have_draw_password == 0) {
                console.log('请设置提现密码！');
              } else {
                let obj = {
                  user_num: user_num,
                  state: 'have_bank_card'
                };
                console.log('222');
                queryData(obj, 2);
              }
            } else if (state == 2) {
              console.log('333');
              if (res.have_card_id == 1) {
                console.log('444');
                console.log('已绑定银行卡');
              } else {
                console.log('5555');
                console.log('未绑定银行卡');
              }
            } else if (state == 3) {
              console.log('提交绑定银行卡');
            }
          }
        })
        .catch(function(error) {
          console.log(error.status);
        });
    }
    let user_num = localStorage.getItem('tel');
    let data = {
      user_num: user_num,
      state: 'have_draw_password'
    };
    queryData(data, 1);
    /* function queryData() {
      let user_num = localStorage.getItem('tel');
      let data = {
        user_num: user_num,
        state: 'have_draw_password'
      };
      $.jsonAjax(API.DRAW_CORE, 'POST', data)
        .then(function(res) {
          if (res.have_draw_password == 0) {
           alert('请设置提现密码！');
            
          } else {
            let obj = {
              user_num: user_num,
              state: 'have_bank_card'
            };
            $.jsonAjax(API.DRAW_CORE, 'POST', obj)
              .then(function(res) {
                if (res.status == true) {
                  console.log('已绑定银行卡');
                }
              })
              .catch(function(error) {
                console.log(error.status);
              });
          }
        })
        .catch(function(error) {
          console.log(error.status);
        });
    }
    queryData(); */
    //点击银行名称选择银行（弹框）
    $('.bank').on('click', function() {
      $('.dialog').show();
    });
    //点击蒙层隐藏弹框
    $('.obscuration').on('click', function() {
      $('.dialog').hide();
    });
    //选中银行隐藏弹框
    $('.select-bank li').on('click', function() {
      let value = $(this)
        .text()
        .replace(/\s+/g, '');
      $('.select-bank li .radio-bg').removeClass('active');
      $(this)
        .find('.radio-bg')
        .addClass('active');
      $('.bank').val(value);
      $('.dialog').hide();
    });
    //删除icon控制
    $.inputClear($('.name'), $('.name').next());
    $.inputClear($('.card-num'), $('.card-num').next());
    $.inputClear($('.password'), $('.password').next());
    //提交银行信息
    $('.bank-card-submit').on('click', function() {
      let data = {
        name: $('.name').val(),
        bank: $('.bank').val(),
        cardNum: $('.card-num').val(),
        password: $('.password').val()
      };
      /*  $.jsonAjax(API.REG_USER_API, 'POST', data)
      .then(function(data) {
        if (data.status == true) {
          window.location.href = '#/login';
        }
      })
      .catch(function(error) {
        console.log(error.status);
      }); */
    });
  });
})();
