window.addEventListener('load', init);

// global variables

let actionJson = 'webservice-start/includes/action.php';


//initialize after the dom is ready

function init() {
    cityDropdownList();
}


function cityDropdownList(){

    let cityDropdown = document.getElementById('city-dropdown');

    fetch(actionJson)
        .then((response) => {
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            return response.json();
        })
        .then(fillCityDropdown)
        .catch();

}

function fillCityDropdown(state){

}