import { blue } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

const globalTheme = createTheme({
  palette: {},
  typography: {
    fontFamily: `"IranYekan" , "Roboto" , "Arial"`,
    fontWeightLight: 500,
    fontWeightRegular: 600,
    fontWeightMedium: 700,
    fontWeightBold: 800,
    fontWeightFat: 900,
  },
});
const appBarTheme = createTheme({
  palette: {
    primary: {
      main: blue[800],
    },
  },
});
export { globalTheme, appBarTheme };
