/* Declare and initialize global variables */

const albumsContainer = document.getElementById('albums');
let albumList = [];


/* async displayAlbums Function */

const displayAlbums = (albums) => {
    albums.forEach((album) => {
        // Create <article> element
        const article = document.createElement('article');
        
        // Create <h2> element
        const title = document.createElement('h2');
        title.textContent = album.title;
        
        // Create <img> element
        const image = document.createElement('img');
        image.src = album.imageUrl;
        image.alt = album.title;
        
        // Create <p> elements for artist, genre, and year
        const artist = document.createElement('p');
        artist.textContent = `Artist: ${album.artist}`;
        
        const genre = document.createElement('p');
        genre.textContent = `Genre: ${album.genre}`;
        
        const year = document.createElement('p');
        year.textContent = `Year: ${album.year}`;
        
        // Append elements to <article>
        article.appendChild(title);
        article.appendChild(image);
        article.appendChild(artist);
        article.appendChild(genre);
        article.appendChild(year);
        
        // Append <article> to global albumsContainer variable
        albumsContainer.appendChild(article);
    });
};


/* async getAlbums Function using fetch() */

const getAlbums = async () => {
    const response = await fetch('https://byui-cse.github.io/cse121b-ww-course/resources/temples.json');
    if (!response.ok) {
        throw new Error('Failed to fetch album data');
    }
    albumList = await response.json(); // Assign to the global variable
    displayAlbums(albumList);
};


// Calling getAlbums to fetch and display the albums
getAlbums();


/* reset Function */

const reset = () => {
    albumsContainer.innerHTML = ''; // Clearing all content inside albumsContainer
};


/* sortBy Function */

const filterAlbums = (albums) => {
    reset(); // Clear the output
    
    const filter = document.getElementById('genre').value.toLowerCase(); // Get the value of the HTML element with ID 'genre' and convert to lowercase
    
    switch (filter) {
        case 'pop':
            displayAlbums(albumList.filter(album => album.genre.toLowerCase() === 'pop'));
            break;
        case 'rock':
            displayAlbums(albumList.filter(album => album.genre.toLowerCase() === 'rock'));
            break;
        case 'hip hop':
            displayAlbums(albumList.filter(album => album.genre.toLowerCase() === 'hip hop'));
            break;
        case 'r&b':
            displayAlbums(albumList.filter(album => album.genre.toLowerCase() === 'r&b'));
            break;
        case 'all':
        default:
            displayAlbums(albumList);
            break;
    }
};


/* Event Listener */

document.getElementById('genre').addEventListener('change', () => { filterAlbums(albumList); });
