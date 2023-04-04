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

function formSubmitHandler(e)
{
    e.preventDefault();

    let city = inputField.value;

    if (city !== '') {
        //Add to the HTML list & local storage
        ajaxRequest(`../winkelmaatje/webservice/index.php?city=${city}`, showShoppingbuddies);
        //Reset the field
        inputField.value = '';
        inputField.classList.remove('error-input');
        errorMessage.innerHTML= '';
    } else {
        //Add an error state with CSS
        errorMessage.innerHTML= 'Vul alstublieft uw woonplaats in';
        inputField.classList.add('error-input');
    }
}

function clickHandlerShowAll() {
    ajaxRequest(apiUrl, showShoppingbuddies);
}

function clickHandlerInfo(e) {
    let clickedItem = e.target;

    //Check if we clicked on a button
    if (clickedItem.nodeName !== 'IMG') {
        return;
    }

    ajaxRequest(`../winkelmaatje/webservice/index.php?id=${clickedItem.dataset.id}`, detailFillHandler);

}

function detailFillHandler(details) {
    popUpContent.innerHTML = '';
    let title = document.createElement('h2');
    let contentEmail = document.createElement('p');
    let contentPhoneNumber = document.createElement('p');

    title.innerHTML = `Contactgegevens van ${details.name}`;
    contentEmail.innerHTML = `<b>Email:</b> ${details.email}`;
    contentPhoneNumber.innerHTML = `<b>Telefoonnummer:</b> ${details.phone_number}`;

    popUpContent.appendChild(title);
    popUpContent.appendChild(contentEmail);
    popUpContent.appendChild(contentPhoneNumber);

    popUp.showModal();
}

function popUpCloseHandler (e) {
    if (e.target.nodeName === 'DIALOG' || e.target.classList.contains('modal-close')) {
        popUp.close();
    }
}

function showShoppingbuddies(data){
    console.log(data);
    list.innerHTML = ' ';
    let noResultMessage = document.getElementById('no-result');

    if (data.length === 0){
        noResultMessage.innerHTML = 'Er zijn geen winkelmaatjes gevonden in deze stad. Probeer een andere stad of controleer of u de stad goed geschreven heeft.'
    } else {
        noResultMessage.innerHTML = ' ';
        for (let shoppingbuddy of data) {
            createTiles(shoppingbuddy)
        }
    }
}

function ajaxErrorHandler(data) {
    console.error(data);
}

function createTiles(shoppingbuddy) {
        let shoppingbuddyTile = document.createElement('li');
        shoppingbuddyTile.classList.add('shoppingbuddy-tile');

        let tileContentName = document.createElement('p');
        let tileContentCity = document.createElement('p');
        let tileContentCategory = document.createElement('p');
        let tileContentInfoIcon = document.createElement('img');

        tileContentName.classList.add('tile-content');
        tileContentCity.classList.add('tile-content');
        tileContentCategory.classList.add('tile-content');


        tileContentInfoIcon.classList.add('contact-icon');
        tileContentInfoIcon.dataset.id = shoppingbuddy.id;

        tileContentInfoIcon.src = 'img/contact-us.png';
        tileContentName.innerHTML = `${shoppingbuddy.name}`;
        tileContentCity.innerHTML = `${shoppingbuddy.city}`;
        tileContentCategory.innerHTML = `${shoppingbuddy.categories.join(', ')}`;

        shoppingbuddyTile.appendChild(tileContentName);
        shoppingbuddyTile.appendChild(tileContentCity);
        shoppingbuddyTile.appendChild(tileContentCategory);
        shoppingbuddyTile.appendChild(tileContentInfoIcon)

        list.appendChild(shoppingbuddyTile);

}


