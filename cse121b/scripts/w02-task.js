/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */

let fullName = 'Oarabile Dilebo';
let currentYear = 2023;
let profilePicture = "images/IMG_20220807_140511.jpg";
const altText = `Profile image of ${fullName}`;





/* Step 3 - Element Variables */

const nameElement = document.getElementById("name");
const foodElement = document.getElementById("favoriteFoods");
const yearElement = document.querySelector("#year");
const imageElement = document.querySelector("img");






/* Step 4 - Adding Content */

nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute("src", profilePicture);
imageElement.setAttribute("alt", "Profile Picture of Oarabile Dilebo");



/* Step 5 - Array */

const favoritesFoods = ["Pap", "Potatoes", "Curry", "Burgers"];
foodElement.textContent = favoritesFoods.join(", ");
const newfood = "chocolate";
favoritesFoods.push(newfood);
foodElement.innerHTML += `<br>${favoritesFoods}`;
favoritesFoods.shift();
foodElement.innerHTML += `<br>${favoritesFoods}`;
favoritesFoods.pop();
foodElement.innerHTML += `<br>${favoritesFoods}`;








