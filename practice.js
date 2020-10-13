// function addition(a, b){
//     return a + b;
// }

// console.log(addition(2,3));

// //CONVERT MINUTES TO SECONDS 
// function minutesToSeconds (minutes){
//     return minutes * 60;
// }


// var minutes = [1,2,3,4,5];
// for (var i = 0; i < minutes.length; i++){
//     var result = minutesToSeconds(i);
//     console.log(result);
// }


// console.log(result);

// //CALCULATE AREA OF TRIANGLE
// function triArea(base, height){
//     return (base * height)/2;
// }

// var area = triArea(2,3);

// console.log(area);


// //The array name is represented by x 
// // When calling the function you replace the argmument x with the array name
// function getFirstValue (x){
//     return x[0];
// }
// var array = getFirstValue(minutes);

// console.log(array);

// function firstValue (x){
// 	return x[0];
// }

// var colors = ['red', 'blue', 'yellow', 'green'];

// var whichValueIsSecond = firstValue(colors);

// console.log(whichValueIsSecond);

// //Perimeter of a Rectangle 

// function findPerimeter(x,y){
//     return (x*2)+(y*2);
// }

// var rectanglePerimeter = findPerimeter(2,3);
// console.log(rectanglePerimeter);


// function squared(a) {
// 	return a = Math.pow(a,2);
// }

// var theResult = (squared(3));
// console.log(theResult);

// var numbers = [-1, 0, 3, -3];

// function lessThanOrEqualToZero (x){
//     if (x <= 0){
//         return true;
//     } else {
//         return false;
//     };
// }

// var isIt = lessThanOrEqualToZero(numbers[3]);

// console.log(isIt);

//CONVERTS HOURS TO SECONDS
// function  howManySeconds(x){
//     return x * 60 * 60;
// }

// var hours = [1,2,3,4, 'hello', 5,6,7,8];
// console.log(hours);

// for (var i = 0; i < hours.length;i++){
//     if(typeof hours[i] !== 'number') break;
//     var totalSeconds = howManySeconds(hours[i]);
//     console.log(totalSeconds);
// }

// for (var i = 0; i < hours.length;i++){
//     if(typeof hours[i] !== 'number') continue;
//     var totalSeconds = howManySeconds(hours[i]);
//     console.log(totalSeconds);
// }

function addition(x){
    return x + 1;
}

function giveSomething(something){
    return 'something ' + something;
};

var random = giveSomething('hello');

console.log(random);

//Write a function that takes two integers (hours, minutes), converts them to seconds, and adds them.

function convert (hours, minutes){
    return (hours * 60 * 60) + (minutes * 60);
}

var seconds = convert(2,4);
console.log(seconds);

function animals(chickens, cows, pigs){
    return (chickens * 2) + (cows * 4) + (pigs * 4);
}

var totalLegs = animals(1,1,1);
console.log(totalLegs);


