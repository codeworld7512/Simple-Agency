import * as React from "react";
import {
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const menuItems = [
  { label: "About", to: "about-id" },
  { label: "Services", to: "services-id" },
  { label: "Contact", to: "contact-id" },
];

function Header() {
  const [openDrawer, setOpenDrawer] = React.useState(false);
  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setOpenDrawer(open);
  };
  const scrollTo = (id) => {
    document.getElementById(id).scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
    console.log(document.getElementById(id));
  };
  const list = () => (
    <Box
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {menuItems.map((item, index) => (
          <ListItem key={item.label + index} disablePadding>
            <ListItemButton onClick={() => scrollTo(item.to)}>
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  return (
    <Box
      sx={{
        p: { xs: 2, md: 4 },
        backgroundPosition: "top center",
        backgroundSize: "cover",
      }}
      className="header-bg"
    >
      <Drawer anchor="top" open={openDrawer} onClose={toggleDrawer(false)}>
        {list()}
      </Drawer>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Box>
          <Typography
            variant="h4"
            sx={{ color: "white", fontWeight: "bold", cursor: "pointer" }}
          >
            Wisdom LLC
          </Typography>
        </Box>
        <IconButton
          sx={{
            color: "white",
            width: 50,
            height: 50,
            display: { xs: "block", md: "none" },
          }}
          onClick={toggleDrawer(true)}
        >
          <MenuIcon sx={{ width: 35, height: 35 }} />
        </IconButton>
        <Stack
          direction="row"
          spacing={2}
          sx={{ display: { xs: "none", md: "flex" } }}
        >
          {menuItems.map((item, index) => (
            <Typography
              variant="h6"
              sx={{ color: "white", cursor: "pointer" }}
              component="a"
              key={JSON.stringify(item.label + index)}
              onClick={() => scrollTo(item.to)}
            >
              {item.label}
            </Typography>
          ))}
        </Stack>
      </Stack>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          py: 10,
        }}
      >
        <Typography sx={{ color: "white", mb: 2 }} variant="h5">
          Digital Services
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: { xs: "center", md: "baseline" },
            justifyContent: "center",
            flexDirection: { xs: "column", md: "row" },
            gap: { xs: 1, md: 2 },
          }}
        >
          <Typography
            variant="h2"
            sx={{ fontSize: { xs: 36, md: 64 }, color: "white" }}
          >
            We build
          </Typography>
          <Typography
            variant="h1"
            color="primary"
            sx={{ fontSize: { xs: 48, md: 72 }, fontWeight: 700 }}
          >
            Experiences
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
export default Header;
