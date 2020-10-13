//STEP ONE 

var blueBoxes = document.getElementsByClassName('box'); 
//We are creating a variable to represent everything with the class 'box'
//IMPORTANT - we know we are going to return an HTML collection because it is getElementS (plural) versus getElement
//If you log the variable in the console: console.log(blueBoxes) you should see the HTML Collection which is an array
console.log(blueBoxes);


//STEP TWO - ADDING A NEW CLASS TO THE ELEMENTS SELECTED 
//We have to create a function in order to add a new class to the element 
//Since we want ALL the items in the HTML Collection (represented by the variable name blueBoxes) we need to loop through the array 
function changeColor(){
    for(i = 0; i < blueBoxes.length; i++){
        blueBoxes[i].classList.toggle("color");
    }
};


// //STEP 3 - EVENT LISTENER
// //We need to create another for loop because we want our event listener to pass through the entire array 

for(i = 0; i < blueBoxes.length; i++){
    blueBoxes[i].addEventListener("mouseover", changeColor);
    blueBoxes[i].addEventListener("mouseout", changeColor);
};



function myFunction() {
    var para = document.createElement("p");
    var t = document.createTextNode("This is a paragraph.");
    para.appendChild(t);
    blueBoxes[0].appendChild(para);
  }



  blueBoxes[0].addEventListener("click", myFunction);
  blueBoxes[1].addEventListener("click", myFunction);
  blueBoxes[2].addEventListener("click", myFunction);

// function changeColor(){
//     blueBoxes[0].classList.toggle("color");
// }

//     blueBoxes[0].addEventListener("mouseover", changeColor);
//     blueBoxes[0].addEventListener("mouseout", changeColor);


// var boxOneMessage = document.createElement("p")
// boxOneMessage.innerHTML = "Oooh - so close, but no cigar"
// document.getElementById("one").addEventListener("click",
// function(){
//     document.getElementById("one").appendChild(boxOneMessage);
// }, false
// );

//NEED TO UNDERSTAND FOR LOOPS 

//FOR Loops have THREE COMPONENTS: The initial Value of the counter, The Conditional (the condition that is evaluated before each loop), AND a counter update after each iteration 

//Example
//Let's Say we have an array

// var myPuppy = ['corgi', '7 months', 'red and white coat', 'male', '18lbs'];

// //We essentially want to LOOP through the array 

// //FIRST COMPONENT: The initial Value 
// //i = 0
// // This is where we want the loop to start. Since arrays are 0 based (which means they start at 0) we are setting i to 0; 
// //i is just a common variable - don't think to much into it 

// //SECOND COMPONENT: The Conditional
// //This is a condition that will be evaluated to see if the next loop should be excuted 
// // In this example, we know that myPuppy has 5 items, and we want this loop to run through this entire array 
// //while we could put i < myPuppy[5] it is just more efficient to use the property length in case you want to make updates to your array later 

// //THIRD COMPONENT: Counter
// //This is simply just the counter, we want to increase it by 1, so myPuppy[0] --> my Puppt[1], and so on..


// for(i = 0; i < myPuppy.length ; i ++){
//     console.log(myPuppy[i]);
// }

// //THIS IS THE SAME AS THE FOR LOOP ABOVE, BUT MORE LINES AND MORE REPITITIVE
// console.log(myPuppy[0]);
// console.log(myPuppy[1]);
// console.log(myPuppy[2]);
// console.log(myPuppy[3]);
// console.log(myPuppy[4]);
