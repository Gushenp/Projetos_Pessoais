const background  = document.getElementById('modal-background')
const modalContainer = document.getElementById('modal-container')

let currentMovie = [];

background.addEventListener('click', function backgroundClickHandler(){
    overlay.classList.remove('open');
});

function addCurrentMovieToList(){
    const titles = movieList.map(movie => movie.imdbID)
    try {
        if (titles.includes(currentMovie.imdbID)){
            throw new Error(`Este filme já se encontra na lista.`);
        } else {
        addToList(currentMovie)
        updateUI(currentMovie)
        updateLocalStorage()
        closeModal()
        };
    } catch(error) {
       console.log(error)
       notie.alert({ type: 'error', text: error.message })
    }
};

function creatmodal(data) {
    currentMovie = data;
    modalContainer.innerHTML = 
    `
        <h2 id="movie-title">${data.Title} - ${data.Year}</h2>
        <section id="modal-body">
            <div id="movie-poster-container">        
                <img id="movie-poster" src="${data.Poster}" 
                alt="poster do filme.">
            </div>
            <div id="movie-info">
                <div id="movie-cast">
                    <h4>Sinopse</h4>
                    <p>${data.Plot} </p>
                </div>
                <div id="movie-plot">
                    <h4>Participantes</h4>
                    <p>${data.Actors}</p>
                </div>
                <div id="movie-genre">
                    <h4>Gênero</h4>
                    <p>${data.Genre}</p>
                </div>
            </div>
        </section>
        <section id="modal-footer">
                <button id="add-to-list" onclick='{addCurrentMovieToList()}'>Adicionar a lista</button>
        </section> 
    `
}

function closeModal(){
    overlay.classList.remove("open");
}