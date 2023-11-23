import * as React from "react";
import { Box, Typography, Card, CardMedia, CardContent } from "@mui/material";
import { pink } from "@mui/material/colors";
import ServiceWeb from "../assets/img/service-web.jpg";
import ServiceMobile from "../assets/img/service-mobile.jpg";
import ServiceDesign from "../assets/img/service-design.jpg";

const services = [
  {
    title: "Website Development",
    image: ServiceWeb,
    description:
      "Upgrade or build from scratch, scalable, fully-functional web solutions.",
  },
  {
    title: "Mobile App Development",
    image: ServiceMobile,
    description:
      "Transform lucrative ideas into original industry-specific mobile apps.",
  },
  {
    title: "Web Design",
    image: ServiceDesign,
    description: "Win with great user experience and persuasive design.",
  },
];

function Services() {
  return (
    <Box
      sx={{
        p: { xs: 2, md: 4 },
        bgcolor: "rgba(0, 0, 0, 0.2)",
        display: "flex",
        flexDirection: "column",
      }}
      id="services-id"
    >
      <Typography
        variant="h3"
        sx={{
          fontWeight: "bold",
          textAlign: "center",
          fontSize: { xs: 36, md: 48 },
        }}
      >
        SERVICES
      </Typography>
      <Box
        sx={{ p: { xs: 2, md: 4 } }}
        gap={4}
        display="flex"
        alignItems="center"
        flexWrap="wrap"
        justifyContent="center"
      >
        {services.map((item, index) => (
          <Card sx={{ maxWidth: 350 }} key={item.title + index}>
            <CardMedia
              sx={{ height: 250, filter: "grayscale(1)", m: 1 }}
              image={item.image}
              title="green iguana"
              key={item + index}
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h6"
                sx={{
                  fontWeight: 700,
                  color: pink[500],
                }}
              >
                {item.title}
              </Typography>
              <Typography variant="p" color="text.primary">
                {item.description}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
}
export default Services;
