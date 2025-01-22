const movies2024 = [
    {
      title: "Madame Web", 
      releaseDate: "2024-02-14",
      genre: "Action",
      poster: "https://image.tmdb.org/t/p/w500/x3PIk93PTbxT88ohfeb26L1DNxE.jpg",
      video: "https://storage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4"
    },
    {
      title: "Dune: Part Two",
      releaseDate: "2024-03-01", 
      genre: "Sci-Fi",
      poster: "https://image.tmdb.org/t/p/w500/8b8R8l88Qje9dn9OE8PY05Nxl1X.jpg",
      video: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"  
    },
    {
      title: "The Marvels",
      releaseDate: "2024-07-26",
      genre: "Superhero",
      poster: "https://image.tmdb.org/t/p/w500/Ag3D9qXjhJ2FUkrlJ0Cv1pgxqYQ.jpg", 
      video: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4"
    },
    {
      title: "Oppenheimer",
      releaseDate: "2024-07-21",
      genre: "Biographical",
      poster: "https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
      video: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4"
    },
    {
      title: "Barbie",
      releaseDate: "2024-07-21",
      genre: "Comedy",
      poster: "https://image.tmdb.org/t/p/w500/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg",
      video: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4"
    },
    {
      title: "The Nun 2",
      releaseDate: "2024-09-06",
      genre: "Horror",
      poster: "https://image.tmdb.org/t/p/w500/8uOp2JKt9jZEcSC16Tf5T4zKwnB.jpg",
      video: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
    },
    {
      title: "Haunted Mansion",
      releaseDate: "2024-08-11",
      genre: "Comedy",
      poster: "https://image.tmdb.org/t/p/w500/6Wylme6tT8bILo2vzjgRiF7Yl8S.jpg",
      video: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4"
    },
    {
      title: "The Equalizer 3",
      releaseDate: "2024-09-01",
      genre: "Action",
      poster: "https://image.tmdb.org/t/p/w500/p3Tcmx7XGIz825vjDDqEg8fO7sR.jpg",
      video: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4"
    },
    {
      title: "PAW Patrol: The Mighty Movie",
      releaseDate: "2024-09-29",
      genre: "Animation",
      poster: "https://image.tmdb.org/t/p/w500/5hoS2v9kx18Xm1zoICzZI3AW10V.jpg",
      video: "https://storage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4"
    },
    {
      title: "Saw X",
      releaseDate: "2024-10-27",
      genre: "Horror",
      poster: "https://image.tmdb.org/t/p/w500/p1F51Lvj3ETPwRnF8wTj0G1ayPS.jpg",
      video: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
    },
    {
      title: "The Exorcist: Believer",
      releaseDate: "2024-10-06",
      genre: "Horror",
      poster: "https://image.tmdb.org/t/p/w500/7XJHY8Y4KnQYj37T6AM5X7G2vQf.jpg",
      video: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4"
    },
    {
      title: "Killers of the Flower Moon",
      releaseDate: "2024-10-20",
      genre: "Crime",
      poster: "https://image.tmdb.org/t/p/w500/1wAy4b9Aqj5p4G7vH1F4yB18N3m.jpg",
      video: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4"
    },
    {
      title: "Distant",
      releaseDate: "2024-01-19",
      genre: "Science Fiction",
      poster: "https://image.tmdb.org/t/p/w500/5Pp6zT8U3pxu7wmQVHkACCNM1r5.jpg",
      video: "https://storage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4"
    },
    {
      title: "80 for Brady",
      releaseDate: "2024-02-03",
      genre: "Biographical",
      poster: "https://image.tmdb.org/t/p/w500/egoyMDLqCxzjnIm7KjVH4g9dP48.jpg",
      video: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
    },
    {
      title: "Sharper",
      releaseDate: "2024-02-10",
      genre: "Thriller",
      poster: "https://image.tmdb.org/t/p/w500/7TxY8pU5YtGgyXnU0e7cSHj9fTn.jpg",
      video: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4"
    },
    {
      title: "Ant-Man and the Wasp: Quantumania",
      releaseDate: "2024-02-17",
      genre: "Superhero",
      poster: "https://image.tmdb.org/t/p/w500/4Lw5TlrXb3I2YtmuolIe4v8V3x4.jpg",
      video: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4"
    },
    {
      title: "Cocaine Bear",
      releaseDate: "2024-02-24",
      genre: "Action",
      poster: "https://image.tmdb.org/t/p/w500/ktnTh6nCQfnQXgHg1QeZeD2clTR.jpg",
      video: "https://storage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4"
    },
    {
      title: "Unseen",
      releaseDate: "2024-03-03",
      genre: "Thriller",
      poster: "https://image.tmdb.org/t/p/w500/pG3tB6sZsN3m5r3MVbW7f9Z8Q7r.jpg",
      video: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
    },
    {
      title: "Champions",
      releaseDate: "2024-03-10",
      genre: "Comedy",
      poster: "https://image.tmdb.org/t/p/w500/6Rf1oK8x8HmXb2pUvFDDc3G5mZs.jpg",
      video: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4"
    },
    {
      title: "65",
      releaseDate: "2024-03-10",
      genre: "Science Fiction",
      poster: "https://image.tmdb.org/t/p/w500/5Pp6zT8U3pxu7wmQVHkACCNM1r5.jpg",
      video: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4"
    },
    {
      title: "Scream VI",
      releaseDate: "2024-03-10",
      genre: "Horror",
      poster: "https://image.tmdb.org/t/p/w500/7XJHY8Y4KnQYj37T6AM5X7G2vQf.jpg",
      video: "https://storage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4"
    },
    {
      title: "The Magic Flute",
      releaseDate: "2024-03-17",
      genre: "Fantasy",
      poster: "https://image.tmdb.org/t/p/w500/9xu2Tj9pV9AX5Hx1TVT6aB8i2PQ.jpg",
      video: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
    },
    {
      title: "Tetris",
      releaseDate: "2024-03-31",
      genre: "Biographical",
      poster: "https://image.tmdb.org/t/p/w500/egoyMDLqCxzjnIm7KjVH4g9dP48.jpg",
      video: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4"
    },
    {
      title: "Murder Mystery 2",
      releaseDate: "2024-03-31",
      genre: "Comedy",
      poster: "https://image.tmdb.org/t/p/w500/6Rf1oK8x8HmXb2pUvFDDc3G5mZs.jpg",
      video: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4"
    },
    {
      title: "The Mother",
      releaseDate: "2024-05-12",
      genre: "Action",
      poster: "https://image.tmdb.org/t/p/w500/p3Tcmx7XGIz825vjDDqEg8fO7sR.jpg",
      video: "https://storage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4"
    },
    {
      title: "Book Club: The Next Chapter",
      releaseDate: "2024-05-12",
      genre: "Comedy",
      poster: "https://image.tmdb.org/t/p/w500/6Rf1oK8x8HmXb2pUvFDDc3G5mZs.jpg",
      video: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
    },
    {
      title: "Fast X",
      releaseDate: "2024-05-19",
      genre: "Action",
      poster: "https://image.tmdb.org/t/p/w500/p3Tcmx7XGIz825vjDDqEg8fO7sR.jpg",
      video: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4"
    },
    {
      title: "The Little Mermaid",
      releaseDate: "2024-05-26",
      genre: "Fantasy",
      poster: "https://image.tmdb.org/t/p/w500/9xu2Tj9pV9AX5Hx1TVT6aB8i2PQ.jpg",
      video: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4"
    },
    {
      title: "Kandahar",
      releaseDate: "2024-05-26",
      genre: "Action",
      poster: "https://image.tmdb.org/t/p/w500/ktnTh6nCQfnQXgHg1QeZeD2clTR.jpg",
      video: "https://storage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4"
    },
    {
      title: "Spider-Man: Across the Spider-Verse",
      releaseDate: "2024-06-02",
      genre: "Animation",
      poster: "https://image.tmdb.org/t/p/w500/5hoS2v9kx18Xm1zoICzZI3AW10V.jpg",
      video: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
    },
    {
      title: "The Boogeyman",
      releaseDate: "2024-06-02",
      genre: "Horror",
      poster: "https://image.tmdb.org/t/p/w500/7XJHY8Y4KnQYj37T6AM5X7G2vQf.jpg",
      video: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4"
    },
    {
      title: "Past Lives",
      releaseDate: "2024-06-02",
      genre: "Romance",
      poster: "https://image.tmdb.org/t/p/w500/9xu2Tj9pV9AX5Hx1TVT6aB8i2PQ.jpg",
      video: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4"
    },
    {
      title: "No Hard Feelings",
      releaseDate: "2024-06-23",
      genre: "Comedy",
      poster: "https://image.tmdb.org/t/p/w500/6Rf1oK8x8HmXb2pUvFDDc3G5mZs.jpg",
      video: "https://storage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4"
    },
    {
      title: "The Flash",
      releaseDate: "2024-06-16",
      genre: "Superhero",
      poster: "https://image.tmdb.org/t/p/w500/4Lw5TlrXb3I2YtmuolIe4v8V3x4.jpg",
      video: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
    },
    {
      title: "Elemental",
      releaseDate: "2024-06-16",
      genre: "Animation",
      poster: "https://image.tmdb.org/t/p/w500/5hoS2v9kx18Xm1zoICzZI3AW10V.jpg",
      video: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4"
    },
    {
      title: "In the Land of Saints and Sinners",
      releaseDate: "2024-06-23",
      genre: "Thriller",
      poster: "https://image.tmdb.org/t/p/w500/pG3tB6sZsN3m5r3MVbW7f9Z8Q7r.jpg",
      video: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4"
    },
    {
      title: "Insidious: The Red Door",
      releaseDate: "2024-07-07",
      genre: "Horror",
      poster: "https://image.tmdb.org/t/p/w500/7XJHY8Y4KnQYj37T6AM5X7G2vQf.jpg",
      video: "https://storage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4"
    },
    {
      title: "Indiana Jones and the Dial of Destiny",
      releaseDate: "2024-07-14",
      genre: "Action",
      poster: "https://image.tmdb.org/t/p/w500/p3Tcmx7XGIz825vjDDqEg8fO7sR.jpg",
      video: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
    },
    {
      title: "Mission: Impossible - Dead Reckoning Part One",
      releaseDate: "2024-07-14",
      genre: "Action",
      poster: "https://image.tmdb.org/t/p/w500/p3Tcmx7XGIz825vjDDqEg8fO7sR.jpg",
      video: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4"
    },
    {
      title: "Haunted Mansion",
      releaseDate: "2024-08-11",
      genre: "Comedy",
      poster: "https://image.tmdb.org/t/p/w500/6Wylme6tT8bILo2vzjgRiF7Yl8S.jpg",
      video: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4"
    },
    {
      title: "Blue Beetle",
      releaseDate: "2024-08-18",
      genre: "Superhero",
      poster: "https://image.tmdb.org/t/p/w500/4Lw5TlrXb3I2YtmuolIe4v8V3x4.jpg",
      video: "https://storage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4"
    },
    {
      title: "The Nun 2",
      releaseDate: "2024-09-06",
      genre: "Horror",
      poster: "https://image.tmdb.org/t/p/w500/8uOp2JKt9jZEcSC16Tf5T4zKwnB.jpg",
      video: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
    },
    {
      title: "A Haunting in Venice",
      releaseDate: "2024-09-15",
      genre: "Mystery",
      poster: "https://image.tmdb.org/t/p/w500/9xu2Tj9pV9AX5Hx1TVT6aB8i2PQ.jpg",
      video: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4"
    },
    {
      title: "The Equalizer 3",
      releaseDate: "2024-09-01",
      genre: "Action",
      poster: "https://image.tmdb.org/t/p/w500/p3Tcmx7XGIz825vjDDqEg8fO7sR.jpg",
      video: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4"
    },
    {
      title: "PAW Patrol: The Mighty Movie",
      releaseDate: "2024-09-29",
      genre: "Animation",
      poster: "https://image.tmdb.org/t/p/w500/5hoS2v9kx18Xm1zoICzZI3AW10V.jpg",
      video: "https://storage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4"
    },
    {
      title: "Saw X",
      releaseDate: "2024-10-27",
      genre: "Horror",
      poster: "https://image.tmdb.org/t/p/w500/p1F51Lvj3ETPwRnF8wTj0G1ayPS.jpg",
      video: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
    },
    {
      title: "The Exorcist: Believer",
      releaseDate: "2024-10-06",
      genre: "Horror",
      poster: "https://image.tmdb.org/t/p/w500/7XJHY8Y4KnQYj37T6AM5X7G2vQf.jpg",
      video: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4"
    },
    {
      title: "Killers of the Flower Moon",
      releaseDate: "2024-10-20",
      genre: "Crime",
      poster: "https://image.tmdb.org/t/p/w500/1wAy4b9Aqj5p4G7vH1F4yB18N3m.jpg",
      video: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4"
    }
  ];
  
  document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const playMovie = urlParams.get('play');
    if (playMovie) {
      openVideoPlayer(playMovie);
    }
  
    const moviesContainer = document.getElementById('moviesContainer');
    if (!moviesContainer) return;
  
    const uniqueMovies = [...new Map(movies2024.map(m => [m.title, m])).values()]
      .sort((a, b) => new Date(b.releaseDate) - new Date(a.releaseDate));
  
    uniqueMovies.forEach(movie => {
      moviesContainer.innerHTML += createMovieCard(movie);
    });
  
    const searchBar = document.querySelector('.search-bar');
    if (searchBar) {
      searchBar.addEventListener('input', handleSearch);
    }
  });
  
  async function searchMovieWithAI(searchTerm) {
    try {
      const response = await fetch('/api/ai_completion', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          prompt: `Search for movie information for "${searchTerm}" and return detailed movie data.
          
          interface MovieSearchResult {
            title: string;
            releaseDate: string;
            genre: string;
            poster: string;
            description: string;
            rating: string;
            streamingLinks: string[];
            cast: string[];
            director: string;
          }
          
          {
            "title": "Inception",
            "releaseDate": "2010-07-16",
            "genre": "Sci-Fi",
            "poster": "https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
            "description": "A thief who steals corporate secrets through dream-sharing technology...",
            "rating": "PG-13",
            "streamingLinks": ["Netflix", "Amazon Prime"],
            "cast": ["Leonardo DiCaprio", "Ellen Page"],
            "director": "Christopher Nolan"
          }
          `,
          data: searchTerm
        }),
      });
  
      if (!response.ok) {
        throw new Error('Failed to get AI response');
      }
  
      const movieData = await response.json();
      return movieData;
    } catch (error) {
      console.error('Error searching movie:', error);
      return null;
    }
  }
  
  async function addMovieToDatabase(movieData) {
    const newMovie = {
      title: movieData.title,
      releaseDate: movieData.releaseDate,
      genre: movieData.genre,
      poster: movieData.poster,
      video: "https://storage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4", // Default video
      description: movieData.description,
      rating: movieData.rating,
      cast: movieData.cast,
      director: movieData.director
    };
  
    movies2024.push(newMovie);
    
    const moviesContainer = document.getElementById('moviesContainer');
    if (moviesContainer) {
      moviesContainer.insertAdjacentHTML('afterbegin', createMovieCard(newMovie));
    }
  
    return newMovie;
  }
  
  async function handleSearch(e) {
    const searchTerm = e.target.value.toLowerCase();
    const moviesContainer = document.getElementById('moviesContainer');
    
    const filteredMovies = movies2024.filter(movie => 
      movie.title.toLowerCase().includes(searchTerm) ||
      movie.genre.toLowerCase().includes(searchTerm)
    );
    
    if (filteredMovies.length === 0 && searchTerm.length > 2) {
      moviesContainer.innerHTML = '<div class="loading-indicator">Searching external sources...</div>';
      
      const movieData = await searchMovieWithAI(searchTerm);
      
      if (movieData) {
        await addMovieToDatabase(movieData);
        
        const successMessage = document.createElement('div');
        successMessage.className = 'success-message';
        successMessage.textContent = `Added "${movieData.title}" to MovieMatch library!`;
        document.querySelector('.browse-nav').appendChild(successMessage);
        
        setTimeout(() => successMessage.remove(), 3000);
      }
    }
    
    moviesContainer.innerHTML = '';
    const updatedFilteredMovies = movies2024.filter(movie => 
      movie.title.toLowerCase().includes(searchTerm) ||
      movie.genre.toLowerCase().includes(searchTerm)
    );
    
    updatedFilteredMovies.forEach(movie => {
      moviesContainer.innerHTML += createMovieCard(movie);
    });
  }
  
  function createMovieCard(movie) {
    return `
      <div class="movie-card" data-title="${movie.title}" data-genre="${movie.genre}">
        <div class="movie-poster-wrapper">
          <img src="${movie.poster}" class="movie-poster" alt="${movie.title}" loading="lazy">
          <div class="play-overlay">
            <button class="play-button" onclick="openVideoPlayer('${movie.title}')">
              <svg viewBox="0 0 24 24" class="play-icon">
                <path d="M8 5v14l11-7z" fill="currentColor"/>
              </svg>
            </button>
            <button class="download-button" onclick="downloadMovie('${movie.title}', '${movie.genre}', '${movie.poster}')">
              <svg viewBox="0 0 24 24" class="download-icon">
                <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" fill="currentColor"/>
              </svg>
            </button>
          </div>
        </div>
        <div class="movie-info">
          <h3>${movie.title}</h3>
          <p>${movie.genre}</p>
          <p class="release-date">${new Date(movie.releaseDate).toLocaleDateString()}</p>
        </div>
      </div>
    `;
  }
  
  window.openVideoPlayer = (movieTitle) => {
    const movie = movies2024.find(m => m.title === movieTitle);
    if (!movie) return;
  
    const videoPlayer = document.createElement('div');
    videoPlayer.className = 'video-player-overlay';
    
    videoPlayer.innerHTML = `
      <div class="video-player-content">
        <div class="video-header">
          <h2>${movieTitle}</h2>
          <button class="close-video" onclick="closeVideoPlayer()">×</button>
        </div>
        <video controls autoplay>
          <source src="${movie.video}" type="video/mp4">
          Your browser does not support the video tag.
        </video>
      </div>
    `;
  
    document.body.appendChild(videoPlayer);
    document.body.style.overflow = 'hidden';
  };
  
  window.closeVideoPlayer = () => {
    const videoPlayer = document.querySelector('.video-player-overlay');
    if (videoPlayer) {
      const video = videoPlayer.querySelector('video');
      if (video) video.pause();
      videoPlayer.remove();
      document.body.style.overflow = 'auto';
    }
  };
  
  window.downloadMovie = (title, genre, poster) => {
    const downloads = JSON.parse(localStorage.getItem('movieDownloads') || '[]');
    
    if (downloads.some(d => d.title === title)) {
      alert('This movie is already in your downloads');
      return;
    }
  
    const download = {
      id: Date.now().toString(),
      title,
      genre,
      progress: 0,
      size: '2.1 GB',
      poster: poster,
      paused: false
    };
  
    downloads.push(download);
    localStorage.setItem('movieDownloads', JSON.stringify(downloads));
    
    alert('Movie added to downloads. View in your profile.');
  };
  
  const style = document.createElement('style');
  style.textContent = `
    .loading-indicator {
      text-align: center;
      padding: 20px;
      color: var(--army-light);
    }
  
    .success-message {
      position: fixed;
      top: 80px;
      right: 20px;
      background: var(--army-green);
      color: var(--off-white);
      padding: 10px 20px;
      border-radius: 4px;
      animation: slideIn 0.3s ease-out;
      z-index: 1000;
    }
  
    @keyframes slideIn {
      from {
        transform: translateX(100%);
        opacity: 0;
      }
      to {
        transform: translateX(0);
        opacity: 1;
      }
    }
  `;
  document.head.appendChild(style);