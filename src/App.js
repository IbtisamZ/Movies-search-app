import CssBaseline from '@mui/material/CssBaseline';
import createTheme from '@mui/material/styles/createTheme';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import MovieSearchApp from './components/MovieSearchApp/MovieSearchApp';

const App = () => {
  const theme = createTheme({
    palette: {
      background: {
        default: '#000',
      },
      primary: {
        main: '#000',
      },
      text: {
        main: '#fff',
      },
      common: {
        gray: '#808080',
      },
    },
    components: {
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            backgroundColor: 'rgba(174, 171, 173, 0.2)',
            borderRadius: 30,
            border: 'none',
            color: 'white',
            height: 50,
            width: 210,
            transition: 'width .5s',
            '&:focus-within': {
              width: 320,
            },
          },
          input: {
            '&:-webkit-autofill': {
              WebkitBoxShadow: '0 0 0 1000px  rgba(174, 171, 173, 0.2) inset',
              WebkitTextFillColor: 'white',
              transition: '1000000s ease-in-out',
            },
          },
        },
      },
    },
  });

  return (
      <ThemeProvider theme={theme}>
          <CssBaseline />
          <MovieSearchApp />
      </ThemeProvider>
  );
};

export default App;
