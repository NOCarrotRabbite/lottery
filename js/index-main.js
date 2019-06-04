(function() {
  let myMarquee = 0; // 定义定时器id
  $(function () {
      // 给banner添加点击事件
      $('.banner').on('click', function() {
          window.location.href = '#/activity-particulars';
      });

      // 页面初始化中奖排行榜
      getWinningRank();
      let getRankTimer = setInterval(function () {
        if($('#rank-list-box').length) {
            getWinningRank();
        } else {
            clearInterval(getRankTimer);
        }
      }, 3 * 60 * 1000);
  });

// 中奖记录自动向上滚动实现
let makeListScroll = function () {
    clearInterval(myMarquee);
    let speed = 50;
    let listBox = document.getElementById('rank-list-box');
    let listOne = document.getElementById('rank-list1');
    let listTwo = document.getElementById('rank-list2');
    if (listOne.offsetHeight > listBox.offsetHeight) {
        listTwo.innerHTML = listOne.innerHTML;
        function Marquee() {
            if (listBox.scrollTop >= ((listOne.offsetHeight + listTwo.offsetHeight) - listBox.offsetHeight)) {
                listBox.scrollTop = 0;
            } else {
                listBox.scrollTop++;
            }
        }
        myMarquee = setInterval(function () {
            if (0 === $('#rank-list1').length) {
                clearInterval(myMarquee);
                myMarquee = null;
                return;
            }
            Marquee();
        }, speed);
        /*listBox.onmouseover = function () {
            clearInterval(myMarquee);
        };
        listBox.onmouseout = function () {
            if (0 === $('#rank-list1').length) {
                clearInterval(myMarquee);
                myMarquee = null;
                return;
            }
            Marquee();
        }*/
    };
};

    // 获取中奖排行榜
    let getWinningRank = function () {
        $.jsonAjax(API.GET_WINNING_API, 'POST', {}).then(function(res) {
            if (res.status) {
                let html = '';
                if (0 < res.data.length) {
                    for (let i in res.data) {
                        html += '<li>\n' +
                            '           <span>' + res.data[i].nick_name.substring(0, 1) + '***</span>\n' +
                            '           <span>' + res.data[i].bet_hall_name + '</span>\n' +
                            '           <span class="color-red">喜中' + parseFloat(res.data[i].win_money).toFixed(2) + '元</span>\n' +
                            '    </li>\n'
                    }
                } else {
                    html = '暂无数据';
                }
                $('#rank-list1').html(html);
                // 滚动中奖排行榜
                makeListScroll();
            } else {
                $('#rank-list1').html('<li>暂无数据</li>');
            }
        }).catch(function (error) {
            $('#rank-list1').html('<li>暂无数据</li>');
            console.log(error);
        });
    }
})();
