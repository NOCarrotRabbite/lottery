(function() {
  $('.bank').on('click', () => {
    $('.dialog').show();
  });
  $('.obscuration').on('click', () => {
    $('.dialog').hide();
  });
  $.inputClear($('.name'), $('.name').next());
  $.inputClear($('.card-num'), $('.card-num').next());
  $.inputClear($('.password'), $('.password').next());
})();
