let base_url = 'http://192.168.1.247';
function getAjax(param) {
  return new Promise(function(resolve, reject) {
    $.ajax({
      url: base_url + param.url,
      type: param.type,
      data: param.data || '',
      dataType: 'json',
      success: function(data) {
        resolve(data);
      },
      error: function(error) {
        reject(error);
      }
    });
  });
}
