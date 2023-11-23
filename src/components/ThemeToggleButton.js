import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { Button } from "@mui/material";

const ThemeToggleButton = ({ onClick, theme }) => {
  return (
    <Button
      variant="contained"
      color="secondary"
      sx={{
        minWidth: 30,
        width: 30,
        height: 60,
        position: "fixed",
        top: 80,
        left: 0,
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onClick={onClick}
    >
      {theme === "light" ? (
        <LightModeIcon style={{ color: "white" }} />
      ) : (
        <DarkModeIcon style={{ color: "black" }} />
      )}
    </Button>
  );
};

export default ThemeToggleButton;
