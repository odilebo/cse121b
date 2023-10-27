/* LESSON 3 - Programming Tasks */

/* Profile Object  */

let myProfile = { 
    name: "Oarabile Dilebo",

    photo: "images/IMG_20220807_140511.jpg",

    favoriteFoods:  [
        'Pap and Wors',
        'Kota',
        'Dagwood',
        'Fish and Chips',
        'Chocolate'
    ] ,
    
    hobbies: [
        'Rugby',
        'Football',
        'Coding',
        'Movies',
        'Tiktok'
    ] ,
    
    placesLived: [
       
    ] 
};


myProfile.placesLived.push(
     
     {
        place: 'Johannesburg, South Africa',
        length: '17 years'
     },
     {
        place: 'Pretoria, South Africa',
        length: '5 years'
     },
     {
        place: 'Freetown, Sierra Leone',
        length: '2 years'
     }
 ) ;

document.querySelector('#name').textContent = myProfile.name;

document.getElementById('photo').src = myProfile.photo;

document.querySelector('#name').alt = photo;

myProfile.favoriteFoods.forEach(food => {
   let li = document.createElement('li');
   li.textContent = food;
   document.querySelector('#favorite-foods').appendChild(li);
});

myProfile.hobbies.forEach(hobby => {
    let li = document.createElement('li');
    li.textContent = hobby;
    document.querySelector('#hobbies').appendChild(li);
});

// let dt = document.createElement('dt');
// dt.innerHTML = place.place;
// document.querySelector('#places-lived').appendChild(dt);


// Get the HTML <dl> element with the ID "places-lived"
let dlElement = document.querySelector('#places-lived');

// Iterate through the "placesLived" property and create <dt> and <dd> elements for each object
myProfile.placesLived.forEach(place => {
    // Create <dt> element and set its content
    let dtElement = document.createElement('dt');
    dtElement.textContent = place.place;

    // Create <dd> element and set its content
    let ddElement = document.createElement('dd');
    ddElement.textContent = place.length;

    // Append <dt> and <dd> to the <dl> element
    dlElement.appendChild(dtElement);
    dlElement.appendChild(ddElement);
});






/* Populate Profile Object with placesLive objects */




/* DOM Manipulation - Output */

/* Name */

/* Photo with attributes */


/* Favorite Foods List*/


/* Hobbies List */


/* Places Lived DataList */


