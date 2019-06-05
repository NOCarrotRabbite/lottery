(function() {
    $(function () {
        let hallId = $.getParamsUrl().query.type;
        // 初始化房间信息（暂时只有房间人数随机数）
        $.jsonAjax(API.GET_HALL_API, 'POST', {"hall_id": hallId}).then(function(res) {
            if (res.status) {
                if (0 < res.data.length) {
                    $('#room1-num').text(res.data[0].game_num);
                    $('#room2-num').text(res.data[1].game_num);
                    $('#room3-num').text(res.data[2].game_num);
                }
            } else {
                $.messageBox('获取房间人数失败，请稍后刷新！')
            }
        }).catch(function (error) {
            console.log(error);
        });

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
