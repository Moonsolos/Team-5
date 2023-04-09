window.addEventListener('load', init);

//Global variables
let apiUrl = '../dichtstbijZijndeWinkels/webservice-start-furkan/index.php';
let locationApi = 'bnnZ__gHkjUsmXooFZmHI1-BJEzAT_dGInq3sAp-muU';
let fillName;
let dropdown;
let detailContent;
let storeDropdown;
let popupButton;
let popup;
let favorieteButton;
let popupFavoriteClose;
let modelContent;
let popupData = {};
let lastShopId;


/**
 * Initialize after the DOM is ready
 */

function init() {
    if (typeof window.localStorage === "undefined") {
        console.error('Local storage is not available in your browser');
        return;
    }

    dropdown = document.getElementById('city-dropdown');
    detailContent = document.getElementById('shop-dropdown');
    popupButton = document.getElementById('popup-button');
    popup = document.getElementById('popup-model');
    favorieteButton = document.getElementById('favoriete-button');
    popupFavoriteClose = document.getElementById('fav-modal-close');
    modelContent = document.querySelector('.model-content');

    let popupOpen = localStorage.getItem('popupOpen');
    if (popupOpen) {
        popup.showModal();
    }

    cityDropdownList(apiUrl, fillCityDropdown);
    popupButton.addEventListener('click', popupClickhandler);
    popup.addEventListener('click', popupClosehandler);
    dropdown.addEventListener('change', fillCityShops);
    favorieteButton.addEventListener('click',favoritePopup);
    modelContent.addEventListener('click', toggleFavorite);


    // Save the state of the pop-up to localStorage when the user closes it
    popup.addEventListener('close', function() {
        localStorage.removeItem('popupOpen');
    });

    // Save the state of the pop-up to localStorage when the user navigates away from the page
    window.addEventListener('beforeunload', function() {
        if (popup.open) {
            localStorage.setItem('popupOpen', true);
        } else {
            localStorage.removeItem('popupOpen');
        }
    });
}

function popupClickhandler(e) {

    let target = e.target;
    console.log(popupData[lastShopId].image);
    popup.showModal();
    userLocation(locationApi, handlePosition);


    let infoField = document.createElement('div');
    infoField.classList.add('info-field');
    modelContent.appendChild(infoField);

    const savedPopupData = localStorage.getItem('popupData');
    if (savedPopupData) {
        const parsedPopupData = JSON.parse(savedPopupData);
        fillInfoField(infoField, parsedPopupData);
    } else {
        fillInfoField(infoField);
    }

}

function fillInfoField() {

    let infoField = document.querySelector('.info-field');
    if (!infoField) {
        // Create the infoField if it doesnt exist
        infoField = document.createElement('div');
        infoField.classList.add('info-field');
        modelContent.appendChild(infoField);
    } else {
        // Empty the infoField if it already exists
        infoField.innerHTML = '';
    }

    //add inf. to infoField
    let title = document.createElement('h2');
    title.innerHTML = popupData[lastShopId].title;
    title.classList.add('title-info');

    let img = document.createElement('img');
    img.src = popupData[lastShopId].image;
    img.classList.add('img-info');

    let info = document.createElement('p');
    info.innerHTML = popupData[lastShopId].info;
    info.classList.add('info-text');

    let heart = document.createElement('i');
    heart.classList.add('fa', 'fa-heart-o', 'icon-size');


    infoField.appendChild(title);
    infoField.appendChild(img);
    infoField.appendChild(info);
    infoField.appendChild(heart);


}

function toggleFavorite(e) {
    console.log("Toggle favorite clicked");
    let target = e.target;
    console.log(target);
    if (target.nodeName !== "I") {
        return;
    }
    console.log(target.classList);
    if (target.classList.contains('fa-heart-o')) {
        target.classList.remove('fa-heart-o');
        target.classList.add('fa-heart');
        target.classList.add('red');

        // select and add data to localstorage
        let infoFieldData = {
            title: popupData[lastShopId].title,
            image: popupData[lastShopId].image,
            info: popupData[lastShopId].info
        };

        localStorage.setItem('favorites', JSON.stringify(infoFieldData));


    } else {
        target.classList.remove('fa-heart');
        target.classList.remove('red');
        target.classList.add('fa-heart-o');

        // Remove data from the localstorage
        localStorage.removeItem('favoriteInfo');
        removeFavoritesFromStorage();


    }
}
function removeFavoritesFromStorage() {
    localStorage.removeItem("favorites");
}

function favoritePopup(e) {
    let target = e.target;
    console.log('klik klik');

    let favoritePopup = document.getElementById('fav-dialog');
    favoritePopup.showModal();

    let favoritePopupCloseButton = document.getElementById('fav-modal-close');
    favoritePopupCloseButton.addEventListener('click', function () {
        favoritePopup.close();
    });

    // get favorites from LocalStorage
    let favorites = JSON.parse(localStorage.getItem('favorites')) || {};

    // add favorites to popup
    addFavoritesToPopup(favorites);
}


function addFavoritesToPopup(favorites) {
    // get favorites container
    let favoritesContainer = document.getElementById('favorites-container');
    favoritesContainer.innerHTML = '';

    // loop through the favorites object
    for (let shopId in favorites) {
        let favorite = favorites[shopId];
        console.log("Favorites:", favorites);

        let favoriteDiv = document.createElement('div');
        favoriteDiv.classList.add('favorite-item');

        let title = document.createElement('h2');
        title.innerHTML = favorite.title;
        title.classList.add('title-info');

        let img = document.createElement('img');
        img.src = favorite.image;
        img.classList.add('img-info');

        let info = document.createElement('p');
        info.innerHTML = favorite.info;
        info.classList.add('info-text');

        favoriteDiv.appendChild(title);
        favoriteDiv.appendChild(img);
        favoriteDiv.appendChild(info);

        favoritesContainer.appendChild(favoriteDiv);
    }
}

function popupClosehandler(e) {
    if (e.target.classList.contains('fav-modal-close')) {
        popupFavoriteClose.close();
    } else if (e.target.classList.contains('modal-close')) {
        popup.close();
    }
}

function cityDropdownList(url, succesCall) {

    fetch(url)
        .then((response) => {
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            return response.json();
        })
        .then(succesCall)
        .catch(ajaxErrorHandler);

}

function ajaxErrorHandler(data) {
    console.log(data);
    let error = document.createElement('p');
    error.innerHTML = 'OOPS, Er gaat iets verkeerd!';
    error.classList.add('red');
    onlineShops.before(error);
}


function fillCityDropdown(cities) {
    for (let city of cities) {
        console.log(city);


        let cityDropdown = document.getElementById('city-dropdown');
        storeDropdown = document.getElementById('shop-dropdown');
        let fillName = document.createElement('option');
        fillName.innerHTML = `${city.state}`;
        fillName.dataset.id = city.id;
        cityDropdown.appendChild(fillName);
    }
}

function fillCityShops(e) {
    let target = e.target;
    detailContent.innerHTML = '';
    let id;
    switch (dropdown.value) {
        case 'Rotterdam':
            id = 1;
            break;
        case 'Amsterdam':
            id = 2;
            break;
        case 'Gouda':
            id = 3;
            break;
        case 'Den Haag':
            id = 4;
            break;
        case 'Schoonhoven':
            id = 5;
            break;
    }


    cityDropdownList(`../dichtstbijZijndeWinkels/webservice-start-furkan/index.php?id=${id}`, fillStores)

}

function fillStores(stores) {
    console.log(stores);

    popupData[stores.id] = stores;
    console.log(popupData[stores.id].image);
    lastShopId = stores.id;
    for (let store of stores.winkel) {


        let storeDropdown = document.getElementById('shop-dropdown');
        fillName = document.createElement('option');
        fillName.innerHTML = `${store}`;
        fillName.dataset.value = store;
        storeDropdown.appendChild(fillName);

    }

    storeDropdown.addEventListener('change', function (e) {
        let selectedStore = e.target.value;
        localStorage.setItem('store', selectedStore);
        localStorage.setItem('location', JSON.stringify(stores.location))

    })

}

// get the location of the user
function userLocation() {
    navigator.geolocation.getCurrentPosition(handlePosition);
}

function handlePosition(position) {
    let location = JSON.parse(localStorage.getItem('location'));
    let latitude = location.latitude;
    let longitude = location.longitude;

    // Controleer of de kaart al bestaat
    let mapContainer = document.getElementById('mapContainer');
    if (mapContainer.children.length === 0) {
        let platform = new H.service.Platform({
            'apikey': 'bnnZ__gHkjUsmXooFZmHI1-BJEzAT_dGInq3sAp-muU'
        });

        let defaultLayers = platform.createDefaultLayers();

        // Instantiate (and display) a map object:
        let map = new H.Map(
            mapContainer,
            defaultLayers.vector.normal.map,
            {
                zoom: 16,
                center: {lat: latitude, lng: longitude}
            });
        let ui = H.ui.UI.createDefault(map, defaultLayers, 'nl-NL');
    }
    // Controleer of het info-veld al bestaat
    let infoField = document.querySelector('.info-field');
    if (!infoField) {
        infoField = document.createElement('div');
        infoField.classList.add('info-field');
        modelContent.appendChild(infoField);
    }
}
