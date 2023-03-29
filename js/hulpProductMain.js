window.addEventListener('load', init);

//Globals
let apiUrl = '../hulpProduct/webservice-christian/index.php';
/**
 * Initialize after the DOM is ready
 */
function init()
{
    cityDropdownList();
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
        fillName.innerHTML = `${city.name}`;
        cityDropdown.appendChild(fillName);
    }}