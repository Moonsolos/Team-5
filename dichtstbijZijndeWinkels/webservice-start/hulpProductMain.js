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
        .then(response => response.json())
        .then(data => {
            data.steden.forEach(stad => {
                const option = document.createElement("option");
                option.value = stad;
                option.text = stad;
                cityDropdown.add(option);
            });
        })
        .catch(error => console.error(error));

}

function fillCityDropdown(){

}