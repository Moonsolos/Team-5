window.addEventListener('load', init);

let apiUrl = '../online-winkelen/webservice-sem/index.php';
let onlineShops;
let popUp;
let popUpContent;
let shopData = {};
let favorites = [];

function init() {
    let favButton = document.querySelector('#fav-button');
    onlineShops = document.querySelector('#online-shops');
    popUp = document.querySelector('#shop-detail');
    popUpContent = document.querySelector('.modal-content');
    let favoritesString = localStorage.getItem('shop');

    if (favoritesString !== null) {
        favorites = JSON.parse(favoritesString);
    }

    popUp.addEventListener('click', popUpCloseHandler);
    popUp.addEventListener('click', shopClickHandler);
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
        if (favorites.includes(shop.id)) {
            i.classList.add('fa', 'fa-heart', 'icon-size', 'red');
        } else {
            i.classList.add('fa', 'fa-heart-o', 'icon-size');
        }
        i.dataset.id = shop.id;

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
    img.classList.add('modal-img-width');

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

    if (target.nodeName !== 'I') {
        return;
    }

    if (target.classList.contains('fa-heart-o')) {
        target.classList.remove('fa-heart-o');
        target.classList.add('fa-heart');
        target.classList.add('red');

        favorites.push(parseInt(target.dataset.id));
        localStorage.setItem('shop', JSON.stringify(favorites));
        console.log(favorites);
    } else  {
        target.classList.remove('fa-heart')
        target.classList.remove('red');
        target.classList.add('fa-heart-o');

        let itemIndex = favorites.indexOf(parseInt(target.dataset.id));
        favorites.splice(itemIndex, 1);
        localStorage.setItem('shop', JSON.stringify(favorites));
    }
}

function favClickHandler(e) {
    console.log(favorites);
    popUpContent.innerHTML = '';
    let onlineShop;


    for (let id of favorites) {
        onlineShop = document.createElement('div');
        onlineShop.classList.add('online-winkel');
        onlineShop.dataset.id = id;

        let img = document.createElement('img');
        img.src = shopData[id].img;
        img.classList.add('online-winkel-img');
        img.dataset.id = id;

        let h2 = document.createElement('h2');
        h2.innerHTML = shopData[id].name;
        h2.classList.add('online-winkel-title');
        h2.dataset.id = id;

        let div = document.createElement('div');
        div.innerHTML = ' ';
        div.dataset.id = id;

        onlineShop.appendChild(img);
        onlineShop.appendChild(h2);
        onlineShop.appendChild(div);

        popUpContent.appendChild(onlineShop);
    }

    if (popUpContent.innerHTML === '') {
        let title = document.createElement('h1');
        title.innerHTML = 'Favorieten';
        popUpContent.appendChild(title);

        let p = document.createElement('p');
        p.innerHTML = `U heeft nog geen favorieten toegevoegd!`;
        popUpContent.appendChild(p);
    } else {
        let title = document.createElement('h1');
        title.innerHTML = 'Favorieten';
        popUpContent.prepend(title);
    }

    popUp.showModal();

}

function ajaxErrorHandler(data) {
    console.log(data);
    let error = document.createElement('p');
    error.innerHTML = 'Jeeminee, de website werkt niet! Ik kan wel proberen uit te leggen wat er niet werkt, maar dat snapt u toch niet';
    error.classList.add('red');
    onlineShops.before(error);
}