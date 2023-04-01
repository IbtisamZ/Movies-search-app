import { Box, Typography } from '@mui/material';
import { seinfeld } from '../../assets/images';

const Hero = () => (
    <Box
        sx={{
          width: 1,
          height: 700,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'start',
          position: 'relative',
          background: `linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgb(0, 0, 0)), url(${seinfeld})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'top center',
        }}
    >
        <Box sx={{
          mr: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'start',
          position: 'absolute',
          bottom: 200,
          left: {
            xs: 40,
            sm: 100,
            md: 150,
            lg: 300,
          },
        }}
        >
            <Box mb={2}>
                <Typography
                    variant="h3"
                    color="text.main"
                >
                    Welcome to iMovies!
                </Typography>
            </Box>
            <Box>
                <Typography
                    variant="h4"
                    color="text.main"
                >
                    Search your favorite movies and shows.
                </Typography>
            </Box>
        </Box>
    </Box>
);

export default Hero;
