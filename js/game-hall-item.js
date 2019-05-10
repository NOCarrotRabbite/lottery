(function () {
    $(function () {
        document.getElementById('resulst-icon').onclick = function() {
            $('#records-box').toggle();
            /*if(document.getElementById('records-box').style.display != 'none') {
                document.getElementById('records-box').style.display = 'none';
            } else {
                document.getElementById('records-box').style.display = 'block';
            }*/
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
        getBetNumber();
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
    };
})();
