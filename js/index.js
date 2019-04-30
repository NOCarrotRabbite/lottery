let last_path = null;
/* 框架主页面路由注册开始 */
spaRouters.map('/index', function(transition) {
  spaRouters.asyncFun('js/route/components/index-main.js', transition);
});
spaRouters.map('/charge', function(transition) {
  spaRouters.asyncFun('js/route/components/charge-main.js', transition);
});
spaRouters.map('/customer', function(transition) {
  spaRouters.asyncFun('js/route/components/customer-main.js', transition);
});
spaRouters.map('/activity', function(transition) {
  spaRouters.asyncFun('js/route/components/activity-main.js', transition);
});
spaRouters.map('/account', function(transition) {
  spaRouters.asyncFun('js/route/components/account-main.js', transition);
});
spaRouters.map('/charge', function(transition) {
  spaRouters.asyncFun('js/route/components/charge-main.js', transition);
});
spaRouters.map('/customer', function(transition) {
  spaRouters.asyncFun('js/route/components/customer-main.js', transition);
});
spaRouters.map('/activity', function(transition) {
  spaRouters.asyncFun('js/route/components/activity-main.js', transition);
});
spaRouters.map('/account', function(transition) {
  spaRouters.asyncFun('js/route/components/account-main.js', transition);
});
/* 框架主页面路由注册结束 */

/* 首页子页面路由注册开始 */
spaRouters.map('/game-hall', function(transition) {
  spaRouters.asyncFun('js/route/components/game-hall.js', transition);
});
spaRouters.map('/game-hall-item', function(transition) {
  spaRouters.asyncFun('js/route/components/game-hall-item.js', transition);
});
//活动详情
spaRouters.map('/activity-particulars', function(transition) {
  spaRouters.asyncFun(
    'js/route/components/activity-particulars.js',
    transition
  );
});
/* 首页子页面路由注册结束 */

/* 活动中心子页面路由开始 */
//我的消息
spaRouters.map('/my-message', function(transition) {
  spaRouters.asyncFun('js/route/components/my-message.js', transition);
});
//公告详情
spaRouters.map('/notice-particulars', function(transition) {
  spaRouters.asyncFun('js/route/components/notice-particulars.js', transition);
});
/* 活动中心子页面路由结束 */

/* 我的账户子页面路由注册开始 */
spaRouters.map('/my-wallet', function(transition) {
  spaRouters.asyncFun('js/route/components/wallet.js', transition);
});
spaRouters.map('/account-records', function(transition) {
  spaRouters.asyncFun('js/route/components/account-records.js', transition);
});
spaRouters.map('/account-details', function(transition) {
  spaRouters.asyncFun('js/route/components/account-details.js', transition);
});
spaRouters.map('/setting', function(transition) {
  spaRouters.asyncFun('js/route/components/setting.js', transition);
});
spaRouters.map('/about-us', function(transition) {
  spaRouters.asyncFun('js/route/components/about-us.js', transition);
});
/* 我的账户子页面路由注册结束 */

/* 钱包子页面路由注册开始 */
//绑定银行卡
spaRouters.map('/bank-card', function(transition) {
  spaRouters.asyncFun('js/route/components/bank-card.js', transition);
});
//提现
spaRouters.map('/withdraw-deposit', function(transition) {
  spaRouters.asyncFun('js/route/components/withdraw-deposit.js', transition);
});
//充值记录
spaRouters.map('/recharge-record', function(transition) {
  spaRouters.asyncFun('js/route/components/recharge-record.js', transition);
});
//提现记录
spaRouters.map('/withdraw-deposit-record', function(transition) {
  spaRouters.asyncFun(
    'js/route/components/withdraw-deposit-record.js',
    transition
  );
});
/* 钱包子页面路由注册结束 */

/* 设置-子页面路由注册开始 */
//修改登录密码
spaRouters.map('/set-password', function(transition) {
  spaRouters.asyncFun('js/route/components/set-password.js', transition);
});
//修改提现密码
spaRouters.map('/set-withdraw-deposit-pwd', function(transition) {
  spaRouters.asyncFun(
    'js/route/components/set-withdraw-deposit-pwd.js',
    transition
  );
});
//绑定手机
spaRouters.map('/mobile-bind', function(transition) {
  spaRouters.asyncFun('js/route/components/mobile-bind.js', transition);
});
/* 设置-子页面路由注册结束 */

/*spaRouters.map('/detail2',function(transition){
    spaRouters.syncFun(function(transition){
    },transition)
})*/
spaRouters.beforeEach(function(transition) {
  // 切换之前dosomething
  setTimeout(function() {
    // 模拟切换之前延迟，比如说做个异步登录信息验证
    transition.next();
  }, 100);
});
spaRouters.afterEach(function(transition) {
  let to_path = transition.path.substring(1, transition.path.length);
  $('#' + to_path).addClass('active');
  if (last_path != to_path) {
    $('#' + last_path).removeClass('active');
  }
  last_path = to_path;
  // 切换之后dosomething
});
spaRouters.init();
$(window).resize(function() {
  setHtmlFontSize();
});
$(function() {
  setHtmlFontSize();
  //getOtherFontSize();
});
// 设置根元素字体大小；num为控制常量
let setHtmlFontSize = function() {
  let _width = document.documentElement.clientWidth;
  let root_size = _width / 50;
  $('html').css('font-size', root_size + 'px');
};
let getOtherFontSize = function() {
  $('.size-20').css('font-size', (20 * 50) / 750 + 'rem');
  $('.size-24').css('font-size', (24 * 50) / 750 + 'rem');
  $('.size-28').css('font-size', (28 * 50) / 750 + 'rem');
  $('.size-32').css('font-size', (32 * 50) / 750 + 'rem');
  $('.size-36').css('font-size', (36 * 50) / 750 + 'rem');
  $('.size-40').css('font-size', (40 * 50) / 750 + 'rem');
};
