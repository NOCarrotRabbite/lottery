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
/* 框架主页面路由注册结束 */

/* 首页子页面路由注册开始 */
spaRouters.map('/game-hall', function(transition) {
  spaRouters.asyncFun('js/route/components/game-hall.js', transition);
});
/* 首页子页面路由注册结束 */

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
spaRouters.map('/bank-card', function(transition) {
  spaRouters.asyncFun('js/route/components/bank-card.js', transition);
});
/* 钱包子页面路由注册结束 */

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
  console.log('font-size', $('html').css('font-size'));
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
