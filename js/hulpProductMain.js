window.addEventListener('load', init);

//Globals
let apiUrl = 'https://pokeapi.co/api/v2/pokemon?limit=1008';
let gallery;
/**
 * Initialize after the DOM is ready
 */
function init()
{
    getPokemons();
    gallery = document.getElementById('city-dropdown');
}

function getPokemons(){
    fetch(apiUrl)
        .then((response) => {
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            return response.json();
        })
        .then(createPokemonCards)
        .catch(ajaxErrorHandler);

}

function ajaxErrorHandler(data){
    console.error(data);
}

function createPokemonCards(data) {
    console.log(data);

    for (let pokemon of data.results){
        let pokemonCard = document.createElement('option');
        pokemonCard.classList.add('pokemon-card');
        pokemonCard.dataset.name = pokemon.name;
        gallery.appendChild(pokemonCard);

        fetch(pokemon.url)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(response.statusText);
                }
                return response.json();
            })
            .then(fillPokemonCard)
            .catch(ajaxErrorHandler);
    }
}

function fillPokemonCard(pokemon){

    let pokemonCard = document.querySelector(`.pokemon-card[data-name='${pokemon.name}']`);

    let title = document.createElement('option')
    title.innerHTML = `<option value="stad"> ${pokemon.name} (#${pokemon.id}) </option>`;
    pokemonCard.appendChild(title);
}