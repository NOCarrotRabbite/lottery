let last_path = null;
spaRouters.map('/index',function(transition){
    spaRouters.asyncFun('js/route/components/index-main.js',transition)
});
spaRouters.map('/charge',function(transition){
    spaRouters.asyncFun('js/route/components/charge-main.js',transition)
});
spaRouters.map('/customer',function(transition){
    spaRouters.asyncFun('js/route/components/customer-main.js',transition)
});
spaRouters.map('/activity',function(transition){
    spaRouters.asyncFun('js/route/components/activity-main.js',transition)
});
spaRouters.map('/account',function(transition){
    spaRouters.asyncFun('js/route/components/account-main.js',transition)
});
/*spaRouters.map('/detail2',function(transition){
    spaRouters.syncFun(function(transition){
        document.getElementById("content").innerHTML = '<p style="color:#DD8C6F;">当前同步渲染详情页' + JSON.stringify(transition) +'</p>'
    },transition)
})*/
spaRouters.beforeEach(function(transition){
    // 切换之前dosomething
    setTimeout(function(){
        // 模拟切换之前延迟，比如说做个异步登录信息验证
        transition.next();
    },100)
});
spaRouters.afterEach(function(transition){
    let to_path = transition.path.substring(1, transition.path.length);
    $('#' + to_path).addClass('active');
    if(last_path != to_path) {
        $('#' + last_path).removeClass('active');
    }
    last_path = to_path;
    // 切换之后dosomething
});
spaRouters.init();
