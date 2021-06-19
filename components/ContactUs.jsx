import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  TextField,
  InputBase,
  InputLabel,
  Button,
  FormControl,
} from "@material-ui/core";
import { alpha, experimentalStyled as styled } from "@material-ui/core/styles";
import Image from "next/image";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import MailIcon from '@material-ui/icons/Mail';
import PhoneIcon from '@material-ui/icons/Phone';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookOutlinedIcon from '@material-ui/icons/Facebook';

const CssTextField = styled(TextField)({
  "& .MuiInput-root:before": {
    borderBottomColor: "white",
    opacity: 0.7,
    "&:hover": {
      borderBottomColor: "white",
      opacity: 1,
    },
  },
  "& .MuiOutlinedInput-input": {
    color: "white",
  },
  "& label.Mui-focused": {
    color: "white",
  },
  "& .MuiInputLabel-root": {
    color: "white",
    opacity: 0.7,
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "white",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "white",
      opacity: 0.7,
    },
    "&:hover fieldset": {
      borderColor: "white",
      opacity: 1,
    },
    "&.Mui-focused fieldset": {
      borderColor: "white",
    },
  },
});

const ContactUs = () => {
  return (
    <Box sx={{ width: "100vw", bgcolor: "#0A0D12", pb: 10 }}>
      <Container maxWidth="md" direction="column" sx={{ pt: "5rem" }}>
        {/* contacter nous */}
        <Grid item sx={{ position: "relative" }}>
          <Typography
            variant="h3"
            color="white"
            sx={{
              ml: 16,
              fontSize: "2.2rem",
              fontWeight: 900,
              "&:before": {
                content: "''",
                position: "absolute",
                borderBottom: "2px solid #68F8F8",
                display: "inline-block",
                width: "3rem",
                top: "1.2rem",
                width: "3rem",
                left: "4rem",
              },
            }}
          >
            Contact
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            variant="caption"
            color="#68F8F8"
            sx={{ textTransform: "uppercase", fontWeight: "bold", ml: 8 }}
          >
            Avez vous un projet ? contacter nous
          </Typography>
        </Grid>
      </Container>

      {/* contact form */}
      <Container maxWidth="md" sx={{ pt: "5rem" }}>
        <Grid container>
          {/* contact form */}
          <Grid item md={5} sx={{ ml: 7 }}>
            <Box component="form" noValidate>
              <Grid container direction="column">
                <CssTextField label="Nom" id="custom-css-outlined-input" />
                <CssTextField
                  label="Email"
                  id="custom-css-outlined-input"
                  sx={{ mt: 2 }}
                />
                <CssTextField
                  sx={{ mt: 2 }}
                  label="Message"
                  multiline
                  rows={4}
                  id="custom-css-outlined-input"
                />
              </Grid>
            </Box>
            <Button
              variant="outlined"
              color="secondary"
              sx={{ mt: 2, border: 1.5, textTransform: "none", px: 3, py: 1 }}
            >
              Envoyer
            </Button>
          </Grid>
          {/* company info */}
          <Grid item md={6}>
            <Grid container direction="column" alignItems="center">
              <Grid item>
                <Image
                  src="/images/header-logo-blue.png"
                  alt="logo"
                  width={150}
                  height={40}
                />
                <Grid item sx={{ pt: 4 }}>
                  <Grid container>
                    <Grid item>
                      <LocationOnIcon sx={{ color: "white" }} />
                    </Grid>
                    <Grid item sx={{ pl: 2 }}>
                      <Typography color="white">
                        paris rue 1223 orlean
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>

                <Grid item sx={{ pt: 2 }}>
                  <Grid container>
                    <Grid item>
                      <MailIcon sx={{ color: "white" }} />
                    </Grid>
                    <Grid item sx={{ pl: 2 }}>
                      <Typography color="white">
                        lgbconsulting@gmail.fr
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>

                <Grid item sx={{ pt: 2 }}>
                  <Grid container>
                    <Grid item>
                      <PhoneIcon sx={{ color: "white" }} />
                    </Grid>
                    <Grid item sx={{pl: 2}}>
                      <Typography color="white">
                        +225 354 890
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>

                <Grid item sx={{ pt: 2 }}>
                  <Grid container>
                    <Grid item>
                      <WhatsAppIcon sx={{ color: "white" }} />
                    </Grid>
                    <Grid item sx={{pl: 2}}>
                      <Typography color="white">
                        +225 354 890
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>

               

                <Grid item sx={{ pt: 2 }}>
                  <Grid container>
                    <Grid item>
                      <TwitterIcon sx={{ color: "white" }} />
                    </Grid>
                    <Grid item sx={{pl: 2}}>
                      <Typography color="white">
                        +225 354 890
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ContactUs;
