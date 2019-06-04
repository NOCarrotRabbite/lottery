$.extend({
  jsonAjax: function(url, type, param) {
    return new Promise(function(resolve, reject) {
      $.ajax({
        url: 'http://192.168.1.247' + url,
        type: type,
        data: param || '',
        dataType: 'json',
        /*beforeSend: function (xhr) {
            xhr.setRequestHeader("Content-type", "application/json; charset=utf-8");
        },*/
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
    className.on('input', function() {
      let value = className.val();
      if (value) {
        classIcon.show();
      } else {
        classIcon.hide();
      }
    });
    classIcon.on('click', function() {
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
      $.messageBox(msg, 600);
    });
  },
  //提示框
  messageBox: function(msg, time) {
    $('.msg-box').text(msg);
    $('.msg-box').show(time);
    setTimeout(function() {
      $('.msg-box').hide(time);
    }, 1600);
  },
  //时间格式化
  dateFtt: function(fmt, date) {
    let o = {
      'M+': date.getMonth() + 1, // 月份
      'd+': date.getDate(), // 日
      'h+': date.getHours(), // 小时
      'm+': date.getMinutes(), // 分
      's+': date.getSeconds(), // 秒
      'q+': Math.floor((date.getMonth() + 3) / 3), // 季度
      'S+': date.getMilliseconds() // 毫秒
    };

    if (/(y+)/.test(fmt))
      fmt = fmt.replace(
        RegExp.$1,
        (date.getFullYear() + '').substr(4 - RegExp.$1.length)
      );
    for (let k in o) {
      if (new RegExp('(' + k + ')').test(fmt)) {
        fmt = fmt.replace(
          RegExp.$1,
          RegExp.$1.length == 1
            ? o[k]
            : ('00' + o[k]).substr(('' + o[k]).length)
        );
      }
    }
    return fmt;
  },
  //弹框
  dialogBox: function(msg, url, callback) {
    $('.dialog-box-content').text(msg);
    $('.dialog-box').show();
    $('.dialog-layer').on('click', function() {
      $('.dialog-box').hide();
    });
    $('.dialog-box-submit').on('click', function() {
      $('.dialog-box').hide();
      if (url) {
        window.location.href = url;
      }
      if (callback) {
        callback();
      }
    });
  },
  //获取路由的路径和详细参数
  getParamsUrl:function(){
      var hashDeatail = location.hash.split("?"),
          hashName = hashDeatail[0].split("#")[1],//路由地址
          params = hashDeatail[1] ? hashDeatail[1].split("&") : [],//参数内容
          query = {};
      for(var i = 0;i < params.length ; i++){
          var item = params[i].split("=");
          query[item[0]] = item[1]
      }
      return 	{
          path:hashName,
          query:query
      }
  }
});
