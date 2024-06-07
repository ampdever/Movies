async function fetchMovies() {
    const options = {
        method: 'GET',
        url: 'https://moviedatabase8.p.rapidapi.com/Search/Movies',
        headers: {
            'X-RapidAPI-Key': 'd45e1b13d3msh4badc94ab683fbap141c74jsnefd8eac86b00',
            'X-RapidAPI-Host': 'moviedatabase8.p.rapidapi.com'
        }
    };

    try {
        const response = await axios.request(options);
        const movies = response.data; // Adjust based on actual API response structure

        if (!movies || movies.length === 0) {
            console.error('No movies found.');
            return;
        }

        const movieList = document.getElementById('movie-list');
        movieList.innerHTML = ''; // Clear any existing content
        const shuffledMovies = movies.sort(() => 0.5 - Math.random());

        for (let i = 0; i < 3; i++) {
            const movie = shuffledMovies[i];
            if (!movie) break;

            const movieDiv = document.createElement('div');
            movieDiv.classList.add('movie');

            const img = document.createElement('img');
            img.src = movie.poster_path; // Adjust based on actual API response structure
            img.alt = movie.title;

            const title = document.createElement('h2');
            title.textContent = movie.title;

            const description = document.createElement('p');
            description.textContent = movie.overview; // Adjust based on actual API response structure

            movieDiv.appendChild(img);
            movieDiv.appendChild(title);
            movieDiv.appendChild(description);

            movieList.appendChild(movieDiv);
        }
    } catch (error) {
        console.error('Error fetching movies:', error);
    }
}

// Call the fetchMovies function when the page loads
window.onload = fetchMovies;