// const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]


// numbers.forEach(function(el){
//     if(el % 2 === 0){
//         console.log(el)
//     }
// })

// // for(let el of numbers){
// //     console.log(el)
// // }

const movies = [
    {
        title : `Amadeus`,
        score: 99
    },
    {
        title: `Stand By Me`,
        score: 85
    },
    {
        title: `Parasite`,
        score: 95
    },
    {
        title: `Alien`,
        score: 90
    }
]

const titles = movies.map(function(movie){
    return movie.title.toUpperCase();
})

// movies.forEach(function(movie){
//     console.log(`${movie.title} - ${movie.score}/100`)
// })

// const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

// const doulbes = numbers.map(function(num){
//     return num * 2;
// })

// DO NOT ALTER THE FOLLOWING CODE:
const fullNames = [{first: 'Albus', last: 'Dumbledore'}, {first: 'Harry', last: 'Potter'}, {first: 'Hermione', last: 'Granger'}, {first: 'Ron', last: 'Weasley'}, {first: 'Rubeus', last: 'Hagrid'}, {first: 'Minerva', last: 'McGonagall'}, {first: 'Severus', last: 'Snape'}];

// Write your code here
const firstNames = fullNames.map(function (x){
    return x.first;
});

const square = (x) => {
    return x * x;
}

const sum = (x, y) => {
    return x + y;
}

const add = function(x,y){
    return x + y;
}

function add(x,y){
    return x + y;
}

const add = (x,y) => {
    return x + y;
}