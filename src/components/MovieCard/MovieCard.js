import { Box, Card, Typography } from '@mui/material';
import { notFound } from '../../assets/images';

const MovieCard = ({ poster = '', title = '', year = '' }) => (
    <Card
        sx={{
          m: 3,
          width: 250,
          maxWidth: 250,
          borderRadius: 0,
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: 'transparent',
          transition: '600ms linear',
          ':hover': {
            transform: { md: 'scale(1.1)' },
          },
        }}
    >
        <Box>
            <img
                src={poster || notFound}
                alt="Img not found"
                height="350"
                width="250"
            />
        </Box>
        <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
        >
            <Box sx={{ overflowWrap: 'anywhere' }}>
                <Typography color="text.main">
                    {title}
                </Typography>
            </Box>
            <Box>
                <Typography color="text.main">
                    {year}
                </Typography>
            </Box>
        </Box>
    </Card>
);

export default MovieCard;
