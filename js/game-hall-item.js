(function () {
    let interval_id = 0;    // 倒计时定时器id
    let fresh_interval = 0; // 更新投注消息定时器Id
    let countdown_time = {};    // 倒计时展示时间
    let issue = 0;     // 开盘期数
    $(function () {
        // 控制开盘、倒计时、封盘操作
        opening();
        // 初始化余额
        getUserBalance();
        // 绑定余额刷新按钮点击事件
        $('#refresh-balance').on('click', function () {
            getUserBalance();
        });
        // 实时刷新投注消息
        fresh_interval = setInterval(function () {
            freshBetMes();
        }, 1000);
        // 绑定撤单按钮事件
        $('.withdrawal').on('click', function () {
            // 判断是否封盘/开盘
            if ('已封盘' === $('#countdown').text()) {
                $.messageBox("已封盘，不能撤单！");
                return;
            }
            if ('未开盘' === $('#countdown').text()) {
                $.messageBox("未开盘，不能撤单！");
                return;
            }
            let param = { "hall_id": $('#param').attr('hall-type'), "small_id": $('#param').attr('item-type'), "user_num": localStorage.getItem('tel'), "bet_iss": issue };
            $.jsonAjax(API.CANCEL_BET_API, 'POST', param).then(function(res) {
                if (res.status) {
                    $.messageBox('本期所有投注已撤销，请刷新余额！');
                } else {
                    $.messageBox('撤单失败，' + res.message + '!');
                }

                console.log(res);
            }).catch(function (error) {
                console.log(error);
            });
        });
        // 动态添加元素中奖记录的显示与隐藏
        /*$('#item-result').on('click', '#resulst-icon', function () {
            $('#records-box').toggle();
        });*/
        // 已有元素的绑定事件
        $('#item-result').on('click', function () {
            $('.records-box').toggle();
        });
        // 投注蒙层的显示与隐藏
        $('#bet-toggle').on('click', function () {
            $('.bet-hidden').toggle();
        });
        $('.bet-hidden').on('click', function () {
            $('.bet-hidden').toggle();
        });
        $('.bet-hidden .bet-box').on('click', function(e) {
            e.stopPropagation();
        });

        // 点击左右箭头进行卡片的切换
        let i = 1;
        let type_map = { 1: '#bet-first', 2: '#bet-second', 3: '#bet-third' };
        $('.back-last').on('click', function () {
            if(i > 1) { i--; } else { i = 3; }
            for(let j in type_map) {
                if(j == i) {
                    $(type_map[j]).show();
                } else {
                    $(type_map[j]).hide();
                }
            }
        });
        $('.go-next').on('click', function () {
            if(i < 3) { i++; } else { i = 1; }
            for(let j in type_map) {
                if(j == i) {
                    $(type_map[j]).show();
                } else {
                    $(type_map[j]).hide();
                }
            }
        });

        // 左右滑动进行卡片的切换
        let slider = {
            // 判断设备是否支持touch事件
            touch: ('ontouchstart' in window || window.DocumentTouch && document instanceof DocumentTouch),
            slider: $('.bet-box'),
            // 事件
            events: {
                index: 0,
                slider: $('.bet-box'),
                handleEvent: function (event) {
                    let self = this;    // this 指events对象
                    if (event.type == 'touchstart') {
                        self.start(event);
                    } else if (event.type == 'touchmove') {
                        self.move(event);
                    } else if (event.type == 'touchend') {
                        self.end(event);
                    }
                },
                // 滑动开始
                start: function (event) {
                    let touch = event.targetTouches[0];     // 当前dom元素上所有touch， 取第一个touch
                    startPos = { x: touch.pageX, y: touch.pageY, time: new Date };     //取第一个touch坐标值
                    isScrolling = 0;    // 这个参数判断是垂直滑动还是水平滑动
                    for (let ele of this.slider) {
                        ele.addEventListener('touchmove', this, false);
                        ele.addEventListener('touchend', this, false);
                    }
                },
                // 移动
                move: function (event) {
                    // 当屏幕有多个touch或者页面被放缩过，就不执行move操作
                    if(event.targetTouches.length > 1 || event.scale && event.scale !== 1) return;
                    let  touch = event.targetTouches[0];
                    endPos = { x: touch.pageX - startPos.x, y: touch.pageY - startPos.y, };
                    isScrolling = Math.abs(endPos.x) < Math.abs(endPos.y) ? 1 : 0;      // isScrolling 为1时表示纵向滑动，为0时表示横向滑动
                    if (isScrolling === 0) {
                        event.preventDefault();
                    }
                },
                // 滑动释放
                end: function (event) {
                    let duration = new Date - startPos.time;   //滑动的持续时间
                    if (isScrolling === 0) {
                        if (Number(duration) > 10) {
                            // 判断左滑还是右滑，当偏移量大于10时执行
                            if (endPos.x > 10) {
                                if(i > 1) { i--; } else { i = 3; }
                                for(let j in type_map) {
                                    if(j == i) {
                                        $(type_map[j]).show();
                                    } else {
                                        $(type_map[j]).hide();
                                    }
                                }
                            } else if (endPos.x < -10) {
                                if(i < 3) { i++; } else { i = 1; }
                                for(let j in type_map) {
                                    if(j == i) {
                                        $(type_map[j]).show();
                                    } else {
                                        $(type_map[j]).hide();
                                    }
                                }
                            }
                        }
                    }
                    // 解绑事件
                    for (let ele of this.slider) {
                        endPos.x = 0;
                        endPos.y = 0;
                        ele.removeEventListener('touchmove', this, false);
                        ele.removeEventListener('touchend', this, false);
                    }
                }
            },
            // 初始化
            init: function () {
                let self = this;    // this指slider对象
                if (!!self.touch) {
                    for (let ele of this.slider) {
                        ele.addEventListener('touchstart', self.events, false);
                    }
                }
            }
        };
        slider.init();

        // 定义投注类型为tpey-one时的中奖和值数组
        let type_one = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27];
        // 根据具体投注值过滤出相应的数值
        let type_one_map = { '大': type_one.filter(filterData, '大'), '小': type_one.filter(filterData, '小'), '单': type_one.filter(filterData, '单'),
            '双': type_one.filter(filterData, '双'), '极大': type_one.filter(filterData, '极大'), '大单': type_one.filter(filterData, '大单'),
            '小单': type_one.filter(filterData, '小单'), '大双': type_one.filter(filterData, '大双'), '小双': type_one.filter(filterData, '小双'), '极小': type_one.filter(filterData,
            '极小') };
        // 点击具体type-one投注值显示对应的中奖值
        $('.type-one').on('click', function() {
            let key = $(this).find("p:first-child").text();

            if ($(this).attr('class').indexOf('active') >= 0) {
                $(this).removeClass('active');
            } else {
                $(this).addClass('active');
            }
            $('#type-one-tip').text('中奖和值： [ ' + type_one_map[key] + ' ]');
            getBetNumber();
        });
        $('.type-two').on('click', function () {
            let key = $(this).find("p:first-child").text();

            if ($(this).attr('class').indexOf('active') >= 0) {
                $(this).removeClass('active');
            } else {
                $(this).addClass('active');
            }
            $('#type-two-tip').text('中奖和值： [ ' + key + ' ]');
            getBetNumber();
        });
        let type_three_map = { '对': '三个号码中又两个相同即为中奖', '顺': '三个号码是相连的即为中奖', '豹': '三个号码一致即为中奖' }
        $('.type-three').on('click', function () {
            let key = $(this).find("p:first-child").text();

            if ($(this).attr('class').indexOf('active') >= 0) {
                $(this).removeClass('active');
            } else {
                $(this).addClass('active');
            }
            $('#type-three-tip').text(type_three_map[key]);
            getBetNumber();
        });
        // 初始化投注数
        getBetNumber();
        // 投注金额，选中注数，总计连动
        let index_array = new Array();
        $('.bet-amount').each(function (index) {
            index_array.push(index);
            $(this).bind('input', function () {
                let value = $(this).val();
                let num = $('.main-value .active').length;
                let reg = /^[1-9]\d*$/;
                if(value && reg.test(value)) {
                    $('.bet-price').text(num * value);
                } else {
                    $('.bet-price').text('0');
                }
                for (let i in index_array) {
                    if (index_array[i] != index) {
                        let j = index_array[i];
                        $('.bet-amount')[j].value = value;
                    }
                }
            });
        });
        // 最小投注按钮点击事件
        $('.min-bet').on('click', function () {
            $('.bet-amount').each(function () {
                $(this).val(5);
            });
            let num = $('.main-value .active').length;
            $('.bet-price').text(num * $('.bet-amount')[0].value);

        });
        // 双倍投注按钮点击事件
        $('.double-bet').on('click', function () {
            if($('.bet-amount')[0].value) {
                let base = $('.bet-amount')[0].value;
                $('.bet-amount').each(function () {
                    $(this).val(base * 2);
                });
                let num = $('.main-value .active').length;
                $('.bet-price').text(num * base * 2);
                return true;
            }
            alert('投注金额不可为空');
        });

        // 保存投注
        $('.bet-footer .betting').on('click', function () {
            // 判断是否封盘/开盘
            if ('已封盘' === $('#countdown').text()) {
                $.messageBox("已封盘，不能投注！");
                return;
            }
            if ('未开盘' === $('#countdown').text()) {
                $.messageBox("未开盘，不能投注！");
                return;
            }
            // 判断用户是否选择投注类型
            if (0 == $('#bet-num').text()) {
                $.messageBox("请选择投注内容！");
                return;
            }
            // 判断用户投注金额是否符合规则
            let reg = /^[1-9]\d*$/;
            if (!reg.test($('.bet-amount')[0].value)) {
                $.messageBox("投注金额不能为零或者小数！");
                return;
            }
            // 判断投注金额是否超过余额
            if (parseFloat($('#balance').text()) < parseFloat($('#bet-price').text())) {
                $.messageBox("余额不足！");
                return;
            }
            let save_bet_data = [];
            let child_data = { "user_num": localStorage.getItem('tel'), "bet_hall_id": $('#param').attr('hall-type'),
                "bet_small_id": $('#param').attr('item-type'), "bet_time": $.dateFtt('yyyy-MM-dd hh:mm:ss', new Date()), "bet_money": $('.bet-amount')[0].value, "bet_iss": issue, "bet_type": save_bet_data };

            $('.active').each(function () {
                let bet_value = $(this).children(':first').text();
                child_data.bet_type.push(bet_value);
            });
            $.jsonAjax(API.SAVE_BET_API, 'POST', child_data).then(function (data) {
                if (data.status) {
                    let balance = parseFloat($('#balance').text()) - parseFloat($('#bet-price').text());
                    $('#balance').text(balance.toFixed(2) + '元宝');
                    $.messageBox(data.message);
                    $('.bet-hidden').toggle();
                    return;
                }
                $.messageBox(data.message);
            }).catch(function (error) {
                console.log(error);
            });
        });
    });
    // type-one 中奖值过滤函数
    let filterData = function(item) {
        switch(this.toString()) {
            case '大':
                return item > 13;
                break;
            case '小':
                return item < 14;
                break;
            case '单':
                return item % 2 == 1;
                break;
            case '双':
                return item % 2 == 0;
                break;
            case '极大':
                return item > 24;
                break;
            case '大单':
                return item % 2 == 1 && item > 13;
                break;
            case '小单':
                return item % 2 == 1 && item < 14;
                break;
            case '大双':
                return item % 2 == 0 && item > 13;
                break;
            case '小双':
                return item % 2 == 0 && item < 14;
                break;
            case '极小':
                return item < 3;
                break;
        }
    };
    // 获取页面投注数,赋值给共投注文本
    let getBetNumber = function () {
        let num = $('.main-value .active').length;
        $('.bet-sum .bet-num').text(num);
        if($('.bet-amount')[0].value) {
            $('.bet-price').text(num * $('.bet-amount')[0].value);
        } else {
            $('.bet-price').text('0');
        }
    };

    // 获取两个时间的时间差
    let getTimeDiff = function (time1, time2) {
        let start_time = time1.getTime();
        let now_time = time2.getTime();
        // 两个时间之间的秒数差总和
        diff_total = now_time - start_time;
        // 计算相差天数
        let day = Math.floor(Math.abs(diff_total) / (24 * 3600 * 1000));
        // 计算小时数
        let leave1 = Math.abs(diff_total) % (24 * 3600 * 1000); // 计算天数后剩余的毫秒数
        let hours = Math.floor(leave1 / (3600 * 1000));
        // 获取整分
        let leave2 = leave1 % (3600 * 1000); // 计算小时数后剩余的毫秒数
        let minute = Math.floor(leave2 / (60 * 1000));
        // 获取剩余秒数
        let leave3 = leave2 % (60 * 1000); // 计算分钟数后剩余的毫秒数
        let second = leave3 / 1000;
        return { days: day, hours: hours,  mins: minute, secs: Math.floor(second)};
    };

    // 封盘倒计时函数
    let countdown = function (flag) {
        if(countdown_time.secs > 0) {
            countdown_time.secs --;
        }
        if(countdown_time.secs == 0 && countdown_time.mins > 0) {
            countdown_time.mins--;
            countdown_time.secs = 60;
        }
        if(countdown_time.mins == 0 && countdown_time.secs == 0) {
            clearInterval(interval_id);
            $('#countdown').text('已封盘');
            // 封盘后延时请求下一次数据
            if (flag == 0) { // 最后一期则不再请求下一期数据
                $('#open-info').html('今日');
                return;
            }
            $('#open-info').html('第 <span class="black" id="issue">' + issue + '</span> 期');
            setTimeout(opening, 1000);
            return;
        }
        $('#countdown').text(countdown_time.mins + '分钟' + countdown_time.secs + '秒');
    };

    // 开盘初始化函数
    let opening = function () {
        if(('onhashchange' in window) && ((typeof document.documentMode === "undefined") || document.documentMode ==  8)) {
            window.onhashchange = function() {
                clearInterval(interval_id);
                clearInterval(fresh_interval);
                interval_id = null;
                fresh_interval = null;

            };
        } else {
            clearInterval(interval_id);
            clearInterval(fresh_interval);
        }
        let hall_type = $('#param').attr('hall-type');
        let item_type = $('#param').attr('item-type');
        let query_param = { "hall_id": hall_type, "small_id": item_type };
        // 进入投注小厅加载相关数据
        $.jsonAjax(API.GAME_HALL_ITEM_AIP, 'POST', query_param).then(function (data) {
            // 初始化期数
            issue = data.new_data[0].iss_number;

            // 初始化往期中奖记录
            $('#item-result').html(
                '        <li class="result-text">\n' +
                '          <span>第 ' + data.old_data[0].iss_number + ' 期 &nbsp;</span>\n' +
                '          <span class="num">' + data.old_data[0].win_code_1 + '</span>&nbsp;\n' +
                '          <span>+</span>&nbsp;\n' +
                '          <span class="num">' + data.old_data[0].win_code_2 + '</span>&nbsp;\n' +
                '          <span>+</span>&nbsp;\n' +
                '          <span class="num">' + data.old_data[0].win_code_3 + '</span>&nbsp;\n' +
                '          <span>=</span>&nbsp;\n' +
                '          <span class="num res">' + data.old_data[0].win_sum + '</span>&nbsp;\n' +
                '          <span class="num big-small">' + data.old_data[0].is_big + '</span>&nbsp;\n' +
                '          <span class="num sigle-double">' + data.old_data[0].is_double + '</span>\n' +
                '        </li>\n' +
                '        <li class="resulst-icon" id="resulst-icon">          \n' +
                '         <svg class="icon" aria-hidden="true">\n' +
                '           <use xlink:href="#icon-xiala"></use>\n' +
                '         </svg>\n' +
                '        </li>\n');
            let records_html = '';
            for (let i in data.old_data) {
                records_html +='<li class="result-text">\n' +
                    '              <span>第 ' + data.old_data[i].iss_number + ' 期 &nbsp;</span>\n' +
                    '              <span class="num">' + data.old_data[i].win_code_1 + '</span>&nbsp;\n' +
                    '              <span>+</span>&nbsp;\n' +
                    '              <span class="num"> ' + data.old_data[i].win_code_2 + '</span>&nbsp;\n' +
                    '              <span>+</span>&nbsp;\n' +
                    '              <span class="num">' + data.old_data[i].win_code_3 + '</span>&nbsp;\n' +
                    '              <span>=</span>&nbsp;\n' +
                    '              <span class="num res">' + data.old_data[i].win_sum + '</span>&nbsp;\n' +
                    '              <span class="num big-small">' + data.old_data[i].is_big + '</span>&nbsp;\n' +
                    '              <span class="num sigle-double">' + data.old_data[i].is_double + '</span>\n' +
                    '            </li>\n'
            };
            $('#result-records').html(records_html);

            // 初始化封盘倒计时
            let start_time = new Date(data.new_data[0].start_time);
            /*let start_time = new Date('2019-05-21 17:34:00');*/
            // 计算开盘时间和当前时间的差值
            let diff = getTimeDiff(start_time, new Date());
            // 计算diff的秒数
            let diff_secs_total = diff.hours * 60 * 60 + diff.mins * 60 + diff.secs;
            if (start_time < new Date()) {  // 已经开盘
                if (diff.days > 0 || diff.hours > 0 || diff.mins >= data.new_data[0].continue_time) { // 开盘时间距离现在超过持续时间则封盘
                    $('#countdown').text('已封盘');
                    if (data.new_data[0].period_flag == 0) { // 最后一期则不再请求下一期数据
                        $('#open-info').html('今日');
                        return;
                    }
                    $('#open-info').html('第 <span class="black" id="issue">' + issue + '</span> 期');
                    // 封盘后延时请求下一次数据
                    setTimeout(opening, 1000);
                } else {
                    // 计算开盘持续时间的秒数
                    let five_secs = data.new_data[0].continue_time * 60;
                    // 计算开盘持续时间和diff的秒数差
                    let secs_diff = five_secs - diff_secs_total;
                    // 计算剩余分钟数
                    countdown_time.mins = Math.floor(secs_diff / 60);
                    // 计算除去分钟数后剩余秒数
                    countdown_time.secs = secs_diff % 60;
                    // 初始化倒计时描述
                    $('#open-info').html('距离 <span class="black" id="issue">' + issue + '</span> 期截止');
                    // 初始化倒计时剩余时间
                   $('#countdown').text(countdown_time.mins + '分钟' + countdown_time.secs + '秒');
                    // 设置定时器，实现倒计时功能
                    interval_id = setInterval(function () {
                        countdown(data.new_data[0].period_flag);
                    }, 1000);
                }
            } else {    // 还未开盘
                if (-1 == data.new_data[0].period_flag) {
                    $('#open-info').html('今日');
                    $('#countdown').text('未开盘');
                }
                setTimeout(function () {
                    $('#open-info').html('距离 <span class="black" id="issue">' + issue + '</span> 期截止');
                    // 计算持续时间的秒数
                    let continue_sec = data.new_data[0].continue_time * 60;
                    // 计算剩余分钟数
                    countdown_time.mins = Math.floor(continue_sec / 60);
                    // 计算除去分钟数后剩余秒数
                    countdown_time.secs = continue_sec % 60;
                    // 初始化倒计时剩余时间
                    $('#countdown').text(countdown_time.mins + '分钟' + countdown_time.secs + '秒');
                    interval_id = setInterval(function () {
                        countdown(data.new_data[0].period_flag);
                    }, 1000);
                }, diff_secs_total * 1000);
            }
        }).catch(function (error) {
            console.log(error);
        });
    };

    // 小厅投注消息更新
    let freshBetMes = function () {
        let param = { "hall_id": $('#param').attr('hall-type'), "small_id": $('#param').attr('item-type'), "time": $.dateFtt('yyyy-MM-dd hh:mm:ss', new Date()) };
        $.jsonAjax(API.REFRESH_BET_MSG_API, 'POST', param).then(function(res){
            if(res.status == true) {
                let _html_bet_msg = '';
                for(let i in res.data) {
                    if (res.data[i].user_num == localStorage.getItem('tel')) {
                        _html_bet_msg = '<div class="message-box">\n' +
                            '          <p>' + $.dateFtt('yyyy-MM-dd hh:mm:ss', new Date()) + '</p>\n' +
                            '          <div class="self-message">\n' +
                            '            <div class="head-image"></div>\n' +
                            '            <div class="message-content-box">\n' +
                            '              <p class="name">' + res.data[i].nick_name + '</p>\n' +
                            '              <ul class="message-content">\n' +
                            '                <li class="item01">\n' +
                            '                  <span>\n' +
                            '                    <svg class="icon" aria-hidden="true">\n' +
                            '                      <use xlink:href="#icon-zhanghu1"></use>\n' +
                            '                    </svg>\n' +
                            '                    <span>' + res.data[i].bet_iss + '期</span>\n' +
                            '                  </span>\n' +
                            '                  <span>总计： <span>' + res.data[i].bet_money + '</span></span>\n' +
                            '                </li>\n' +
                            '                <li class="item02">\n' +
                            '                  <span>投注： <span>' + res.data[i].bet_type + '</span></span>\n' +
                            '                  <span>金额： <span>' + res.data[i].bet_money + '</span></span>\n' +
                            '                </li>\n' +
                            '              </ul>\n' +
                            '            </div>\n' +
                            '          </div>\n' +
                            '        </div>   \n';
                    } else {
                         _html_bet_msg = '<div class="message-box">\n' +
                            '          <p>' + $.dateFtt('yyyy-MM-dd hh:mm:ss', new Date()) + '</p>\n' +
                            '          <div class="message">\n' +
                            '            <div class="head-image"></div>\n' +
                            '            <div class="message-content-box">\n' +
                            '              <p class="name">' + res.data[i].nick_name + '</p>\n' +
                            '              <ul class="message-content">\n' +
                            '                <li class="item01">\n' +
                            '                  <span>\n' +
                            '                    <svg class="icon" aria-hidden="true">\n' +
                            '                      <use xlink:href="#icon-zhanghu1"></use>\n' +
                            '                    </svg>\n' +
                            '                    <span>' + res.data[i].bet_iss + '期</span>\n' +
                            '                  </span>\n' +
                            '                  <span>总计： <span>' + res.data[i].bet_money + '</span></span>\n' +
                            '                </li>\n' +
                            '                <li class="item02">\n' +
                            '                  <span>投注： <span>' + res.data[i].bet_type + '</span></span>\n' +
                            '                  <span>金额： <span>' + res.data[i].bet_money + '</span></span>\n' +
                            '                </li>\n' +
                            '              </ul>\n' +
                            '            </div>\n' +
                            '          </div>\n' +
                            '        </div>\n';
                    }
                    $('#item-gamer-bet').append(_html_bet_msg);
                    let ele = document.getElementById('item-gamer-bet');
                    ele.scrollTop = ele.scrollHeight;
                }
            }
        }).catch(function (error) {
            console.log(error);
        });
    };
    /*// 封盘时投注按钮点击回调函数
    let closeBetEvent = function () {
        $.messageBox("已封盘，不能投注!");
    };

    // 开盘时投注按钮点击回调函数
    let openBetEvent = function () {
        if (parseFloat($('#balance').text()) == 0) {
            $.messageBox("余额为0，不能投注!");
            return;
        }
        $('.bet-hidden').toggle();
    };
    // 投注按钮点击事件
    let betClick = function (betFlag) {
        if (betFlag == 1) {
            $('#bet-toggle').on('click', openBetEvent);
            $('#bet-toggle').unbind('click', closeBetEvent);
        } else {
            $('#bet-toggle').on('click', closeBetEvent);
            $('#bet-toggle').unbind('click', openBetEvent);
        }
    };*/

    // 获取用户余额
    let getUserBalance = function () {
        $.jsonAjax(API.GET_USER_MONER_API, 'POST', {"user_num": localStorage.getItem('tel')}).then(function(res) {
            $('#balance').text((parseFloat(res.data.gold) + parseFloat(res.data.money)).toFixed(2) + '元宝');
        }).catch(function (error) {
            console.log(error);
        });
    };
})();
