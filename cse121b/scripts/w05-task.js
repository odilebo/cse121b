/* W05: Programming Tasks */

/* Declare and initialize global variables */

const templesElement = document.getElementById('temples'); 

let templeList = [] ;


/* async displayTemples Function */

const displayTemples = (temples) => {
    temples.forEach((temple) => {
        // Create <article> element
        const article = document.createElement('article');
        
        // Create <h3> element
        const heading = document.createElement('h3');
        heading.textContent = temple.templeName;
        
        // Create <img> element
        const image = document.createElement('img');
        image.src = temple.imageUrl;
        image.alt = temple.location;
        
        // Append <h3> and <img> to <article>
        article.appendChild(heading);
        article.appendChild(image);
        
        // Append <article> to global templesElement variable
        templesElement.appendChild(article);
    });
};



/* async getTemples Function using fetch()*/

const getTemples = async () => {
        const response = await fetch('https://byui-cse.github.io/cse121b-ww-course/resources/temples.json');
        if (!response.ok) {
            throw new Error('Failed to fetch temples data');
        }
        templeList = await response.json(); // Assign to the global variable
        displayTemples(templeList);
};


// Calling getTemples to fetch and display the temples
getTemples();




/* reset Function */

const reset = () => {
    const templesElement = document.getElementById('temples'); // Assuming you have a div with id "templesContainer" in your HTML
    templesElement.innerHTML = ''; // Clearing all content inside templesElement
};



/* sortBy Function */

const filterTemples = (temples) => {
    reset(); // Clear the output
    
    const filter = document.getElementById('sortBy').value.toLowerCase(); // Get the value of the HTML element with ID 'filtered' and convert to lowercase
    
    switch(filter) {
        case 'utah':
            displayTemples(templeList.filter(temple => temple.location.toLowerCase().includes('utah')));
            break;
        case 'notutah':
            displayTemples(templeList.filter(temple => !temple.location.toLowerCase().includes('utah')));
            break;
        case 'older':
            displayTemples(templeList.filter(temple => new Date(temple.dedicated) < new Date(1950, 0, 1)));
            break;
        case 'all':
        default:
            displayTemples(templeList);
            break;
    }
};


/* Event Listener */

document.getElementById('sortBy').addEventListener('change', () => { filterTemples(templeList);});

