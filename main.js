// //Objects & Properties
// //In arrays te order matters a lot where in objects it doesn't matter at all 
// //We define key value pairs which means each value has a name 

// var john = {
//     //Object literal
//     firstName: 'John',
//     //first name is key and john is property 
//     lastName: 'Smith',
//     birthYear: 1990,
//     family: ['Jane', 'Mark', 'Bob', 'Emily'],
//     job: 'teacher',
//     isMarried: false
// };

// console.log(john);

// //How to access them, just use '.' PERIOD or DOT
// //Or you can use brackets and input keyname as a string

// console.log(john.firstName);
// console.log(john['lastName']);

// //We could even use a variable 
// var x = 'birthYear';
// console.log(john[x]);

// //We can mutate the information (change the data)

// john.job = 'designer'; 


// //New Object Syntax
// var jane = new Object();
// jane.name = 'Jane';
// jane.birthYear = 1969;
// jane['lastName'] = 'Smith';

// console.log(jane);


// var newPuppy = new Object();
// newPuppy.name = "Lucky";
// newPuppy.breed = "corgi";
// newPuppy.food = "kibble";
// newPuppy.isSoft = "true";

// console.log(newPuppy);
// console.log(newPuppy.breed);
// console.log(newPuppy['food']);

// var dinnerMenu = new Object();

// dinnerMenu.appetizer = 'chips';
// dinnerMenu["main"] = "hamburger";
// dinnerMenu.salad = "cesar";
// dinnerMenu.side = "fries";
// dinnerMenu.dessert = "cake";

// console.log(dinnerMenu);

// var myPuppy = {
//     isCute: true,
//     whatBreed: "corgi",
//     whatCoat: "red and white"
// }

// console.log (myPuppy.isCute);
// console.log(myPuppy["whatBreed"]);

// var theirPuppy = new Object();

// theirPuppy.whatBreed = "corgi";
// theirPuppy["whatCoat"] = "red tri";
// theirPuppy.cuterThan = false;

// console.log(theirPuppy);


// var user = {
//     name: "Ellie",
//     location: "Alabama",
//     pet: "corgi named Lucky"
// }

// console.log(user.name + " lives in Huntsville, " + user.location + ". " + "She has a " + user.pet);

// //Practice with Objects 


// var myPuppy = {
//     breed: "corgi",
//     age: "7 months",
//     coat: "red and white",
//     born: "georgia"
// };

// console.log(myPuppy);

// console.log(myPuppy.born);

// console.log(myPuppy["breed"]);

// myPuppy.happy = "very";

// console.log(myPuppy);


// //Arrays 

// var animals = [
//     'seal', 'puppy', 'monkey'
// ];

// console.log(animals[2]);

// //FUNCTIONS 


// function calculateTip(bill){
//     return .15 * bill;
// };

// var myTip = calculateTip(25);

// document.write(myTip);


// function calculateAge(myAge){
//     return 2020 - myAge;
// };

// var ellieAge = calculateAge(1996);

// document.write("I am " + ellieAge + " years old.");


// var Lucky = "is corgi";
// var bread = "false";


// if (Lucky = "is corgi"){
//     document.write("Lucky is a corgi");
// } else {
//     document.write("Lucky might be bread");
// }

// function calcTip(total){
//     return .20 * total;
// }

// var giveWaiter = calcTip(40);

// document.write(" $" + giveWaiter);


// if (giveWaiter > 10){
//     document.write("give cash");
// } else {
//     document.write("Add it to the card");
// }



// function johnTip (billTotal){
//     if (billTotal < 50){
//         return 20/100 * billTotal;
//     } else {
//         return 15/100 * billTotal;
//     }
// }

// var billTotal =[40, 60];
// var johnPays =[
//     johnTip(billTotal[0])
// ];

// console.log(johnPays);

// function corgiCoat (tri){
//     if (tri === true){
//         return "Your corgi is a tri";
//     } else {
//         return "your corgi is not a tri";
//     }
// };

// var whatColor = corgiCoat(true);
// console.log(whatColor);
