SPA_RESOLVE_INIT = function(transition) {
    $('#header').html('<h4>我的账户</h4>');
    $('#header').css('justify-content', 'center');
    document.getElementById("main").innerHTML = '<p style="color:red;">这是账户页面</p>';
    // console.log("账户页面回调" + JSON.stringify(transition));
}
