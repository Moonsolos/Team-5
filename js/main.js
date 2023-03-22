window.addEventListener('load', init);

//Global variables
let modal;
let openModal;
let closeModal

/**
 * Initialize the application
 */
function init()
{
    modal = document.querySelector('#modal');
    openModal = document.querySelector('.open-popup');
    closeModal = document.querySelector('.close-popup');

    openModal.addEventListener('click', openPopup);
    closeModal.addEventListener('click', closePopup)
}


function openPopup() {
    modal.showModal();
}

function closePopup() {
    modal.close();
}
