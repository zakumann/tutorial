// function add(x,y){
//     return x + y;
// }

// function square (x,y){
//     return x * y;
// }

// function callTwice(func){
//     func();
//     func();
// }

// function callTenTimes(f){
//     for(let i = 0; i < 10; i++){
//         f()
//     }
// }

// function rollDie(){
//     const roll = Math.floor(Math.random() * 6) + 1
//     console.log(roll)
// }

// callTwice(rollDie)

// function makeMysteryFunc(){
//     const rand = Math.random();
//     if(rand > 0.5){
//         return function(){
//             console.log("Congrates. I am a good function!")
//             console.log("You win a million dollars!!")
//         }
//     } else {
//         return function(){
//             alert("You have been infected by a computer virus!")
//             alert("Stop trying to close this window!")
//             alert("Stop trying to close this window!")
//             alert("Stop trying to close this window!")
//             alert("Stop trying to close this window!")
//             alert("Just Kidding. LOL")
//         }
//     }
// }



function makeBetweenFunc(min, max){
    return function(num){
        return num >= min && num <= max;
    }
}

// makeBetweenFunc(50,100)

// function isBetween(num){
//     return num >=50 && num <= 100
// }

// function isBetween(num){
//     return num >= 1 && num <= 10
// }

const myMath = {
    PI : 3.14159,
    square(num){
        return num * num;
    },
    cube(num){
        return num ** 3;
    }
}

const math = {
    blah: `Hi!`,
    add(x,y){
        return x + y;
    },
    multiply(x,y){
        return x * y;
    }
}
math.add(50,60)

const square = {
    area(x){
        return x*x;
    },
    perimeter(x){
        return x*4;
    }
}