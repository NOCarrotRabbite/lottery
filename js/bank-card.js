(function() {
  $(function() {
    //获取银行卡数据
    /*  $.jsonAjax(API.REG_USER_API, 'POST', data)
      .then(function(data) {
        if (data.status == true) {
          window.location.href = '#/login';
        }
      })
      .catch(function(error) {
        console.log(error.status);
      }); */
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
