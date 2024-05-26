const tabMenu = document.querySelectorAll('.js-tabmenu li');
const tabContent = document.querySelectorAll('.js-tabcontent div');

if(tabContent.length && tabMenu.length) {
    tabContent[0].classList.add('ativo');

    function activeTab(index) {
        tabContent.forEach((x) => {
            x.classList.remove('ativo');
        })
        tabContent[index].classList.add('ativo');
    }

    tabMenu.forEach((y, index) => {
        y.addEventListener('click', () => {
            activeTab(index);
        })
    })
}
