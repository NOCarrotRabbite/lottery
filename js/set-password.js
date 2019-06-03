(function() {
  $(function() {
    //自动获取焦点
    $('.old-pwd').focus();
    //input框删除icon
    $.inputClear($('.old-pwd'), $('.old-pwd').next());
    $.inputClear($('.new-pwd'), $('.new-pwd').next());
    $.inputClear($('.repetition-pwd'), $('.repetition-pwd').next());
  });
})();
