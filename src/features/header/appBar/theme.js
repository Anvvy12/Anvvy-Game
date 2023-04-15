import { createTheme, responsiveFontSizes } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#262624',
    },
    secondary: {
      main: '#11cb5f',
    },
  },
});

export default responsiveFontSizes(theme);
