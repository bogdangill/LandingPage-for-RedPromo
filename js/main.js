const btnMenu = document.querySelector('.btn-menu');
const recycleItems = document.querySelectorAll('.recycle-item');
const target = document.querySelector('.overlay');
const preloader = document.querySelector('.preloader');
const body = document.querySelector('body');

// З.Ы. я знаю, что это не та самая загрузка страницы, которая должна быть в продакшене. Здесь я просто решил продемонстрировать то, как будет иконка загрузки вести себя при теоретической загрузке документа в полторы секунды..

function loading() {
    preloader.classList.add('d-none');
}

window.onload = function() {
    setTimeout(loading, 1500);
}

btnMenu.onclick = function() {
    btnMenu.classList.toggle('btn-menu_unfold');
    target.classList.toggle('d-none');
    body.classList.toggle('overflow-hidden');
}

for (let recycleItem of recycleItems) {

    recycleItem.onmouseover = function() {
        let recycleP = recycleItem.querySelector('.recycle-p');
        let arrowIcon = recycleItem.querySelector('.arrow');
        recycleP.classList.remove('hidden');
        arrowIcon.classList.remove('hidden');
    }

    recycleItem.onmouseout = function() {
        let recycleP = recycleItem.querySelector('.recycle-p');
        let arrowIcon = recycleItem.querySelector('.arrow');
        recycleP.classList.add('hidden');
        arrowIcon.classList.add('hidden');
    }
}