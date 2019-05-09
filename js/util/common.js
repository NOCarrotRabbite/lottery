$.extend({
  jsonAjax: function(url, type, param) {
    return new Promise(function(resolve, reject) {
      $.ajax({
        url: 'http://192.168.1.247' + url,
        type: type,
        data: param || '',
        dataType: 'json',
        success: function(data) {
          resolve(data);
        },
        error: function(error) {
          reject(error);
        }
      });
    });
  },
  addPageScript: function(path, signal) {
    let _body = document.getElementsByTagName('body')[0];
    let scriptEle = document.createElement('script');
    scriptEle.type = 'text/javascript';
    scriptEle.src = path;
    scriptEle.async = true;
    if (signal == 0) {
      _body.appendChild(scriptEle);
    } else {
      $("script[src='" + path + "']").remove();
      _body.appendChild(scriptEle);
    }
  },
  inputClear: function(className, classIcon) {
    className.on('input', () => {
      let value = className.val();
      if (value) {
        classIcon.show();
      } else {
        classIcon.hide();
      }
    });
    classIcon.on('click', () => {
      className.val('');
      classIcon.hide();
    });
  },
  copy: function(btn, text, msg) {
    btn.on('click', function() {
      text.select(); // 选择对象
      document.execCommand('Copy'); // 执行浏览器复制命令
      $('.message-box').text(msg);
      $('.message-box').show(400);
      setTimeout(function() {
        $('.message-box').hide(400);
      }, 2000);
    });
  }
});
