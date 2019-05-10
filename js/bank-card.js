(function() {
  $(function() {
    $('.bank').on('click', function() {
      $('.dialog').show();
    });
    $('.obscuration').on('click', function() {
      $('.dialog').hide();
    });
    $('.select-bank li').on('click', function() {
      let value = $(this)
        .text()
        .replace(/\s+/g, '');
      $('.select-bank li .radio-bg').removeClass('active');
      $(this)
        .find('.radio-bg')
        .addClass('active');
      $('.bank').val(value);
      $('.dialog').hide();
    });
    $.inputClear($('.name'), $('.name').next());
    $.inputClear($('.card-num'), $('.card-num').next());
    $.inputClear($('.password'), $('.password').next());
  });
})();
