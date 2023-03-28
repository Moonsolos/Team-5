window.addEventListener('load', init);

let apiUrl = '../online-winkelen/webservice-sem/index.php';
let onlineShops;

function init() {
    ajaxRequest(apiUrl);

    let favButton = document.querySelector('#fav-button');
    onlineShops = document.querySelector('#online-shops');

    favButton.addEventListener('click', favClickHandler);
    onlineShops.addEventListener('click', shopClickHandler);
}

function ajaxRequest(url) {
    fetch(url)
        .then((response) => {
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            return response.json();
        })
        .then(createShopTiles)
        .catch(ajaxErrorHandler);
}

function createShopTiles(data) {
    console.log(onlineShops);
    console.log(data);
    for (let shop of data) {
        let onlineShop = document.createElement('div');
        onlineShop.classList.add('online-winkel');

        let img = document.createElement('img');
        img.src = shop.img;
        img.classList.add('online-winkel-img');

        let h2 = document.createElement('h2');
        h2.innerHTML = shop.name;

        let i = document.createElement('i');
        i.classList.add('fa', 'fa-heart-o', 'icon-size');

        onlineShop.appendChild(img);
        onlineShop.appendChild(h2);
        onlineShop.appendChild(i);
        console.log(onlineShop);

        onlineShops.appendChild(onlineShop);
    }
}

function shopClickHandler (e) {

}

function favClickHandler(e) {

}

function ajaxErrorHandler(data) {
    console.log(data);
}