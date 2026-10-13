const form = document.getElementById("form") 
const typeTitle = document.getElementById("typeTitle") 
const selectGenre = document.getElementById("selectGenre") 
const formMessage = document.getElementById("formMessage") 
const movies = document.getElementById("movies") 
const emptyMessage = document.getElementById("emptyMessage") 

const watchlist = {
  movies: [{ title: "The Princess Bride", genre: "Adventure", watched: false }],
  toggleWatched(index) {
    this.movies[index].watched = !this.movies[index].watched
    console.log(this.movies[index].watched)
  },
  removeMovie(index) {
    this.movies.splice(index, 1)
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

    const genre = document.createElement("p")
    genre.textContent = movie.genre

    const watched = document.createElement("p")
    watched.textContent = "Watched? " + movie.watched

    const toggleButton = document.createElement("button") 
    toggleButton.type = "button" 
    toggleButton.textContent = "Watched? " + !movie.watched
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

    card.append(title, genre, watched, toggleButton, removeButton) 
    movies.append(card) 
  }) 
  
  if (watchlist.movies.length == 0) {
    emptyMessage.textContent = "Your watchlist is empty" 
  }
}

form.addEventListener("submit", (event) => {
  event.preventDefault()
  const title = typeTitle.value.trim()
  const genre = selectGenre.value

  if (title === "") {
    formMessage.textContent = "Enter a movie title."
    return
  }
  if (genre === "") {
    formMessage.textContent = "Choose a genre."
    return
  }
  watchlist.movies.push({ title: title, genre: genre, watched: false })
  saveMovies()
  renderMovies()

  formMessage.textContent = ""
  typeTitle.value = ""
}) 

loadMovies() 
renderMovies() 