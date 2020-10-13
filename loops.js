// //For Loops have 3 parts 
// // The initial value of the counter, the condition that is evaluated before each loop, and a counter update after each iteration 

// for (var i = 0; i < 10; i++){
//     console.log(i);
// }

// // we set the value to 0, where we want to start the counter, we evaluate the condition which is true, and we want i to be increased by one ++ until we are at the point where i is 9 
// //Once we are at i = 10, 10<10 is false and exit the loop

// var john = ['john', 'smith', 1990, 'designer', false]; //Let's say we want to log all the objects in the console

// //We set i to 0 becuase the array is 0 based, and we want to read the array at position is 0
// for (var i = 0; i < john.length; i++){
//     console.log(john[i]);
// }


// //FOR LOOP 

// var dogBreed = ['corgi', 'doxie', 'shoob', 'husky'];

// for (var i = 0; i < dogBreed.length; i++){
//     console.log(dogBreed[i]);
// }

// //WHILE LOOP -- SEE NOTEBOOK
// var i = 0; //variable is defined outside 

// while (i < dogBreed.length){
//     console.log(dogBreed[i]);
//     i++;
// }

// // Continue and Break Statesments
// //We use a break statement in order to break out of a loop
// //We use continue in order to quit the current iteration of the loop 


// //Continue - we use it to continue the current the current iteration of the loop, and continue with the next one 

// var ellie = ['ellie', 'brayton', 23, false, 'web designer'];

// // for (var i = 0; i < ellie.length; i++){
// //     if(typeof ellie[i] !== 'string') continue;
// //     console.log(ellie[i]);
// // }

// // for (var i = 0; i < ellie.length; i++){
// //     if(typeof ellie[i] !== 'string') break;
// //     console.log(ellie[i]);
// // }

// for (var i = ellie.length - 1; i >= 0; i--){
//     console.log(ellie[i]);
// }