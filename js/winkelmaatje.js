window.addEventListener('load', init);

//Globals
let apiUrl = '../winkelmaatje/webservice/index.php';
let inputField;
let list;
let errorField;
let errorMessage;
let popUp;
let popUpContent;
let closePopUp


function init() {
    //Start the application with loading the API data
    ajaxRequest(apiUrl, showShoppingbuddies);

    //Connect variables with HTML elements
    let form = document.querySelector('#city-form');
    inputField = document.querySelector('#city-field');
    list = document.querySelector('#list-shoppingbuddies');
    let buttonAllShoppingbuddies = document.querySelector('#all_shoppingbuddies');

    popUp = document.querySelector('#shop-detail');
    popUpContent = document.querySelector('.modal-content');
    closePopUp = document.querySelector('#modal-close');

    errorField = document.getElementById('error-field');
    errorMessage = document.createElement('p')
    errorMessage.classList.add('error');
    errorField.appendChild(errorMessage);

    //add event listeners
    form.addEventListener('submit', formSubmitHandler);
    buttonAllShoppingbuddies.addEventListener('click', clickHandlerShowAll);
    list.addEventListener('click', clickHandlerInfo);
    closePopUp.addEventListener('click', popUpCloseHandler);
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

function formSubmitHandler(e) {
    e.preventDefault();

    //store the input value
    let city = inputField.value;

    // check if the form is not empty
    if (city !== '') {
        //if it is not empty do an AJAX request for all the shoppingbuddies with the city that was filled in
        ajaxRequest(`../winkelmaatje/webservice/index.php?city=${city}`, showShoppingbuddies);
        //Reset the field and remove the error
        inputField.value = '';
        inputField.classList.remove('error-input');
        errorMessage.innerHTML = '';
    } else {
        //Add an error state with CSS and show error message
        errorMessage.innerHTML = 'Vul alstublieft uw woonplaats in';
        inputField.classList.add('error-input');
    }
}

//Click handler when the 'show all shoppingbuddies' button is clicked on
function clickHandlerShowAll() {
    ajaxRequest(apiUrl, showShoppingbuddies);
}

function clickHandlerInfo(e) {
    let clickedItem = e.target;

    //Check if the user clicked on the image
    if (clickedItem.nodeName !== 'IMG') {
        return;
    }

    //if the user clicked on the image do the AJAX request for the details
    ajaxRequest(`../winkelmaatje/webservice/index.php?id=${clickedItem.dataset.id}`, detailFillHandler);

}

function detailFillHandler(details) {
    //empty the popup so we can use it again
    popUpContent.innerHTML = '';

    //create HTML elements for the popup
    let title = document.createElement('h2');
    let contentEmail = document.createElement('p');
    let contentPhoneNumber = document.createElement('p');

    //fill the HTML elements with the details
    title.innerHTML = `Contactgegevens van ${details.name}`;
    contentEmail.innerHTML = `<b>Email:</b> ${details.email}`;
    contentPhoneNumber.innerHTML = `<b>Telefoonnummer:</b> ${details.phone_number}`;

    //add the HTML elements to the popup
    popUpContent.appendChild(title);
    popUpContent.appendChild(contentEmail);
    popUpContent.appendChild(contentPhoneNumber);

    //show the popup
    popUp.showModal();
}

function popUpCloseHandler(e) {
    //check if the user clicked on the close button of the popup
    if (e.target.nodeName === 'DIALOG' || e.target.classList.contains('modal-close')) {
        //close the popup
        popUp.close();
    }
}

function showShoppingbuddies(data) {
    //empty the list before showing new shoppingbuddies so we don't get dubbles
    list.innerHTML = ' ';

    //get HTML element where an error message will show when there are no results
    let noResultMessage = document.getElementById('no-result');

    //check if there are results for the city the user filled in
    if (data.length === 0) {
        //if there are no results show message to the user
        noResultMessage.innerHTML = 'Er zijn geen winkelmaatjes gevonden in deze stad. Probeer een andere stad of controleer of u de stad goed geschreven heeft.'
    } else { // if there are results
        //empty the message
        noResultMessage.innerHTML = ' ';
        //create the tiles with the shoppingbuddies
        for (let shoppingbuddy of data) {
            createTiles(shoppingbuddy)
        }
    }
}

function ajaxErrorHandler(data) {
    console.error(data);
}

function createTiles(shoppingbuddy) {
    //create list element and add a class to style in CSS
    let shoppingbuddyTile = document.createElement('li');
    shoppingbuddyTile.classList.add('shoppingbuddy-tile');

    //create HTML elements for the tile
    let tileContentName = document.createElement('p');
    let tileContentCity = document.createElement('p');
    let tileContentCategory = document.createElement('p');
    let tileContentInfoIcon = document.createElement('img');

    //add a class to style in CSS
    tileContentName.classList.add('tile-content');
    tileContentCity.classList.add('tile-content');
    tileContentCategory.classList.add('tile-content');
    tileContentInfoIcon.classList.add('contact-icon');

    //give the info icon the id of the corresponding shoppingbuddy so we can get the right details later
    tileContentInfoIcon.dataset.id = shoppingbuddy.id;

    //fill the HTML elements with the name, city and categories
    tileContentName.innerHTML = `${shoppingbuddy.name}`;
    tileContentCity.innerHTML = `${shoppingbuddy.city}`;
    tileContentCategory.innerHTML = `${shoppingbuddy.categories.join(', ')}`;
    tileContentInfoIcon.src = 'img/contact-us.png';

    //add the HTML elements to the tile
    shoppingbuddyTile.appendChild(tileContentName);
    shoppingbuddyTile.appendChild(tileContentCity);
    shoppingbuddyTile.appendChild(tileContentCategory);
    shoppingbuddyTile.appendChild(tileContentInfoIcon)

    //add the tile to the list
    list.appendChild(shoppingbuddyTile);

}


