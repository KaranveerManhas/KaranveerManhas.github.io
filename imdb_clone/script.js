// Api key variable
const apiKey = "&apiKey=94fad1b8";
// search bar variable
const searchBox = document.getElementById("search-box");
// search list div variable
const searchList = document.getElementById("search-list");
// Result offcanvas container variable
const resultContainer = document.getElementById("result-container");
// Watchlist offcanvas container variable
const watchList = document.getElementById("watchlist-body");
// Search Bar Link which only shows up for mobile devices mobile devices 
const searchBarLink = document.getElementById("search-bar-link");
// Search Bar Container Div
const searchContainer = document.querySelector('.search-container');
// Close button for search bar in mobile view
const searchClose = document.getElementById("search-close");

// Url for Titles: https://omdbapi.com/?s=(movie-name)&page=1&apikey=fc1fef96
// Url for movie details: http://www.omdbapi.com/?i=(imdbID)&apikey=fc1fef96

// The following event listeners are set up to display and hide the search bar while in mobile view

searchBarLink.addEventListener('click', function(){
    searchContainer.style.top = "2px";
});

searchClose.addEventListener('click', function() {
    searchContainer.style.top = "-50px";
});

// Get Movie details from API
async function getMovieDetails(searchTerm) {
    const url =  `https://omdbapi.com/?s=${searchTerm}&page=1` + apiKey;
    const result = await fetch(url);
    // console.log(result);
    const data = await result.json();
    // console.log(data);
    if (data.Response == "True") {
        displayMovieList(data.Search);
    }
    
}

// Find Movies from the given input in the search box
function findMovies() {
    // getting input from the search box
    let searchTerm = searchBox.value.trim();
    // if there is no input then add hide list class to search box
    // otherwise remove hide list class form search box
    if(searchTerm.length > 0) {
        searchList.classList.remove('hide-search-list');
        getMovieDetails(searchTerm);
    } else {
        searchList.classList.add('hide-search-list');
    }
}

// Function to display movie/show list
function displayMovieList(movies) {
    // setting the inner html content of search list to nothing 
    searchList.innerHTML = "";
    // looping through the array of search results we got
    // from findMovies()
    for (let i = 0; i < movies.length; i++) {
        // creating a div element
        let movieListItem = document.createElement('div');
        // setting data-id attribute to imdb id 
        movieListItem.dataset.id = movies[i].imdbID;
        // adding class list to the div
        movieListItem.classList.add('search-list-item');
        // This is an extra step to make sure some image is loaded
        // instead of a blank space 
        if (movies[i].Poster != "N/A") 
            moviePoster = movies[i].Poster;
        
        else 
            moviePoster = "assets/static-image.jpg";
        
        // Setting the inner html content to the list-item format
        // that is commented out in the html file
        movieListItem.innerHTML = `
        <div class = "search-item-thumbnail">
            <a href="#offcanvas-search" data-bs-toggle="offcanvas">
                <img src = "${moviePoster}">
            </a>
        </div>
        <div class = "search-item-info">
            <a href="#offcanvas-search" data-bs-toggle="offcanvas"><h3>${movies[i].Title}</h3></a>
            <a href="#offcanvas-search" data-bs-toggle="offcanvas"><p>${movies[i].Year}</p></a>
        </div>
        <div class="watchlist-add" onclick="addToWatchlist('${movies[i].imdbID}')">
        <i class="fa-solid fa-bookmark"></i>
        </div>
        `;
        // Appending this newly created list-element to our search list
        searchList.appendChild(movieListItem);
    }
    // Calling the load movies function after iteration is complete
    loadMovieDetails();
}

// This functions adds an event listener to all the search list items
// So that when a list item is clicked, it redirects us to the 
// Movie details offcanvas 
function loadMovieDetails() {
    const searchListMovies = searchList.querySelectorAll('.search-list-item');
    searchListMovies.forEach(movie => {
        movie.addEventListener('click', async ()=> {
            searchList.classList.add('hide-search-list');
            searchBox.value = "";
            // Making use of the previously set data-id attribute
            const result = await fetch(`https://www.omdbapi.com/?i=${movie.dataset.id}`+apiKey);
            const movieDetails = await result.json();
            // console.log(movieDetails);
            // Calling the function which will now display the movie details.
            displayMovieDetails(movieDetails);
        });
    });
}

// Function to display the movie details inside the result container offcanvas.
function displayMovieDetails(details) {
    // Settings the inner html of the result container to the format
    // that is commented out in the index.html file.
    resultContainer.innerHTML = `
    <div class="result-image">
            <img src="${(details.Poster != "N/A") ? details.Poster : "assets/static-image.jpg"}" alt= "movie poster">
          </div>
          <div class="result-info-container">
            <h5 class="movie=name">${details.Title}</h5>
            <p class="movie-details grey">${details.Genre}</p>
            <p class="language grey">${details.Language}</p>
            <p class="result-plot grey" style="font-size:18px;"> Plot:</p>
            <p class="grey">
              ${details.Plot}
            </p>
          </div>
          <div class="watchlist-btn watchlistbtn-color" onclick="addToWatchlist('${details.imdbID}')">
            <a href="" class="pro-blue">
              <i class="fa-solid fa-plus pro-blue"></i>
               Watchlist</a>
          </div>
    `;

}

/* Event listener for when user clicks on anything other than 
    the search bar, the search list hides itself. */

window.addEventListener('click', (event) => {
    if(event.target.className != "form-control"){
        searchList.classList.add('hide-search-list');
    }
});

//////////////////////////////////////////////////////////////////////////////////////
// watchList.innerHTML = "";
//     const URL = `https://omdbapi.com/?t=${movieName}` + apiKey;
//     let res = await fetch(URL);
//     const movie = await res.json(); 


// Adding movies to Watchlist
// This is the variable that will store the list of movies/shows
// that are added to the watchlist in the current session.
var currWatchList = [];
// This is the variable that will store the list of movies/shows
// that were added to the watchlist in the previous session.
var prevWatchList = [];

// Function to add a new movie/show to the watchlist.

function addToWatchlist(movieId){
    // Checking for duplicacy in the current watchlist.
    if(!currWatchList.includes(`${movieId}`)){
        currWatchList.push(movieId);
    }
    // Getting the previous watchlist from localStorage
    prevWatchList = JSON.parse(localStorage.getItem('MovieId'));
    // If there is nothing in the previous watchlist, append the current watchlist
    // to the localStorage.
    if(prevWatchList==null){
        localStorage.setItem('MovieId', JSON.stringify(currWatchList));
    } 
    // Otherwise, check for each element in current watchlist, if it exists in
    // previous watchlist. If it doesn't, only then push it to the previous watchlist. 
    else {
        currWatchList.forEach(id => {
            if (!prevWatchList.includes(id)){
                prevWatchList.push(id);  
            } 
        });
        // After making sure each movie/show is unique, append the whole previous
        // watchlist to the localstorage. 
        localStorage.setItem('MovieId', JSON.stringify(prevWatchList));
    }

    // Call the displaywatchlist function
    displayWatchList();
}

// Function to dsiplay watch list
function displayWatchList() {
    // Settings inner html of watchlist offcanvas to blank
    watchList.innerHTML = "";
    // Getting movie ids stored in local storage
    var storageData = localStorage.getItem('MovieId');
    // Parsing the movie ids into an array
    var movieIDs = JSON.parse(storageData);
    // for each movie id, fetch the movie details from api
    movieIDs.forEach( async id => {
        let URL = `https://omdbapi.com/?i=${id}` + apiKey;
        let response = await fetch(URL);
        let movie = await response.json(); 
        // Creating a watchlist item div
        let watchListItem = document.createElement('div');
        // Adding class movie-container to watchlist item
        watchListItem.classList.add(`movie-container`);
        // Settings data-id attribute to movie imdb id
        watchListItem.dataset.id = movie.imdbID;
        // Settings inner html of watchlist item
        watchListItem.innerHTML = `
            <div class="watchlist-titles">${movie.Title}</div>
            <div class="delete-icon" onclick="deleteMovie('${movie.imdbID}');">
                <i class="fa-solid fa-trash-can"></i>
            </div>
            <div class="movie-img-container">
            <div>
                <img src="${movie.Poster}">
            </div>
            </div>
            <div class="plot">${movie.Plot}</div>
        
        `;
        // Appending new watchlist item to watchlist body
        watchList.appendChild(watchListItem);
    });
}


// Function to delete movies from watchlist
async function deleteMovie(movieId) {
    // Check whether movie id is in current watchlist
    // if it is, then remove it
    if (currWatchList.includes(movieId)) {
        currWatchList.splice(currWatchList.indexOf(movieId), 1);
    }
    // Do the same with previous watchlist
    if (prevWatchList.includes(movieId)) {
        prevWatchList.splice(prevWatchList.indexOf(movieId), 1);
    }
    // Remove movie from local storage as well
    var temp = await JSON.parse(localStorage.getItem('MovieId'));
    var index = await temp.indexOf(movieId);
    await temp.splice(index, 1);
    // Update the values in the localStorage
    localStorage.setItem('MovieId',JSON.stringify(temp));
    // window.location.reload();
    // Call displaywatchlist function to refresh the watchlist
    displayWatchList();
}


