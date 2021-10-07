let allMovies = [];

//Movie object contructor
function Movie(title, rating, havewatched) {
    this.title = title;
    this.rating = rating;
    this.havewatched = havewatched;
}

//add a movie OBJECT to the allMovies array
function addMovie (movie) {
    allMovies.push(movie);
    console.log('A new movie is added');
}

//iterate through all elements of allMovies array
//print out to console in a correct format
//print out the total number of movies in allMovies array
function printMovies () {
    var result = `Printing all movies...\n`;
    for (let m of allMovies) {
        result += `${m.title}, rating of ${m.rating}, havewatched: ${m.havewatched}\n`;
    }
    result += `\nYou have ${allMovies.length} movies in total`;
    console.log(result);
}

//print out to console, only the movies that has a rating higher than rating(argument)
//print out the total number of matches
function highRatings (rating) {
    var result = `printing movie that has a rating higher than ${rating}\n`;
    var count = 0;
    for (let m of allMovies) {
        if (m.rating > rating) {
            result += `${m.title} has a rating of ${m.rating}\n`;
            count++;
        }
    }
    result += `\nIn total, there are ${count} matches`;
    console.log(result);
}

//Toggle the 'haveWatched' property of the specified movie 
function changeWatched (title) {
    console.log('changing the status of the movie...');
    for (let m of allMovies) {
        if (m.title === title) {
            m.havewatched = !m.havewatched;
            return;
        }
    }
}



////////////////////////////////////////////////////////////
//Test code - DO NOT DELETE OR EDIT
let x = new Movie("Spiderman", 3, "true");
let y = new Movie("Citizen Kane", 4, "false");
let z = new Movie("Zootopia", 4.5, "true");

allMovies.push(x,y,z);

console.log("----------------");
console.log("running program......");
console.log("----------------");
printMovies();


let movie1 = new Movie("Parasite", 2, "false");


console.log("----------------");
addMovie(movie1);
console.log("----------------");



changeWatched("Spiderman");
console.log("----------------");

printMovies();
console.log("----------------");

changeWatched("Spiderman");
console.log("----------------");

printMovies();
console.log("----------------");

highRatings(3.5);