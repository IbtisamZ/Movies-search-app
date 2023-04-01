import { useState, useEffect } from 'react';
import Loader from 'react-loader-spinner';

import {
  Box,
  Stack,
  Typography,
} from '@mui/material';

import { placeholderCards } from '../../assets/constants/placeholderCards';
import MovieCard from '../MovieCard/MovieCard';
import AppBar from '../AppBar/AppBar';
import Hero from '../Hero/Hero';

const MovieSearchApp = () => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  const showPlaceholder = items.length === 0 || !searchValue;

  // fetch movies data
  const getMovieData = async (searchMovieValue) => {
    setLoading(true);

    const response = await fetch(`https://www.omdbapi.com/?s=${searchMovieValue}&apikey=263d22d8`);
    const jsonResponse = await response.json();

    if (jsonResponse.Search) {
      setItems(jsonResponse.Search);
      setError('');
    }

    if (jsonResponse.Error && jsonResponse.Error === 'Movie not found!') {
      setError(jsonResponse.Error);
    }
    setLoading(false);
  };

  useEffect(() => {
    getMovieData(searchValue);
  }, [searchValue]);

  const inputChange = (event) => {
    setSearchValue(event.target.value);
  };

  // view cards
  const movieCards = items && items.map((item) => (
      <Box key={item.Poster}>
          <MovieCard
              title={item.Title}
              poster={item.Poster}
              year={item.Year}
          />
      </Box>
  ));

  const placeholders = placeholderCards.map((item) => (
      <Box key={item.Title}>
          <MovieCard
              title={item.Title}
              poster={item.Poster}
              year={item.Year}
          />
      </Box>
  ));

  // render cards logic
  const renderMovieCards = () => {
    if (showPlaceholder) {
      return (
          <Stack
              direction="row"
              flexWrap="wrap"
              justifyContent="center"
              sx={{ mx: 3, mt: 2 }}
          >
              {placeholders}
          </Stack>
      );
    } if (loading) {
      return (
          <Box
              display="flex"
              justifyContent="center"
          >
              <Loader
                  type="Oval"
                  color="text.main"
                  height={50}
                  width={50}
              />
          </Box>
      );
    } if (error) {
      return (
          <Box sx={{
            display: 'flex',
            justifyContent: 'center',
          }}
          >
              <Typography
                  variant="h5"
                  color="text.main"
              >
                  {error}
              </Typography>
          </Box>
      );
    }

    return (
        <Stack
            direction="row"
            flexWrap="wrap"
            justifyContent="center"
            sx={{ mx: 3, mt: 2 }}
        >
            {movieCards}
        </Stack>
    );
  };

  return (
      <Box sx={{
        width: 1,
        maxWidth: 1800,
        mx: 'auto',
      }}
      >
          <AppBar
              searchValue={searchValue}
              inputChange={inputChange}
          />
          <Hero />
          {renderMovieCards()}
          <Box sx={{
            width: 1,
            textAlign: 'center',
            color: 'common.gray',
            fontSize: 13,
            mt: 14,
            mb: 3,
          }}
          >
              — IbtisamZ —
          </Box>
      </Box>

  );
};

export default MovieSearchApp;
