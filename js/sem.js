window.addEventListener('load', init);

let apiUrl = '../online-winkelen/webservice-sem/index.php';

function init () {
    ajaxRequest(apiUrl);

    let heartIcon = document.querySelector('#heart-icon');
    let favButton = document.querySelector('#fav-button');

    favButton.addEventListener('click', favClickHandler);
    heartIcon.addEventListener('click', heartClickHandler);
}

function ajaxRequest (url) {
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

function createShopTiles (data) {
    console.log(data);
}

function heartClickHandler (e) {

}

function favClickHandler (e) {

}

function ajaxErrorHandler (data) {

}