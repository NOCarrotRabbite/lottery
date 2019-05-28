(function() {
  $(function() {
    $('.logout').on('click', function() {
      localStorage.clear();
      window.location.href = '#/login';
    });
  });
})();
