(function () {
    let tab_nav = document.querySelectorAll('.tab-nav');
    let tab_content = document.querySelectorAll('.tab-content');
    let index = 0;
    for (let i = 0; i < tab_nav.length; i++) {
        tab_nav[i].onclick = function() {
            tab_nav[index].classList.remove('active');
            tab_content[index].classList.remove('on');
            index = i;
            tab_nav[index].classList.add('active');
            tab_content[index].classList.add('on');
        }
    }
})();
