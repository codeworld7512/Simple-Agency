import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { SnackbarProvider } from "material-ui-snackbar-provider";

import { lightTheme, darkTheme } from "./theme";
import { Container } from "@mui/material";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Services from "./components/Services";
import ScrollToTopButton from "./components/ScrollToTopButton";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import ThemeToggleButton from "./components/ThemeToggleButton";
import { useEffect, useState } from "react";

function App() {
  const [theme, setTheme] = useState("light");

  const toogleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
      localStorage.setItem("theme", "light");
    } else {
      setTheme("dark");
      localStorage.setItem("theme", "dark");
    }
  };

  useEffect(() => {
    if (!localStorage.getItem("theme")) {
      const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
      setTheme(darkThemeMq.matches ? "dark" : "light");
      localStorage.setItem("theme", darkThemeMq.matches ? "dark" : "light");
    } else {
      setTheme(localStorage.getItem("theme"));
    }
  }, []);
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <SnackbarProvider
        SnackbarProps={{
          autoHideDuration: 4000,
          anchorOrigin: { vertical: "bottom", horizontal: "center" },
          action: {},
        }}
      >
        <CssBaseline />
        <Container maxWidth="lg" sx={{ position: "relative" }}>
          <ThemeToggleButton onClick={toogleTheme} theme={theme} />
          <Header />
          <AboutUs />
          <Services />
          <ContactUs />
          <Footer />
          <ScrollToTopButton />
        </Container>
      </SnackbarProvider>
    </ThemeProvider>
  );
}

export default App;
