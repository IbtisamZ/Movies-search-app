import {
  Box,
  Toolbar,
  TextField,
  Typography,
  InputAdornment,
  AppBar as MUIAppBar,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import GrainIcon from '@mui/icons-material/Grain';

const AppBar = ({ searchValue = '', inputChange = () => { } }) => (
    <MUIAppBar
        sx={{
          backgroundColor: 'transparent',
          boxShadow: 'none',
          position: 'static',
          pt: 5,
          px: {
            xs: 0,
            sm: 8,
            md: 10,
            lg: 18,
          },
        }}
    >
        <Toolbar sx={{ mb: 2 }}>
            <Typography
                variant="h6"
                noWrap
                component="div"
                color="text.main"
                sx={{
                  flexGrow: 1,
                  display: 'flex',
                  alignItems: 'center',
                }}
            >
                <GrainIcon sx={{
                  color: 'text.main',
                  mr: 1,
                }}
                />
                iMovies
            </Typography>
            <Box>
                <TextField
                    fullWidth
                    value={searchValue}
                    placeholder="Search..."
                    onChange={inputChange}
                    InputProps={{
                      endAdornment:
    <InputAdornment
        position="end"
    >
        <SearchIcon sx={{ color: 'common.gray' }} />
    </InputAdornment>,
                    }}
                />
            </Box>
        </Toolbar>
    </MUIAppBar>
);

export default AppBar;
