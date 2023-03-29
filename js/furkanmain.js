window.addEventListener('load', init);

//Globals
let apiUrl = '../dichtstbijZijndeWinkels/webservice-start-furkan/index.php';
let fillName;
let dropdown;
let detailContent

/**
 * Initialize after the DOM is ready
 */

function init()
{
    detailContent = document.getElementById('shop-dropdown');
    cityDropdownList(apiUrl, fillCityDropdown);
    dropdown = document.getElementById('city-dropdown');
    dropdown.addEventListener('change', fillCityShops);
}

function cityDropdownList(){

    fetch(apiUrl)
        .then((response) => {
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            return response.json();
        })
        .then(fillCityDropdown)
        .catch(ajaxErrorHandler);

}

function ajaxErrorHandler(data){
    console.error(data);
}


function fillCityDropdown(cities){
    for (let city of cities) {
        console.log(city);


        let cityDropdown = document.getElementById('city-dropdown');
        let fillName = document.createElement('option');
        fillName.innerHTML = `${city.state}`;
        fillName.dataset.id = city.id;
        cityDropdown.appendChild(fillName);
    }}

function fillCityShops(e){
    let target = e.target;
    detailContent.innerHTML = '<option>Kies een winkel</option>';
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
    }
    cityDropdownList(`../dichtstbijZijndeWinkels/webservice-start-furkan/index.php?id=${id}`, fillCity)
}
function fillCity(stores){
    console.log(stores)
    for (let store of stores.winkel){


        let storeDropdown = document.getElementById('shop-dropdown');
        fillName = document.createElement('option');
        fillName.innerHTML =`${store}`;
        storeDropdown.appendChild(fillName);
    }}
