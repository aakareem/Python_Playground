var movies = [
  {
    watched: true,
    name: "bob's burgers",
    rating: 5,
  },
  {
    watched: true,
    name: "Ali's Wedding",
    rating: 5.5,
  },
  {
    watched: false,
    name: "Oceans 11",
    rating: 5,
  },
]
movies.forEach(buildString);

function buildString(movie){
  var result = "You have ";
  if (movie.watched = true) {
    result += "watched "
  } else result += "not watched "
  result += movie.name
  result += "- rated"+ movie.rating
  console.log(result);
}
