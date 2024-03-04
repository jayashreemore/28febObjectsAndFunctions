const vehicle = {
    color: "Blue",
    year: 1989,
    "active registration": true,
    engine: {
        cylinders: 6,
        hp: 4000,
        size: 3.2,
    }

}

console.log(vehicle);

console.log('the vehicle color');
console.log(vehicle.color);
// console.log('the vehicle hp');
// console.log(vehicle.hp);
console.log('the vehicle year');
console.log(vehicle.year);

vehicle.color = "silver";
console.log(vehicle);

vehicle.model = "civic";
console.log(vehicle);

console.log(vehicle["color"]);

// to delete just use delete vehicle ["active registartion"];

const borough = {
    name: " The Bronx",
    name: "Brooklyn",
}

console.log(borough);
console.log('----for in  loop---');
for (const key in vehicle ) {
    console.log( key, ":" , vehicle[key]);

}

//objects in objects 

console.log(vehicle.engine);
console.log(vehicle.engine.cylinders);
console.log(vehicle.engine.hp);

console.log("vehicle engine size");
console.log(vehicle.engine.size);


//===============Comparing data==========

let myMovies = ['96', 'Swadesh', 'Chak de' ];
let yourMovies = ['Lakshya', 'Sathiya', 'Gerua'];


console.log("====Comparing data====");

let otherMovies = myMovies;
console.log(otherMovies);



//================cat name age fav thing =========
let name = " Hariprasad";
let age = 3;
let favoriteThings = ['food', 'toys', 'blankets', 'computers'];
let speakFrench = false;
let solveCube = false;

const myCat = {
    catName: name,
    age: age,
    favoriteThings: favoriteThings,
    speakFrench: speakFrench,
    solveCube: solveCube
}

console.log(myCat);
if (myCat.age < 2) {
    console.log("still a kitten")
}
else {
    console.log("not a kitten")
}