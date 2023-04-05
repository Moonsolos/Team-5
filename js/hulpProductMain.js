window.addEventListener('load', init);

//Globals
let apiUrl = '../hulpProduct/webservice-christian/index.php';
let fillName;
let dropdown;
let detailContent;
let clickEventHandler;
let storeDropdown;
let newId;
let i;
let storeData = {};
let lastCityId;


/**
 * Initialize after the DOM is ready
 */
function init()
{
    detailContent = document.getElementById('shop-dropdown');
    apiLoader(apiUrl, fillCityDropdown);
    dropdown = document.getElementById('city-dropdown');
    dropdown.addEventListener('change', fillCityShops);
    clickEventHandler = document.getElementById('button');
    clickEventHandler.addEventListener('click', buttonHandler);

}

function apiLoader(url, successCall){

    fetch(url)
        .then((response) => {
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            return response.json();
        })
        .then(successCall)
        .catch(ajaxErrorHandler);

}

function ajaxErrorHandler(data){
    console.error(data);
}


function fillCityDropdown(cities){
    for (let city of cities) {
        console.log(city);

        let cityDropdown = document.getElementById('city-dropdown');
        fillName = document.createElement('option');
        fillName.innerHTML = `${city.name}`;
        fillName.dataset.id = city.id;
        cityDropdown.appendChild(fillName);
    }
}

function fillCityShops(e){
    detailContent.innerHTML = '<option> Kies een winkel </option>';
    let id;
    i = -1
    switch (dropdown.value) {
        case 'Gouda':
            id = 1;
            break;
        case 'Rotterdam':
            id = 2;
            break;
        case 'Amsterdam':
            id = 4;
            break;
        case 'Utrecht':
            id = 3;
            break;
    }
    apiLoader(`../hulpProduct/webservice-christian/index.php?id=${id}`, fillStores)
    lastCityId = id;
}

function fillStores(stores){

    storeData[stores.id]=stores
    console.log(storeData)

    for (let store of stores.winkels){
        i++
        storeDropdown = document.getElementById('shop-dropdown');
        storeName = document.createElement('option');
        storeName.innerHTML = `${i} ${store}`;
        storeName.dataset.id = i;
        // storeName.dataset.id2 = stores.id;
        storeDropdown.appendChild(storeName);
    }}

    // storeDropdown.addEventListener('change', function (e) {
    //     let selectedStore = e.target.value;
    //     localStorage.setItem('store', selectedStore)
        // localStorage.setItem('img', stores.img)
    // })

function buttonHandler(e){
    newId = storeDropdown.value[0];
    storeDropdown = document.getElementById('map');
    storeName = document.createElement('img');
    storeName.src = `${storeData[lastCityId].image[newId]}`;
    storeName.classList.add('map');
    storeDropdown.appendChild(storeName)
}

function fillMap(){
    console.log('hoi')
}



// function showImage(stores){
//     for (let store of stores.img) {
//         let mapDropdown = document.getElementsByClassName('map');
//         mapName = document.createElement('h1');
//         mapName.innerHTML = `${store}`;
//         // storeName.dataset.value = store;
//         storeDropdown.appendChild(storeName);
//     }
//     // localStorage.getItem('store')
// }

