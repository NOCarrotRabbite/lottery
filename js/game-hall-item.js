(function () {
    let interval_id;    // 倒计时定时器id
    let countdown_time = {};    // 倒计时展示时间
    $(function () {
        let param = { "hall_id": "1", "small_id": "1" };
        // 进入投注小厅加载相关数据
        $.jsonAjax(API.GAME_HALL_ITEM_AIP, 'POST', param).then(function (data) {
            // 初始化期数
            $('#issue').text(data.new_data[0].iss_number);
            // 初始化余额
            $('#balance').text((Number(localStorage.getItem('money')) + Number(localStorage.getItem('gold'))).toFixed(2));
            // 初始化封盘倒计时
            /*let start_time = new Date(data.new_data[0].start_time);*/
            let start_time = new Date('2019-05-20 17:30:00');
            // 计算开盘时间和当前时间的差值
            let diff = getTimeDiff(start_time, new Date());
            if (diff.days > 0 || diff.hours > 0 || diff.mins > 5) { // 开盘时间超过五分钟则封盘
                $('#countdown').text('已封盘');
            } else {
                // 计算5分钟的秒数
                let five_secs = 5 * 60;
                // 计算diff的秒数
                let diff_secs_total = diff.mins * 60 + diff.secs;
                // 计算五分钟和diff的秒数差
                let secs_diff = five_secs - diff_secs_total;
                // 计算剩余分钟数
                countdown_time.mins = Math.floor(secs_diff / 60);
                // 计算除去分钟数后剩余秒数
                countdown_time.secs = secs_diff % 60;
                // 初始化倒计时剩余时间
                $('#countdown').text(countdown_time.mins + '分钟' + countdown_time.secs + '秒');
                // 设置定时器，实现倒计时功能
                interval_id = setInterval(function () {
                    countdown();
                }, 1000);
            }

        }).catch(function (error) {
            console.log(error);
        });

        // 投注蒙层的显示与隐藏
        document.getElementById('resulst-icon').onclick = function() {
            $('#records-box').toggle();
        };
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
                if(value) {
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

        // 投注按钮点击事件
        $('.bet-footer .betting').on('click', function () {
            $('.bet-hidden').toggle();
            let now = new Date();
            /*let _html_bet = '<div class="message-box">\n' +
                '          <p>' + now + '</p>\n' +
                '          <div class="message">\n' +
                '            <div class="head-image"></div>\n' +
                '            <div class="message-content-box">\n' +
                '              <p class="name">不吃胡萝卜兔子</p>\n' +
                '              <ul class="message-content">\n' +
                '                <li class="item01">\n' +
                '                  <span>\n' +
                '                    <svg class="icon" aria-hidden="true">\n' +
                '                      <use xlink:href="#icon-zhanghu1"></use>\n' +
                '                    </svg>\n' +
                '                    <span>949364期</span>\n' +
                '                  </span>\n' +
                '                  <span>总计： <span>' + $('#bet-price').text() + '</span></span>\n' +
                '                </li>\n' +
                '                <li class="item02">\n' +
                '                  <span>投注： <span>' + $('#bet-num').text() + '</span></span>\n' +
                '                  <span>金额： <span>' + $('#bet-price').text() + '</span></span>\n' +
                '                </li>\n' +
                '              </ul>\n' +
                '            </div>\n' +
                '          </div>\n' +
                '        </div>\n';*/
            let _html_bet = '<div class="message-box">\n' +
                '          <p>' + $.dateFtt('yyyy-MM-dd hh:mm:ss', now) + '</p>\n' +
                '          <div class="self-message">\n' +
                '            <div class="head-image"></div>\n' +
                '            <div class="message-content-box">\n' +
                '              <p class="name">不吃西红柿兔子</p>\n' +
                '              <ul class="message-content">\n' +
                '                <li class="item01">\n' +
                '                  <span>\n' +
                '                    <svg class="icon" aria-hidden="true">\n' +
                '                      <use xlink:href="#icon-zhanghu1"></use>\n' +
                '                    </svg>\n' +
                '                    <span>949364期</span>\n' +
                '                  </span>\n' +
                '                  <span>总计： <span>' + $('#bet-price').text() + '</span></span>\n' +
                '                </li>\n' +
                '                <li class="item02">\n' +
                '                  <span>投注： <span>' + $('#bet-num').text() + '</span></span>\n' +
                '                  <span>金额： <span>' + $('#bet-price').text() + '</span></span>\n' +
                '                </li>\n' +
                '              </ul>\n' +
                '            </div>\n' +
                '          </div>\n' +
                '        </div>   \n';
            $('#item-gamer-bet').append(_html_bet);
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
        let day = Math.floor(diff_total / (24 * 3600 * 1000));
        // 计算小时数
        let leave1 = diff_total % (24 * 3600 * 1000); // 计算天数后剩余的毫秒数
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
    let countdown = function () {
        if(countdown_time.secs > 0) {
            countdown_time.secs --;
        }
        if(countdown_time.secs == 0 && countdown_time.mins > 0) {
            countdown_time.mins--;
            countdown_time.secs = 60;
        }
        if(countdown_time.mins == 0 && countdown_time.secs == 0) {
            $('#countdown').text('已封盘');
            clearInterval(interval_id);
            return;
        }
        $('#countdown').text(countdown_time.mins + '分钟' + countdown_time.secs + '秒');
    };
})();
