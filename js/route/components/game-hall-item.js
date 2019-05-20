SPA_RESOLVE_INIT = function(transition, sigal) {
    $('#footer').hide();
    $('#header').html('<a href="#/game-hall?type=1" class="back">\n' +
        '         <svg class="icon" aria-hidden="true">\n' +
        '           <use xlink:href="#icon-fanhui1"></use>\n' +
        '         </svg>\n' +
        '       </a>\n' +
        '       <span class="hall-title size-36">炫彩厅</span>\n' +
        '       <span>\n' +
        '       <a href="#/index" class="zhuanghu-icon">\n' +
        '         <svg class="icon" aria-hidden="true">\n' +
        '           <use xlink:href="#icon-custom-service"></use>\n' +
        '         </svg>\n' +
        '       </a>\n' +
        '       <a href="#/index">\n' +
        '         <svg class="icon" aria-hidden="true">\n' +
        '           <use xlink:href="#icon-add1"></use>\n' +
        '         </svg>\n' +
        '       </a>\n' +
        '       </span>');
    $('#header').css('justify-content', 'space-between');
    $('#header .zhuanghu-icon').css('padding-right', '2rem');
    $('.hall-title').css('margin-right', '-6rem');
    $('#main').html('<div class="game-hall-item">\n' +
        '      <ul class="item-info">\n' +
        '        <li class="info-time">\n' +
        '          <p>距离<span class="black" id="issue">949163</span>期截止</p>\n' +
        '          <strong id="countdown"></strong>\n' +
        '        </li>\n' +
        '        <li class="info-balance">\n' +
        '          <p class="black">\n' +
        '            余额\n' +
        '            <svg class="icon" aria-hidden="true">\n' +
        '              <use xlink:href="#icon-shuaxin"></use>\n' +
        '            </svg>\n' +
        '          </p>\n' +
        '          <strong id="balance"></strong>\n' +
        '        </li>\n' +
        '      </ul>\n' +
        '      <ul class="item-result">\n' +
        '        <li class="result-text">\n' +
        '          <span>第 949161 期 </span>\n' +
        '          <span class="num">0</span>\n' +
        '          <span>+</span>\n' +
        '          <span class="num">0</span>\n' +
        '          <span>+</span>\n' +
        '          <span class="num">9</span>\n' +
        '          <span>=</span>\n' +
        '          <span class="num res">9</span>\n' +
        '          <span class="num big-small">小</span>\n' +
        '          <span class="num sigle-double">单</span>\n' +
        '        </li>\n' +
        '        <li class="resulst-icon" id="resulst-icon">          \n' +
        '         <svg class="icon" aria-hidden="true">\n' +
        '           <use xlink:href="#icon-xiala"></use>\n' +
        '         </svg>\n' +
        '        </li>\n' +
        '      </ul>\n' +
        '      <div class="item-gamer-bet" id="item-gamer-bet">\n' +
        '        <div class="enter-tip">\n' +
        '          *** 游戏房间加入成功 ***\n' +
        '        </div>\n' +
        /*'        <p class="close">\n' +
        '          【949364】 期已封盘，下注结果以系统开奖为标准，如有异议，请及时联系客服\n' +
        '        </p>\n' +*/
        '        <div class="records-box" id="records-box">\n' +
        '          <ul class="result-records">\n' +
        '            <li class="result-text">\n' +
        '              <span>第 949161 期 </span>\n' +
        '              <span class="num">0</span>\n' +
        '              <span>+</span>\n' +
        '              <span class="num">0</span>\n' +
        '              <span>+</span>\n' +
        '              <span class="num">9</span>\n' +
        '              <span>=</span>\n' +
        '              <span class="num res">9</span>\n' +
        '              <span class="num big-small">小</span>\n' +
        '              <span class="num sigle-double">单</span>\n' +
        '            </li>\n' +
        '            <li class="result-text">\n' +
        '              <span>第 949161 期 </span>\n' +
        '              <span class="num">0</span>\n' +
        '              <span>+</span>\n' +
        '              <span class="num">0</span>\n' +
        '              <span>+</span>\n' +
        '              <span class="num">9</span>\n' +
        '              <span>=</span>\n' +
        '              <span class="num res">9</span>\n' +
        '              <span class="num big-small">小</span>\n' +
        '              <span class="num sigle-double">单</span>\n' +
        '            </li>\n' +
        '            <li class="result-text">\n' +
        '              <span>第 949161 期 </span>\n' +
        '              <span class="num">0</span>\n' +
        '              <span>+</span>\n' +
        '              <span class="num">0</span>\n' +
        '              <span>+</span>\n' +
        '              <span class="num">9</span>\n' +
        '              <span>=</span>\n' +
        '              <span class="num res">9</span>\n' +
        '              <span class="num big-small">小</span>\n' +
        '              <span class="num sigle-double">单</span>\n' +
        '            </li>\n' +
        '          </ul>\n' +
        '        </div>\n' +
        '      </div>\n' +
        '      <div class="item-bet-btn">\n' +
        '        <button id="bet-toggle">投注</button>\n' +
        '        <input type="text" />\n' +
        '        <svg class="icon" aria-hidden="true">\n' +
        '          <use xlink:href="#icon-smiling"></use>\n' +
        '        </svg>\n' +
        '        <!-- <span style="height: 4rem; width: 4rem; border-radius: 2rem; border: 1px solid #7F8386"></span> -->\n' +
        '      </div>\n' +
        '      <div class="bet-hidden">\n' +
        '        <div class="bet-box bet-first" id="bet-first">\n' +
        '          <header class="bet-content bet-type">\n' +
        '            <span class="back-last">         \n' +
        '             <svg class="icon" aria-hidden="true">\n' +
        '               <use xlink:href="#icon-zuojiantou"></use>\n' +
        '             </svg>\n' +
        '            </span>\n' +
        '           <span>                    \n' +
        '             <svg class="icon" aria-hidden="true">\n' +
        '               <use xlink:href="#icon-bingtu"></use>\n' +
        '             </svg>\n' +
        '             大小单双\n' +
        '           </span> \n' +
        '           <span class="go-next">       \n' +
        '             <svg class="icon" aria-hidden="true">\n' +
        '               <use xlink:href="#icon-sanjiaoright"></use>\n' +
        '             </svg>\n' +
        '           </span> \n' +
        '          </header>\n' +
        '          <div class="bet-content bet-tip" id="type-one-tip">\n' +
        '          </div>\n' +
        '          <main class="main-value-box">\n' +
        '            <ul class="main-value">\n' +
        '              <li class="type-one"><p>大</p><p>2.00</p></li>\n' +
        '              <li class="type-one"><p>小</p><p>2.00</p></li>\n' +
        '              <li class="type-one"><p>单</p><p>2.00</p></li>\n' +
        '              <li class="type-one"><p>双</p><p>2.00</p></li>\n' +
        '              <li class="type-one"><p>极大</p><p>15.00</p></li>\n' +
        '            </ul>\n' +
        '            <ul class="main-value">\n' +
        '              <li class="type-one"><p>大单</p><p>3.90</p></li>\n' +
        '              <li class="type-one"><p>小单</p><p>3.90</p></li>\n' +
        '              <li class="type-one"><p>大双</p><p>3.90</p></li>\n' +
        '              <li class="type-one"><p>小双</p><p>3.90</p></li>\n' +
        '              <li class="type-one"><p>极小</p><p>15.00</p></li>\n' +
        '            </ul>\n' +
        '          </main>\n' +
        '          <div class="bet-content bet-console">\n' +
        '            <button class="odds-desc">赔率说明</button>\n' +
        '            <span>\n' +
        '              <button class="min-bet min-bet-first">最小投注</button>\n' +
        '              <button class="double-bet double-bet-first">双倍投注</button>\n' +
        '            </span>\n' +
        '          </div>\n' +
        '          <div class="bet-content bet-sum-box">\n' +
        '            <label class="bet-sum">共投：<span class="bet-num" id="bet-num">0</span>注</label>\n' +
        '            <label class="bet-sum">总计：<span class="bet-price" id="bet-price">0</span></label>\n' +
        '          </div>\n' +
        '          <div class="bet-content bet-footer">\n' +
        '            <button class="withdrawal">撤单</button>\n' +
        '            <span class="bet-amount-box">\n' +
        '              <label>投注金额：</label>\n' +
        '              <input type="text" name="bet-money" class="bet-amount">\n' +
        '            </span>\n' +
        '            <button class="betting">投注</button>\n' +
        '          </div>\n' +
        '        </div>\n' +
        '        <div class="bet-box bet-second" id="bet-second">\n' +
        '          <header class="bet-content bet-type">\n' +
        '            <span class="back-last">         \n' +
        '             <svg class="icon" aria-hidden="true">\n' +
        '               <use xlink:href="#icon-zuojiantou"></use>\n' +
        '             </svg>\n' +
        '            </span>\n' +
        '           <span>                    \n' +
        '             <svg class="icon" aria-hidden="true">\n' +
        '               <use xlink:href="#icon-bangzhu"></use>\n' +
        '             </svg>\n' +
        '             猜数字\n' +
        '           </span> \n' +
        '           <span class="go-next">       \n' +
        '             <svg class="icon" aria-hidden="true">\n' +
        '               <use xlink:href="#icon-sanjiaoright"></use>\n' +
        '             </svg>\n' +
        '           </span> \n' +
        '          </header>\n' +
        '          <div class="bet-content bet-tip" id="type-two-tip">\n' +
        '          </div>\n' +
        '          <main class="main-value-box">\n' +
        '            <ul class="main-value">\n' +
        '              <li class="type-two"><p>00</p><p>300</p></li>\n' +
        '              <li class="type-two"><p>01</p><p>100</p></li>\n' +
        '              <li class="type-two"><p>02</p><p>50</p></li>\n' +
        '              <li class="type-two"><p>03</p><p>30</p></li>\n' +
        '              <li class="type-two"><p>04</p><p>20</p></li>\n' +
        '            </ul>\n' +
        '            <ul class="main-value">\n' +
        '              <li class="type-two"><p>05</p><p>18</p></li>\n' +
        '              <li class="type-two"><p>06</p><p>16</p></li>\n' +
        '              <li class="type-two"><p>07</p><p>15</p></li>\n' +
        '              <li class="type-two"><p>08</p><p>14</p></li>\n' +
        '              <li class="type-two"><p>09</p><p>13</p></li>\n' +
        '            </ul>\n' +
        '            <ul class="main-value">\n' +
        '              <li class="type-two"><p>10</p><p>12</p></li>\n' +
        '              <li class="type-two"><p>11</p><p>12</p></li>\n' +
        '              <li class="type-two"><p>12</p><p>11</p></li>\n' +
        '              <li class="type-two"><p>13</p><p>11</p></li>\n' +
        '              <li class="type-two"><p>14</p><p>11</p></li>\n' +
        '            </ul>\n' +
        '            <ul class="main-value">\n' +
        '              <li class="type-two"><p>15</p><p>11</p></li>\n' +
        '              <li class="type-two"><p>16</p><p>12</p></li>\n' +
        '              <li class="type-two"><p>17</p><p>12</p></li>\n' +
        '              <li class="type-two"><p>18</p><p>13</p></li>\n' +
        '              <li class="type-two"><p>19</p><p>14</p></li>\n' +
        '            </ul>\n' +
        '            <ul class="main-value">\n' +
        '              <li class="type-two"><p>20</p><p>15</p></li>\n' +
        '              <li class="type-two"><p>21</p><p>16</p></li>\n' +
        '              <li class="type-two"><p>22</p><p>18</p></li>\n' +
        '              <li class="type-two"><p>23</p><p>20</p></li>\n' +
        '              <li class="type-two"><p>24</p><p>30</p></li>\n' +
        '            </ul>\n' +
        '            <ul class="main-value main-value-last">\n' +
        '              <li class="type-two"><p>25</p><p>50</p></li>\n' +
        '              <li class="type-two right"><p>26</p><p>100</p></li>\n' +
        '              <li class="type-two right"><p>27</p><p>300</p></li>\n' +
        '            </ul>\n' +
        '          </main>\n' +
        '          <div class="bet-content bet-console">\n' +
        '            <button class="odds-desc">赔率说明</button>\n' +
        '            <span>\n' +
        '              <button class="min-bet min-bet-second">最小投注</button>\n' +
        '              <button class="double-bet double-bet-second">双倍投注</button>\n' +
        '            </span>\n' +
        '          </div>\n' +
        '          <div class="bet-content bet-sum-box">\n' +
        '            <label class="bet-sum">共投：<span class="bet-num">0</span>注</label>\n' +
        '            <label class="bet-sum">总计：<span class="bet-price">0</span></label>\n' +
        '          </div>\n' +
        '          <div class="bet-content bet-footer">\n' +
        '            <button class="withdrawal">撤单</button>\n' +
        '            <span class="bet-amount-box">\n' +
        '              <label>投注金额：</label>\n' +
        '              <input type="text" name="bet-money" class="bet-amount">\n' +
        '            </span>\n' +
        '            <button class="betting">投注</button>\n' +
        '          </div>\n' +
        '        </div>\n' +
        '        <div class="bet-box bet-third" id="bet-third">\n' +
        '          <header class="bet-content bet-type">\n' +
        '            <span class="back-last">         \n' +
        '             <svg class="icon" aria-hidden="true">\n' +
        '               <use xlink:href="#icon-zuojiantou"></use>\n' +
        '             </svg>\n' +
        '            </span>\n' +
        '           <span>                    \n' +
        '             <svg class="icon" aria-hidden="true">\n' +
        '               <use xlink:href="#icon-jiangzhangxunzhang"></use>\n' +
        '             </svg>\n' +
        '             特殊玩法\n' +
        '           </span> \n' +
        '           <span class="go-next">       \n' +
        '             <svg class="icon" aria-hidden="true">\n' +
        '               <use xlink:href="#icon-sanjiaoright"></use>\n' +
        '             </svg>\n' +
        '           </span> \n' +
        '          </header>\n' +
        '          <div class="bet-content bet-tip" id="type-three-tip">\n' +
        '          </div>\n' +
        '          <main class="main-value-box">\n' +
        '            <ul class="main-value main-value-three">\n' +
        '              <li class="type-three"><p class="double">对</p><p>3.00</p></li>\n' +
        '              <li class="type-three"><p class="along">顺</p><p>15.00</p></li>\n' +
        '              <li class="type-three"><p class="leopard">豹</p><p>50.00</p></li>\n' +
        '            </ul>\n' +
        '          </main>\n' +
        '          <div class="bet-content bet-console">\n' +
        '            <button class="odds-desc">赔率说明</button>\n' +
        '            <span>\n' +
        '              <button class="min-bet min-bet-third">最小投注</button>\n' +
        '              <button class="double-bet double-bet-third">双倍投注</button>\n' +
        '            </span>\n' +
        '          </div>\n' +
        '          <div class="bet-content bet-sum-box">\n' +
        '            <label class="bet-sum">共投：<span class="bet-num">0</span>注</label>\n' +
        '            <label class="bet-sum">总计：<span class="bet-price">0</span></label>\n' +
        '          </div>\n' +
        '          <div class="bet-content bet-footer">\n' +
        '            <button class="withdrawal">撤单</button>\n' +
        '            <span class="bet-amount-box">\n' +
        '              <label>投注金额：</label>\n' +
        '              <input type="text" name="bet-money" class="bet-amount">\n' +
        '            </span>\n' +
        '            <button class="betting">投注</button>\n' +
        '          </div>\n' +
        '        </div>\n' +
        '      </div>\n' +
        '    </div>');
    $.addPageScript('js/game-hall-item.js', sigal);
};
