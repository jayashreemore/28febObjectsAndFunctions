// let  computeArea = (width , height) => {
//      return computeArea = width * height
//      } 
//      console.log(computeArea(5, 7));



//      The area of a rectangle with a width of _ and a height of _ is ___ square units.


// function computeArea (width , height) {
//     console.log(width, height)
//     let area = width * height;
//     return (`The area of a rectangle with a width of ${width} and a height of ${height} is ${area} square units `)
// }
// console.log(computeArea(20,2));

// const planetHasWater = function(planet) {
//     if (planet.toLowercase ()=== 'earth' || planet.toLowerCase() === 'mars') {
//         return true;
//     } else return false;
// }

// console.log(planetHasWater('MARS'))

const getDevObject = function (name ) {
    console.log('we are in here');
    
    console.log(arguments);
    console.log(name);

    let skills = [];

    return {
        devName: name,
        jobSkill: skills
    }
}
    let maria = getDevObject ('Maria', 'HTML', 'CSS', 'Javascript', 'jQuery');
