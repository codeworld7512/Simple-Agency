import * as React from "react";
import { Box, Typography, Stack } from "@mui/material";
import { pink } from "@mui/material/colors";

const techExpertises = [
  {
    title: "Front-end",
    techStacks: ["ReactJS", "Angular", "AngularJS"],
    icon: 1,
  },
  {
    title: "Back-end",
    techStacks: ["NodeJS", "Python", "Firebase", "CakePHP"],
    icon: 1,
  },
  {
    title: "Mobile development",
    techStacks: ["React Native", "Flutter"],
    icon: 1,
  },
  {
    title: "Cloud",
    techStacks: [
      "Amazon Web Services",
      "Google Cloud Platform",
      "Microsoft Azure",
      "Digital Ocean",
    ],
    icon: 1,
  },
  {
    title: "CI/CD",
    techStacks: ["Github Action", "Jenkins CI"],
    icon: 1,
  },
  {
    title: "AI/ML",
    techStacks: [
      "NLP",
      "Computer vision",
      "Deep learning",
      "Tensorflow",
      "Keras",
      "PyTorch",
    ],
    icon: 1,
  },
];

function AboutUs() {
  return (
    <Box
      sx={{
        bgcolor: "rgba(0, 0, 0, 0.07)",
        display: "block",
        flexDirection: "column",
      }}
      id="about-id"
    >
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1fr 1fr 1fr" },
        }}
      >
        <Box display="flex" alignItems="center" sx={{ m: { xs: 2, md: 4 } }}>
          <Stack direction="column" spacing={2}>
            <Typography
              variant="h3"
              sx={{ fontWeight: 600, fontSize: { xs: 36, md: 48 } }}
            >
              PREMIUM DESIGN AND DEVELOPMENT
            </Typography>
            <Typography variant="p" sx={{ fontSize: 18 }}>
              We are committed to developing top quality IT applications and
              services on time, on target, and with complete dedication to
              customer satisfaction.
            </Typography>
            <Typography variant="p" sx={{ fontSize: 18 }}>
              Wisdom LLC has experience across multiple industry sectors
              including Web designing, gaming and wagering, e-commerce,
              e-learning and web-based 3D and AR experiences.
            </Typography>
          </Stack>
        </Box>

        <Box className="web-design" />

        <Box className="web-design1" />
      </Box>

      <Box sx={{ bgcolor: pink[500], p: { xs: 2, md: 4 } }}>
        <Typography
          variant="h3"
          sx={{
            color: "white",
            mb: 4,
            textAlign: "center",
            fontWeight: 700,
            fontSize: { xs: 36, md: 48 },
          }}
        >
          Technology Expertise
        </Typography>
        <Box
          display="grid"
          sx={{ gridTemplateColumns: { xs: "1fr", md: "1fr 1fr 1fr" }, gap: 3 }}
        >
          {techExpertises.map((item, index) => (
            <Box
              key={item.title + index}
              display="flex"
              flexDirection="column"
              alignItems="center"
            >
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 600,
                  color: "white",
                  textShadow: "2px 2px darkslategray",
                  textAlign: "center",
                }}
              >
                {item.title}
              </Typography>
              {item.techStacks.map((techStack, index) => (
                <Typography
                  variant="h5"
                  key={techStack + index}
                  sx={{ color: "white" }}
                >
                  {techStack}
                </Typography>
              ))}
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
export default AboutUs;
