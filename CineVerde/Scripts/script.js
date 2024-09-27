const $searchButton = document.getElementById('search-button');
const overlay = document.getElementById('modal-overlay');
const movieName = document.getElementById('movie-name');
const movieYear = document.getElementById('movie-year');
const movieListContainer = document.getElementById('movie-list');

//let movieList = [];
let movieList = JSON.parse(localStorage.getItem("movieList")) ?? [];

async function searchButtonClickHandler() {
    try {
        let url = `https://www.omdbapi.com/?apikey=27618e79&t=${movieNameParameterGenerator()}&y=${movieYearParameterGenerator()}`;
        const response = await fetch(url);
        const data = await response.json();
        console.log('data:', data)
        if (data.Error) {
            throw new Error('Filme não encontrado.')
        }
        creatmodal(data);
        overlay.classList.add('open'); } catch(error) {
            console.log(error)
            notie.alert({ type: 'error', text: error.message })
        }
}

function movieNameParameterGenerator() {
    console.log('movieName value:', movieName.value);
    if (movieName.value === '') {
        throw new Error('O nome do filme deve ser informado');
    }
    return movieName.value.split(' ').join('+');
}

function movieYearParameterGenerator() {
    if (movieYear.value === '') {
        return '';
    }
    if (movieYear.value.length !== 4 || Number.isNaN(Number(movieYear.value))) {
        throw new Error('Ano do filme inválido');
    }
    return `&y=${movieYear.value}`;
}


function addToList(movieObject){
    movieList.push(movieObject); //pegue um elemento e empurre para a lista
}

function updateUI(movieObject) {
    //console.log('current movie: ', currentMovie)
    movieListContainer.innerHTML += `
    <article id="movie-card-${movieObject.imdbID} class="movie-card"> 
        <img src="${movieObject.Poster}" alt="Poster de ${movieObject.Title}."> 
        <p>${movieObject.Title}</p>
        <button class="remove-button" onclick="{removeFilmFromList('${movieObject.imdbID}')}">
         <i class="bi bi-trash"></i>
         remover
        </button> 
    </article> `
}

function removeFilmFromList(id){
    
    notie.confirm({
        text: 'Deseja remover o filme?',
        submitText: "Sim",
        cancelText: "Não",
        position: 'top',
        submitCallback: function removeMovie() {
            movieList = movieList.filter(movie => movie.imdbID !== id);
            document.getElementById(`movie-card-${id}`).remove();
            updateLocalStorage()
        } 
    })
}

function updateLocalStorage() {
    localStorage.setItem('movieList', JSON.stringify(movieList));
}

for (const movieInfo of movieList){
    updateUI(movieInfo)
}

$searchButton.addEventListener('click', searchButtonClickHandler);