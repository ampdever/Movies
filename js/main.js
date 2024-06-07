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
        const movies = response.data;

        if (!movies || movies.length === 0) {
            console.error('No movies found.');
            return;
        }

        const movieList = document.getElementById('movie-list');
        movieList.innerHTML = '';
        const shuffledMovies = movies.sort(() => 0.5 - Math.random());

        for (let i = 0; i < 3; i++) {
            const movie = shuffledMovies[i];
            if (!movie) break;

            const movieDiv = document.createElement('div');
            movieDiv.classList.add('movie');

            const img = document.createElement('img');
            img.src = movie.poster_path;
            img.alt = movie.title;

            const title = document.createElement('h2');
            title.textContent = movie.title;

            const description = document.createElement('p');
            description.textContent = movie.overview;

            movieDiv.appendChild(img);
            movieDiv.appendChild(title);
            movieDiv.appendChild(description);

            movieList.appendChild(movieDiv);
        }
    } catch (error) {
        console.error('Error fetching movies:', error);
    }
}

window.onload = fetchMovies;