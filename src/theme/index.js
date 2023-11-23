import { createTheme } from "@mui/material/styles";
import { indigo, pink } from "@mui/material/colors";

export const lightTheme = createTheme({
  palette: {
    primary: pink,
    secondary: indigo,
    mode: "light",
  },
  typography: {
    fontFamily: ["Nunito"].join(","),
  },
});

export const darkTheme = createTheme({
  palette: {
    primary: pink,
    secondary: indigo,
    mode: "dark",
  },
  typography: {
    fontFamily: ["Nunito"].join(","),
  },
});



