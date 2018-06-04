let moviesList= document.getElementById("moviesList")
let displayDetails = document.getElementById("displayDetails")

function fillDisplay(fetchUrl)
{
    fetch(fetchUrl)
    .then(function(reply)
    {
        return reply.json()
    }    )
        
    .then(function(film)
    {
        console.log(film)
        let year = film.Year
        let rated = film.Rated
        let released = film.Released
        let director = film.Director
        console.log(year)
        let dispDetails =
        `
        <p>${year}<p>
        <p>${rated}<p>
        <p>${released}<p>
        <p>${director}<p>
        `
    displayDetails.innerHTML = dispDetails
    }     )                             
}

fetch('http://www.omdbapi.com/?s=bruce%20lee&apikey=d43e3078')
    .then(function(response)
    {
        return response.json()
    }    )
    .then(function(results)
    {
    results.Search.forEach(function(movie)
    {
        let movieId = movie.Title
        let imdbId = movie.imdbID
        let movieUrl = "https://www.omdbapi.com/?i="+imdbId+"&apikey=d43e3078"
        console.log(movieUrl)
        let thumb = 
        `
        <div class="card" style="width: 18rem;">
            <img class="card-img-top" src="${movie.Poster}" onclick="fillDisplay('${movieUrl}')"></img>
            <div class="card-body">
            </div>
        </div>
        `
    moviesList.innerHTML += thumb 
    }                       )
    }     )     
