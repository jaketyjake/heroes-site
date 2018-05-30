fetch('http://www.omdbapi.com/?s=bruce%20lee&apikey=d43e3078')
.then(function(response){
    return response.json()
  })
  .then(function(json){
   //console.log(json)
   
   let moviesList = document.getElementById("moviesList")
   function enterMovies(){
    json.Search.forEach(function(movie){
        let movieId=movie.Title
        var imdbId=movie.imdbID
        console.log(imdbId)
        let clip=
            `<div class="card" style="width: 18rem;">
            <img class="card-img-top" src="${movie.Poster}"></img>
            <div class="card-body">
            <button onclick="fetchDisplay()" class="mLink" class="btn info">${movieId}</button>
        </div>
</div>
        `
        moviesList.innerHTML += clip
    })
   }


enterMovies() 
let movieUrl = "https://www.omdbapi.com/?i="+imdbId+"&apikey=d43e3078"
fetchDisplay = function(imdbId){
    fetch(movieUrl)
    .then(function(reply){
        return reply.json()
        console.log(reply)
    .then(function(details){    
        console.log(details)
}

    )})}
   
  
   //end of .then(function(json){

  
    })


