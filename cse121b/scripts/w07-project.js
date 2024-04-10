document.addEventListener('DOMContentLoaded', () => {
    const albumsContainer = document.getElementById('albums');
    const genreSelect = document.getElementById('genre');

    // Fetch data from external source (e.g., API)
    fetch('https://api.example.com/music_albums')
        .then(response => response.json())
        .then(data => {
            // Display all albums initially
            displayAlbums(data);

            // Add event listener for genre filter
            genreSelect.addEventListener('change', () => {
                const selectedGenre = genreSelect.value;
                if (selectedGenre) {
                    const filteredAlbums = data.filter(album => album.genre.toLowerCase() === selectedGenre.toLowerCase());
                    displayAlbums(filteredAlbums);
                } else {
                    displayAlbums(data); // Display all albums if no genre selected
                }
            });
        })
        .catch(error => console.error('Error fetching album data:', error));

    // Function to display albums
    const displayAlbums = (albums) => {
        albumsContainer.innerHTML = ''; // Clear previous albums

        albums.forEach(album => {
            const albumElement = document.createElement('div');
            albumElement.classList.add('album');

            const imageUrl = album.image; // Assuming each album object has an 'image' property

            albumElement.innerHTML = `
                <h2>${album.title}</h2>
                <img src="${imageUrl}" alt="${album.title}">
                <p>Artist: ${album.artist}</p>
                <p>Genre: ${album.genre}</p>
                <p>Year: ${album.year}</p>
            `;

            albumsContainer.appendChild(albumElement);
        });
    };
});
