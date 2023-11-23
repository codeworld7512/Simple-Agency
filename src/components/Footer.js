import * as React from "react";
import { Box, Typography } from "@mui/material";
function Footer() {
  return (
    <Box
      sx={{
        p: { xs: 2, md: 4 },
        bgcolor: "rgba(0, 0, 0, 0.7)",
        color: "white",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Typography variant="h4" mb={2} sx={{ fontWeight: "bold" }}>
        Wisdom LLC
      </Typography>
      <Typography variant="h4" mb={1}>
        us
      </Typography>
      <Typography variant="h4">office</Typography>
      <Typography variant="p" mb={1}>
        112 Summer Lakes Drive Cary, NC 27513
      </Typography>
      <Typography variant="h4">Ukraine</Typography>
      <Typography variant="p" mb={2}>
        Av. Unión, 163, 10th Floor <br />
        Colonia Americana <br />
        Guadalajara, Jalisco, México
      </Typography>
      <Typography variant="caption">
        © 2023-{new Date().getFullYear()} Wisdom LLC. All rights reserved.
      </Typography>
    </Box>
  );
}
export default Footer;
