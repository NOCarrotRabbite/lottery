(function() {
    $(function () {
        /*let hallId = $.getParamsUrl().query.type;
        // 初始化房间信息
        $.jsonAjax(API.GET_HALL_API, 'POST', {"hall_id": hallId}).then(function(res) {
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
        });*/

    });
    // 刷新本地用户金币余额
    $.jsonAjax(API.GET_USER_MONER_API, 'POST', {"user_num": localStorage.getItem('tel')}).then(function(res) {
        if (res.status) {
            localStorage.setItem('gold', res.data.gold);
            localStorage.setItem('money', res.data.money);
        }
    }).catch(function (error) {
        console.log(error);
    });
})();
