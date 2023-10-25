/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */

// Function to add two numbers
function add (number1,number2) {
    return number1 + number2;
}

// Get the input values from the HTML form
function addNumbers() {
    // Get the input values
    let addnumber1 = Number(document.querySelector('#add1').value);
    let addnumber2 = Number(document.querySelector('#add2').value);

    // Calculate the sum
    //let sum = add(addnumber1, addnumber2);

    // Display the result in the HTML element with id 'sum'
    document.querySelector('#sum').value = add(addnumber1,addnumber2);
}

// Add an event listener for a button with id 'addNumber'
document.querySelector('#addNumbers').addEventListener('click', addNumbers);



/* Function Expression - Subtract Numbers */

function subtract (number1,number2) {
    return number1 - number2;
}

function subtractNumbers() {
    // Get the input values
    let subnumber1 = Number(document.querySelector('#subtract1').value);
    let subnumber2 = Number(document.querySelector('#subtract2').value);


    // Display the result in the HTML element with id 'difference'
    document.querySelector('#difference').value = subtract(subnumber1,subnumber2);
}

// Add an event listener for a button with id 'addNumber'
document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);


/* Arrow Function - Multiply Numbers */


const multiply = () => document.querySelector("#product").value = Number(document.querySelector("#factor1").value) * Number(document.querySelector("#factor2").value);

document.querySelector("#multiplyNumbers").addEventListener("click", multiply);


/* Open Function Use - Divide Numbers */

const divide = () => document.querySelector("#quotient").value = Number(document.querySelector("#dividend").value) / Number(document.querySelector("#divisor").value);

document.querySelector("#divideNumbers").addEventListener("click", divide);

/* Decision Structure */

// Add an event listener for the "Get Total Due" button
document.querySelector('#getTotal').addEventListener('click', function() {
    // Get the subtotal value entered by the user
    let subtotal = parseFloat(document.querySelector('#subtotal').value);

    // Check if the membership checkbox is checked
    let membershipCheckbox = document.querySelector('#member');
    let isMember = membershipCheckbox.checked;

    // Calculate the total due (apply a 15% discount if the user is a member)
    let totalDue = isMember ? subtotal * 0.85 : subtotal;

    // Display the total due with two decimal places in the "total" span
    document.querySelector('#total').textContent = `Total Due: $${totalDue.toFixed(2)}`;
});

/* ARRAY METHODS - Functional Programming */

let numbersArray = [1,2,3,4,5,6,7,8,9,10,11,12,13]

document.querySelector("#array").innerHTML = numbersArray


/* Output Source Array */



/* Output Odds Only Array */

document.querySelector("#odds").innerHTML = numbersArray.filter((number) => number % 2 ==1);

/* Output Evens Only Array */

document.querySelector("#evens").innerHTML = numbersArray.filter((number) => number % 2 ==0);


/* Output Sum of Org. Array */

document.querySelector("#sumOfArray").innerHTML = numbersArray.reduce((sum, number) => sum + number );


/* Output Multiplied by 2 Array */

document.querySelector("#multiplied").innerHTML = numbersArray.map((number) => number *2);

/* Output Sum of Multiplied by 2 Array */

document.querySelector("#sumOfMultiplied").innerHTML = numbersArray.map((number) => number *2).reduce((sum,number) => sum + number);
