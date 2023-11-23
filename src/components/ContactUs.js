import * as React from "react";
import { Box, Grid, Typography, Stack, Avatar, TextField } from "@mui/material";
import CTO from "../assets/img/richmondyang.png";
import { pink } from "@mui/material/colors";
import { MuiTelInput, matchIsValidTel } from "mui-tel-input";
import { Controller, useForm } from "react-hook-form";
import axios from "axios";
import LoadingButton from "@mui/lab/LoadingButton";
import { useSnackbar } from "material-ui-snackbar-provider";

function ContactUs() {
  const snackbar = useSnackbar();
  const { register, control, handleSubmit } = useForm();
  const [isLoading, setIsLoading] = React.useState(false);
  const onSubmit = async (data) => {
    try {
      setIsLoading(true);
      const response = await axios.post("https://wisdomllc.com", data);
      console.log(response);
      snackbar.showMessage(
        "Our representative will contact you within 24 hours",
        "OK"
      );
    } catch (e) {
      console.log(e);
      snackbar.showMessage(e.message, );
    }
    setIsLoading(false);
  };
  const [countryCode, setCountryCode] = React.useState("");

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("https://geolocation-db.com/json/");
        setCountryCode(res.data.country_code);
      } catch (e) {}
    };
    fetchData();
  }, []);

  return (
    <Box
      sx={{
        p: { xs: 2, md: 4 },
        bgcolor: "rgba(0, 0, 0, 0.07)",
        display: "flex",
        flexDirection: "column",
      }}
      id="contact-id"
    >
      <Grid container spacing={4}>
        <Grid item xs={12} md={7}>
          <Stack direction="column" spacing={2}>
            <Typography variant="h3" sx={{ fontSize: { xs: 36, md: 48 } }}>
              Contact Us
            </Typography>
            <Typography variant="p">
              Our representative will contact you within 24 hours, we will sign
              an NDA to keep your ideas confidential and discuss the main
              requirements of the project. After that, our analysts and
              developers will carefully study them, and together we will come up
              with the next move.
            </Typography>
            <Stack direction="row" spacing={2}>
              <Typography variant="p">
                Simply fill out the form or email us at
              </Typography>
              <Typography
                variant="p"
                component="a"
                href="mailto:boostup0106@gmail.com"
                sx={{
                  color: pink[500],
                  fontWeight: "bold",
                  textDecoration: "none",
                }}
              >
                boostup0106@gmail.com
              </Typography>
            </Stack>
            <Stack direction="row" spacing={2}>
              <Typography variant="p">Or call us</Typography>
              <Typography
                variant="p"
                component="a"
                href="tel:+19282514577"
                sx={{
                  color: pink[500],
                  fontWeight: "bold",
                  textDecoration: "none",
                }}
              >
                +1 928 251 4577
              </Typography>
            </Stack>
            <Stack direction="row" spacing={4} alignItems="center">
              <Avatar src={CTO} sx={{ width: 50, height: 50 }} />
              <Stack direction="column" spacing={0}>
                <Typography variant="h6">Richmond Yang</Typography>
                <Typography variant="p">
                  Technical Manager of Wisdom LLC
                </Typography>
              </Stack>
            </Stack>
          </Stack>
        </Grid>
        <Grid item xs={12} md={5}>
          <form
            style={{ display: "flex", flexDirection: "column", gap: "16px" }}
            onSubmit={handleSubmit(onSubmit)}
          >
            <TextField
              {...register("name")}
              variant="standard"
              type="text"
              label="Name"
              required
            />
            <TextField
              {...register("email")}
              variant="standard"
              name="email"
              type="email"
              label="Email"
              required
            />
            <Controller
              name="phone"
              control={control}
              rules={{ validate: matchIsValidTel }}
              render={({ field, fieldState }) => (
                <MuiTelInput
                  {...field}
                  label="Phone"
                  variant="standard"
                  defaultCountry={countryCode}
                  helperText={fieldState.invalid ? "Tel is invalid" : ""}
                  error={fieldState.invalid}
                />
              )}
            />
            <TextField
              {...register("message")}
              variant="standard"
              name="message"
              type="text"
              label="Message and questions"
              multiline
              rows={4}
              required
            />
            <LoadingButton
              variant="contained"
              size="large"
              color="primary"
              type="submit"
              loading={isLoading}
            >
              Send message
            </LoadingButton>
          </form>
        </Grid>
      </Grid>
    </Box>
  );
}
export default ContactUs;
