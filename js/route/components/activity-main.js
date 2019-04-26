SPA_RESOLVE_INIT = function(transition, sigal) {
    $('#footer').show();
    $('#header').html('<span class="size-36">活动中心</span>');
    $('#header').css('justify-content', 'center');
    $('#main').html('\n' +
        '    <div class="activity">\n' +
        '      <div class="banner">\n' +
        '        <p class="banner-text">彩金活动</p>\n' +
        '      </div>\n' +
        '      <div class="activity-content">\n' +
        '        <div class="tab">\n' +
        '          <span class="tab-nav active">通知公告</span>\n' +
        '          <span class="tab-nav">我的消息</span>\n' +
        '        </div>\n' +
        '        <ul class="tab-content on">\n' +
        '          <a href="#">\n' +
        '            <li>\n' +
        '              <span>\n' +
        '                全网返奖率最高1\n' +
        '              </span>\n' +
        '              <span>2019-02-22 00:29:49</span>\n' +
        '            </li>\n' +
        '          </a>\n' +
        '          <a href="#">\n' +
        '            <li>\n' +
        '              <span>\n' +
        '                全网返奖率最高2\n' +
        '              </span>\n' +
        '              <span>2019-02-22 00:29:49</span>\n' +
        '            </li>\n' +
        '          </a>\n' +
        '          <a href="#">\n' +
        '            <li>\n' +
        '              <span>\n' +
        '                全网返奖率最高3\n' +
        '              </span>\n' +
        '              <span>2019-02-22 00:29:49</span>\n' +
        '            </li>\n' +
        '          </a>\n' +
        '        </ul>\n' +
        '        <ul class="tab-content">\n' +
        '          <a href="#">\n' +
        '            <li>\n' +
        '              <span>\n' +
        '                我的消息1\n' +
        '              </span>\n' +
        '              <span>2019-02-22 00:29:49</span>\n' +
        '            </li>\n' +
        '          </a>\n' +
        '          <a href="#">\n' +
        '            <li>\n' +
        '              <span>\n' +
        '                我的消息2\n' +
        '              </span>\n' +
        '              <span>2019-02-22 00:29:49</span>\n' +
        '            </li>\n' +
        '          </a>\n' +
        '          <a href="#">\n' +
        '            <li>\n' +
        '              <span>\n' +
        '                我的消息3\n' +
        '              </span>\n' +
        '              <span>2019-02-22 00:29:49</span>\n' +
        '            </li>\n' +
        '          </a>\n' +
        '        </ul>\n' +
        '      </div>\n' +
        '    </div>');
    let _body= document.getElementsByTagName('body')[0];
    let scriptEle= document.createElement('script');
    scriptEle.type= 'text/javascript';
    scriptEle.src= 'js/activity.js';
    scriptEle.async = true;
    if(sigal == 0) {
        _body.appendChild(scriptEle);
    } else {
        $("script[src='js/activity.js']").remove();
        _body.appendChild(scriptEle);
    }
};
