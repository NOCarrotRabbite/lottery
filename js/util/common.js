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
    className.on('input', function () {
      let value = className.val();
      if (value) {
        classIcon.show();
      } else {
        classIcon.hide();
      }
    });
    classIcon.on('click', function (){
      className.val('');
      classIcon.hide();
    });
  },
  //复制
  copy: function(btn, text, msg) {
    btn.on('click', function() {
      let str = text.text(); //获取复制的文本
      var save = function(e) {
        e.clipboardData.setData('text/plain', str); //(复制的格式，复制的内容)
        e.preventDefault(); //阻止默认行为
      };
      document.addEventListener('copy', save);
      document.execCommand('Copy');
      $('.msg-box').text(msg);
      $('.msg-box').show(400);
      setTimeout(function() {
        $('.msg-box').hide(400);
      }, 2000);
    });
  }
});
