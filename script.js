const form = document.getElementById("form");
const typeTitle = document.getElementById("typeTitle");
const selectGenre = document.getElementById("selectGenre");
const formMessage = document.getElementById("formMessage");
const movies = document.getElementById("movies");
const emptyMessage = document.getElementById("emptyMessage");

const watchlist = {
    movies: [],
    toggleWatched(index) {
    // TODO (Step 4)
    },
    removeMovie(index) {
    // TODO (Step 4)
    }
};

function saveMovies() {
  // TODO (Step 6)
}

function loadMovies() {
  // TODO (Step 6)
}

function renderMovies() {
  // TODO (Step 3)
}

form.addEventListener("submit", (event) => {
  // TODO (Step 5)
});

loadMovies();
renderMovies();