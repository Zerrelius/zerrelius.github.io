const list = document.querySelectorAll('li');

function activeLink() {
    list.forEach((itemX) => {
        itemX.classList.remove('active')
        this.classList.add('active');
    });
};

list.forEach((itemY) => {
    itemY.addEventListener('click', activeLink);
});