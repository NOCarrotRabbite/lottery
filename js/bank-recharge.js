(function() {
  $(function() {
    //复制
    $.copy($('.bank-copy'), $('.bank-code'), '银行卡号复制成功');
    $.copy($('.service-copy'), $('.service-name'), '收款人姓名复制成功');
  });
})();
