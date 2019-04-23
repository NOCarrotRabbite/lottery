SPA_RESOLVE_INIT = function(transition) {
    $('#header').html('<h4>活动中心</h4>');
    $('#header').css('justify-content', 'center');
    document.getElementById("main").innerHTML = '<p style="color:red;">这是活动页面</p>';
    // console.log("首页回调" + JSON.stringify(transition));
}
