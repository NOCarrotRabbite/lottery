(function() {
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
    let speed = 40;
    let listBox = document.getElementById('rank-list-box');
    let listOne = document.getElementById('rank-list1');
    let listTwo = document.getElementById('rank-list2');
    if (listOne.offsetHeight > listBox.offsetHeight) {
        listTwo.innerHTML = listOne.innerHTML;
        function Marquee() {
            if (listBox.scrollTop >= ((listOne.offsetHeight + listTwo.offsetHeight) - listBox.offsetHeight)) {
                listBox.scrollTop = 0;
            } else {
                listBox.scrollTop = listBox.scrollTop + 1;
            }
        }
        let myMarquee = setInterval(Marquee, speed);
        listBox.onmouseover = function () {
            clearInterval(myMarquee);
        };
        listBox.onmouseout = function () {
            myMarquee = setInterval(Marquee, speed);
        }
    };
};

    // 获取中奖排行榜
    let getWinningRank = function () {
        $.jsonAjax(API.GET_WINNING_API, 'POST', {}).then(function(res) {
            if (res.status) {
                let html = '';
                for (let i in res.data) {
                    html += '<li>\n' +
                        '           <span>' + res.data[i].nick_name + '</span>\n' +
                        '           <span>' + res.data[i].bet_hall_name + '</span>\n' +
                        '           <span class="color-red">喜中' + parseFloat(res.data[0].win_money).toFixed(2) + '元</span>\n' +
                        '    </li>\n'
                }
                $('#rank-list1').html(html);
                makeListScroll();
            } else {
                $('#rank-list1').html('<li>暂无数据</li>');
            }
        }).catch(function (error) {
            console.log(error);
        });
    }
})();
