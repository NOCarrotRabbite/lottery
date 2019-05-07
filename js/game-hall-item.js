$(function () {
    document.getElementById('resulst-icon').onclick = function() {
        if(document.getElementById('records-box').style.display != 'none') {
            document.getElementById('records-box').style.display = 'none';
        } else {
            document.getElementById('records-box').style.display = 'block';
        }
    };
    $('#bet-toggle').on('click', function () {
        $('.bet-hidden').toggle();
    });
    $('.bet-hidden').on('click', function () {
        $('.bet-hidden').toggle();
    });
    $('.bet-hidden .bet-box').on('click', function(e) {
        e.stopPropagation();
    })
});
