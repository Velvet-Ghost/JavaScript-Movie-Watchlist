const form = document.getElementById("form") 
const typeTitle = document.getElementById("typeTitle") 
const selectGenre = document.getElementById("selectGenre") 
const formMessage = document.getElementById("formMessage") 
const movies = document.getElementById("movies") 
const emptyMessage = document.getElementById("emptyMessage") 

const watchlist = {
  movies: [],
  toggleWatched(index) {
    // TODO (Step 4)
  },
  removeMovie(index) {
    // TODO (Step 4)
  }
} 

function saveMovies() {
  // TODO (Step 6)
}

function loadMovies() {
  // TODO (Step 6)
}

function renderMovies() {
  movies.replaceChildren() 

  watchlist.movies.forEach((movie, index) => {
    const card = document.createElement("li") 
    const title = document.createElement("h3") 
    title.textContent = movie.title 

    const details = document.createElement("p") 
    // TODO: Show the genre and Watched / Not watched status.

    const toggleButton = document.createElement("button") 
    toggleButton.type = "button" 
    // TODO: Set Mark Watched / Mark Unwatched as the button text.
    toggleButton.addEventListener("click", () => {
      watchlist.toggleWatched(index) 
      saveMovies() 
      renderMovies() 
    }) 

    const removeButton = document.createElement("button") 
    removeButton.type = "button" 
    removeButton.textContent = "Remove" 
    removeButton.addEventListener("click", () => {
      watchlist.removeMovie(index) 
      saveMovies()
      renderMovies()
    }) 

    card.append(title, details, toggleButton, removeButton) 
    movies.append(card) 
  }) 
  
  if (watchlist.movies.length == 0) {
    emptyMessage.textContent = "Your watchlist is empty" 
  }
}

form.addEventListener("submit", (event) => {
  // TODO (Step 5)
}) 

loadMovies() 
renderMovies() 