(function() {
  $(function() {
    let user_num = localStorage.getItem('tel');
    let data = {
      user_num: user_num,
      state: 'have_bank_card'
    };
    queryData(data, 1);
    //获取银行卡数据-验证提现密码-是否绑卡-绑卡/修改银行卡
    function queryData(obj, state) {
      $.jsonAjax(API.DRAW_CORE_API, 'POST', obj)
        .then(function(res) {
          if (res.status == true) {
            if (state == 1) {
              if (res.have_card_id == 1) {
                $('.name').val(res.data.card_user_name);
                $('.bank').val(res.data.card_name);
                $('.card-num').val(res.data.card_id);
              }
            } else if (state == 2) {
              if (res.status == true) {
                window.location.href = 'javascript:window.history.go(-1)';
              } else {
                $.messageBox(res.message, 600);
              }
            }
          } else {
            $.messageBox(res.message, 600);
          }
        })
        .catch(function(error) {
          console.log(error.status);
        });
    }
    //点击银行名称选择银行（弹框）
    $('.bank').on('click', function() {
      $('.dialog').show();
      $('.select-bank li .radio-bg').removeClass('active');
      let dom = $('.select-bank>li');
      let text = $('.bank').val();
      for (let i = 0; i < dom.length; i++) {
        let regText = dom[i].innerText;
        if (text == regText) {
          $(dom[i])
            .children('div')
            .addClass('active');
        }
      }
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
      //提现密码
      let draw_password = $('.password').val();
      //开户行
      let card_name = $('.bank').val();
      //卡号
      let card_id = $('.card-num').val();
      //开户人姓名
      let card_user_name = $('.name').val();
      let obj = {
        user_num: user_num,
        state: 'bind_bank_card',
        draw_password: draw_password,
        card_name: card_name,
        card_id: card_id,
        card_user_name: card_user_name
      };
      queryData(obj, 2);
    });
  });
})();
