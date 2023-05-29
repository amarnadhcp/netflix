import React, { useEffect, useState } from 'react';
import './Banner.css';
import axios from '../../axios';
import { API_KEY, imageUrl } from '../../constants/constants';

function Banner() {
  const [movie, setMovie] = useState();

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * 21);
    axios
      .get(`https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`)
      .then((response) => {
        console.log(response.data.results[0]);
        const movies = response.data.results;
        const randomMovie = movies[randomIndex];
        setMovie(randomMovie);
      })
      // .catch((error) => {
      //   console.error('Error fetching movie:', error);
      // });
  }, []);

  return (
    <div>
      <div className='banner' style={{ backgroundImage: `url(${movie ? imageUrl + movie.backdrop_path : ''})` }}>
        <div className='content'>
          <h1 className='title'>{movie ? movie.title : ''}</h1>
          <div className='banner_button'>
            <button className='button'>play</button>
            <button className='button'>My List</button>
          </div>
          <h1 className='description'>{movie ? movie.overview : ''}</h1>
        </div>
        <div className='fade_bottom'></div>
      </div>
    </div>
  );
}

export default Banner;
