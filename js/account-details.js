//页面操作
(function() {
  $(function() {
    //请求页面数据
    let user_num = localStorage.getItem('tel');
    function queryData(start_time, end_time, hall_id) {
      //重置列表数据
      $('.account-details-list>li')
        .not(':first')
        .remove();
      //参数
      let data = {
        user_num: user_num,
        state: 'acc_record',
        start_time: start_time ? start_time + ' 00:00:00' : '',
        end_time: end_time ? end_time + ' 00:00:00' : '',
        hall_id: hall_id ? hall_id : ''
      };
      //请求数据
      $.jsonAjax(API.USER_RECORD_API, 'POST', data)
        .then(function(res) {
          if (res.status == true) {
            for (let i = 0; i < res.data.length; i++) {
              let dom =
                '<li>\n' +
                '          <span>' +
                res.data[i].bet_time +
                '</span>\n' +
                '          <span>' +
                res.data[i].hall_name +
                '</span>\n' +
                '          <span>' +
                res.data[i].bet_money +
                '</span>\n' +
                '          <span>' +
                res.data[i].condition +
                '</span>\n' +
                '        </li>';
              $('.account-details-list').append(dom);
            }
          } else {
            $.messageBox(res.message, 600);
          }
        })
        .catch(function(error) {
          console.log(error.status);
        });
    }
    queryData();
    let mask_layer = document.querySelector('.mask-layer');
    let screen = document.querySelector('.screen');
    let select_kind = document.querySelector('.select-kind');
    $(function() {
      //选择筛选时间
      $('.date').on('click', function() {
        mask_layer.style.zIndex = '998';
        $('.ic__datepicker').show();
      });
      $('.date').each(function() {
        $(this).ionDatePicker({
          lang: 'zh-cn',
          format: 'YYYY-MM-DD'
        });
      });
    });
    //点击筛选按钮显示模态框
    $('.filtrate-btn').on('click', () => {
      mask_layer.style.zIndex = 1;
      screen.style.zIndex = 2;
      screen.style.right = '0';
      screen.style.width = '80%';
    });
    //点击蒙层隐藏对应内容
    $('.mask-layer').on('click', () => {
      if (mask_layer.style.zIndex == '998') {
        mask_layer.style.zIndex = '1';
        select_kind.style.zIndex = -3;
      } else {
        screen.style.zIndex = -1;
        mask_layer.style.zIndex = -2;
        select_kind.style.zIndex = -3;
        screen.style.width = '0';
        screen.style.right = '-80%';
      }
    });
    //选择彩种
    $('.kind').on('click', () => {
      select_kind.style.zIndex = '999';
      mask_layer.style.zIndex = '998';
      if ($('.kind').text() == '全部彩种') {
        $('.select-kind li .radio-init').addClass('active');
      }
    });
    //确认选中的彩种
    $('.select-kind li').on('click', function() {
      let value = $(this)
        .text()
        .replace(/\s+/g, '');
      $('.select-kind li .radio-bg').removeClass('active');
      $(this)
        .find('.radio-bg')
        .addClass('active');
      $('.kind').text(value);
      mask_layer.style.zIndex = '1';
      select_kind.style.zIndex = -3;
    });
    //取消筛选
    $('.close').on('click', () => {
      mask_layer.style.zIndex = -2;
      screen.style.zIndex = -1;
      select_kind.style.zIndex = -3;
      screen.style.right = '-80%';
      screen.style.width = '0';
      $('.begin-date').val('');
      $('.end-date').val('');
      $('.kind').text('全部彩种');
      $('.select-kind li .radio-bg').removeClass('active');
      queryData();
    });
    //确定筛选
    $('.submit').on('click', () => {
      queryData(
        $('.begin-date').val(),
        $('.end-date').val(),
        $('.kind').text()
      );
      mask_layer.style.zIndex = -2;
      screen.style.zIndex = -1;
      select_kind.style.zIndex = -3;
      screen.style.right = '-80%';
      screen.style.width = '0';
    });
  });
})();
