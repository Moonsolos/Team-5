window.addEventListener('load', init);

let apiUrl = '../online-winkelen/webservice-sem/index.php';
let onlineShops;
let popUp;
let popUpContent;
let shopData = {};

function init() {
    let favButton = document.querySelector('#fav-button');
    onlineShops = document.querySelector('#online-shops');
    popUp = document.querySelector('#shop-detail');
    popUpContent = document.querySelector('.modal-content');

    popUp.addEventListener('click', popUpCloseHandler);
    favButton.addEventListener('click', favClickHandler);
    onlineShops.addEventListener('click', shopClickHandler);
    onlineShops.addEventListener('click', heartClickHandler);

    ajaxRequest(apiUrl, createShopTiles);
}

function ajaxRequest(url, successCallBack) {
    fetch(url)
        .then((response) => {
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            return response.json();
        })
        .then(successCallBack)
        .catch(ajaxErrorHandler);
}

function createShopTiles(data) {
    console.log(data);
    for (let shop of data) {
        let onlineShop = document.createElement('div');
        onlineShop.classList.add('online-winkel');
        onlineShop.dataset.id = shop.id;

        let img = document.createElement('img');
        img.src = shop.img;
        img.classList.add('online-winkel-img');
        img.dataset.id = shop.id;

        let h2 = document.createElement('h2');
        h2.innerHTML = shop.name;
        h2.classList.add('online-winkel-title');
        h2.dataset.id = shop.id;

        let i = document.createElement('i');
        i.classList.add('fa', 'fa-heart-o', 'icon-size');

        onlineShop.appendChild(img);
        onlineShop.appendChild(h2);
        onlineShop.appendChild(i);

        onlineShops.appendChild(onlineShop);

        shopData[shop.id] = shop;
    }
}

function shopClickHandler (e) {
    let target = e.target;
    if (target.classList.contains('online-winkel') || target.classList.contains('online-winkel-img') || target.classList.contains('online-winkel-title')) {
        ajaxRequest(`../online-winkelen/webservice-sem/index.php?id=${target.dataset.id}`, detailFillHandler);
    }
}

function detailFillHandler (details) {
    popUpContent.innerHTML = '';
    console.log(details);
    let shopId = details.id;

    let img = document.createElement('img');
    img.src = shopData[shopId].img;

    let h2 = document.createElement('h2');
    h2.innerHTML = shopData[shopId].name;
    h2.classList.add('online-winkel-title');

    let rating = document.createElement('p');
    rating.innerHTML = `Cijfer: ${details.cijfer}`;

    let text = document.createElement('p');
    text.innerHTML = details.text;

    let button = document.createElement('button');
    button.classList.add('modal-button');
    button.innerHTML = `Handleiding`;

    popUpContent.appendChild(img);
    popUpContent.appendChild(h2);
    popUpContent.appendChild(rating);
    popUpContent.appendChild(text);
    popUpContent.appendChild(button);


    popUp.showModal();

}

function popUpCloseHandler (e) {
    if (e.target.nodeName === 'DIALOG' || e.target.classList.contains('modal-close')) {
        popUp.close();
    }
}

function heartClickHandler (e) {
    let target = e.target;
    if (target.classList.contains('icon-size')) {

    }
}

function favClickHandler(e) {

}

function ajaxErrorHandler(data) {
    console.log(data);
}