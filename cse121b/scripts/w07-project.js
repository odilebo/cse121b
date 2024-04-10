/* Declare and initialize global variables */

const albumsContainer = document.getElementById('albums');
let albumList = [];


/* async displayAlbums Function */

const displayAlbums = (albums) => {
    albums.forEach((album) => {
        
        const article = document.createElement('article');
        
        
        const title = document.createElement('h2');
        title.textContent = album.title;
        
        
        const image = document.createElement('img');
        image.src = album.imageUrl;
        image.alt = album.title;
        
        
        const artist = document.createElement('p');
        artist.textContent = `Artist: ${album.artist}`;
        
        const genre = document.createElement('p');
        genre.textContent = `Genre: ${album.genre}`;
        
        const year = document.createElement('p');
        year.textContent = `Year: ${album.year}`;
        
    
        article.appendChild(title);
        article.appendChild(image);
        article.appendChild(artist);
        article.appendChild(genre);
        article.appendChild(year);
        
    
        albumsContainer.appendChild(article);
    });
};


/* async getAlbums Function using fetch() */

const getAlbums = async () => {
    const response = await fetch('https://odilebo.github.io/cse121b/cse121b/music.json');
    if (!response.ok) {
        throw new Error('Failed to fetch album data');
    }
    albumList = await response.json(); 
    displayAlbums(albumList);
};


// Calling getAlbums to fetch and display the albums
getAlbums();


/* reset Function */

const reset = () => {
    albumsContainer.innerHTML = '';
};


/* sortBy Function */

const filterAlbums = (albums) => {
    reset(); 
    
    const filter = document.getElementById('genre').value.toLowerCase(); 
    
    switch (filter) {
        case 'alternative':
            displayAlbums(albumList.filter(album => album.genre.toLowerCase() === 'alternative'));
            break;
        case 'rock':
            displayAlbums(albumList.filter(album => album.genre.toLowerCase() === 'rock'));
            break;
        case 'rap':
            displayAlbums(albumList.filter(album => album.genre.toLowerCase() === 'rap'));
            break;
        case 'soul':
            displayAlbums(albumList.filter(album => album.genre.toLowerCase() === 'soul'));
            break;
        case 'all':
        default:
            displayAlbums(albumList);
            break;
    }
};


/* Event Listener */

document.getElementById('genre').addEventListener('change', () => { filterAlbums(albumList); });
