(function() {
  $(function() {
    let user_num = localStorage.getItem('tel');
    //页面数据
    //获取银行卡数据-验证提现密码-是否绑卡-绑卡/修改银行卡
    queryData();
    function queryData() {
      let obj = {
        user_num: user_num,
        state: 'have_bank_card'
      };
      $.jsonAjax(API.DRAW_CORE_API, 'POST', obj)
        .then(function(res) {
          if (res.status == true) {
            if (res.have_card_id == 1) {
              $('.name').text(res.data.card_user_name);
              $('.bank').text(res.data.card_name);
              $('.num').text(res.data.card_id);
            }
          }
        })
        .catch(function(error) {
          console.log(error.status);
        });
    }
    //自动获取焦点
    $('.money').focus();
    $('.money').val('');
    $('.password').val('');

    /*    } */
    //输入框删除icon控制
    $.inputClear($('.money'), $('.money').next());
    $.inputClear($('.password'), $('.password').next());
    var submit = function() {
      let time = $.dateFtt('yyyy-MM-dd hh:mm:ss', new Date());
      let data = {
        state: 'user_draw',
        user_num: user_num,
        time: time,
        type: '银行卡',
        draw_card_user_name: $('.name').text(),
        draw_card_name: $('.bank').text(),
        draw_card_id: $('.num').text(),
        money: $('.money').val(),
        draw_password: $('.password').val()
      };
      $.jsonAjax(API.INVEST_DRAW_API, 'POST', data)
        .then(function(res) {
          if (res.status == true) {
            $.messageBox(res.message, 600);
            window.location.href = 'javascript:window.history.go(-1)';
          } else {
            $.messageBox(res.message, 600);
          }
        })
        .catch(function(error) {
          console.log(error.status);
        });
    };
    //提交提现申请
    $('.form-submit').on('click', function() {
      let money = $('.money').val();
      let pwd = $('.password').val();
      if (money && pwd) {
        $.dialogBox('您确定提现吗?', '', submit);
      } else if (!money) {
        $.messageBox('请输入充值金额!', 600);
      } else if (!pwd) {
        $.messageBox('请输入提现密码!', 600);
      }
    });
  });
})();
