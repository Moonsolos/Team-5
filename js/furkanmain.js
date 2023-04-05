window.addEventListener('load', init);

//Globals
let apiUrl = '../dichtstbijZijndeWinkels/webservice-start-furkan/index.php';
let locationApi = 'bnnZ__gHkjUsmXooFZmHI1-BJEzAT_dGInq3sAp-muU';
let fillName;
let dropdown;
let detailContent;
let storeDropdown;
let popupButton;
let popup;
let modelContent;
let popupData = {};
let lastShopId;
let mapLoaded = false;



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
    modelContent = document.querySelector('.model-content');




    cityDropdownList(apiUrl, fillCityDropdown);


    popupButton.addEventListener('click',popupClickhandler);
    popup.addEventListener('click',popupClosehandler);
    dropdown.addEventListener('change', fillCityShops);


}
function popupClickhandler(e){
    console.log(popupData[lastShopId].image);
    let img = document.createElement('img');
    img.src = popupData[lastShopId].image;
    popup.showModal();
    userLocation(locationApi, handlePosition);

    modelContent.appendChild(img);

}

function popupClosehandler(e){
    if (e.target.classList.contains('modal-close')){
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
    console.error(data);
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
    // store the city in localStorage
    localStorage.setItem('city', dropdown.value);



    cityDropdownList(`../dichtstbijZijndeWinkels/webservice-start-furkan/index.php?id=${id}`, fillCity)

}


function fillCity(stores) {
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
        localStorage.setItem('location',JSON.stringify(stores.location))

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


    let platform = new H.service.Platform({
        'apikey': 'bnnZ__gHkjUsmXooFZmHI1-BJEzAT_dGInq3sAp-muU'
    });

    let defaultLayers = platform.createDefaultLayers();

    // Instantiate (and display) a map object:
    let map = new H.Map(
        document.getElementById('mapContainer'),
        defaultLayers.vector.normal.map,
        {
            zoom: 12,
            center: {lat: latitude, lng: longitude}
        });
    let ui = H.ui.UI.createDefault(map, defaultLayers, 'nl-NL');
}








