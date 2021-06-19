import React from "react";
import {
  Container,
  Grid,
  Typography,
  Button,
  createTheme,
  Box,
} from "@material-ui/core";
import TelegramIcon from "@material-ui/icons/Telegram";
import WbIncandescentOutlinedIcon from '@material-ui/icons/WbIncandescentOutlined';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';

const HeroSection = () => {
  const theme = createTheme();
  return (
    <Box
      sx={{
        bgcolor: "#000000",
        pb: "5rem",
        width: "100vw",
        background: "url('/images/bulb.jpg')",
        backgroundRepeat: "no-repeat",
        backgountPosition: "25% 75%",
        backgroundSize: "cover",
      }}
    >
      <Container>
        <Grid container>
          {/* 1 */}
          <Grid item xs={12}>
            <Grid
              container
              direction="column"
              alignItems="center"
              justifyContent="center"
            >
              {/* <Grid item md={12} sx={{ mt: 8 }}> */}
              {/* <Typography
                  color="white"
                  sx={{
                    fontFamily: "Roboto",
                    fontWeight: 900,
                    fontSize: "2.8rem",
                    lineHeight: "55px",
                  }}
                >
                  QUAND L'IT EST FAIT POUR PARLER VOTRE MÉTIER
                </Typography> */}
              {/* <Typography
                  align="right"
                  color="secondary"
                  sx={{ fontFamily: "Rubik", fontSize: "" }}
                >
                  Exprit creatif, travail creatif
                </Typography>
              </Grid> */}
              <Grid item lg={12} sx={{ mt: 8 }}>
                <Typography
                  sx={{
                    color: "#fff",
                    fontFamily: "Rubik",
                    fontSize: "2.8rem",
                    fontWeight: 900,
                    width: "45%",
                    lineHeight: "50px",
                  }}
                >
                  La solution a vos probleme digital
                </Typography>
              </Grid>
              <Grid item lg={12} sx={{ mt: 5, width: "65%" }}>
                <Button
                  variant="outlined"
                  color="secondary"
                  sx={{
                    // borderRadius: 30,
                    py: "12px",
                    border: 2,
                    fontSize: "11px",
                    fontWeight: "bold",
                    px: "20px",
                    // textTransform: "none",
                  }}
                >
                  En savoir plus
                </Button>
              </Grid>
            </Grid>
          </Grid>

          {/* 2 */}
          <Grid
            item
            lg={6}
            style={{
              background: "url('/images/mobile-testing.svg')",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          ></Grid>
        </Grid>

        <Grid
          container
          sx={{ mt: "10rem" }}
          spacing={1}
          alignItems="center"
          justifyContent="center"
        >
          {/* 1 */}
          <Grid item>
            <Box
              sx={{
                bgcolor: "#101610",
                maxWidth: "260px",
                p: 5,
                "&:hover": {
                  // border: "2px solid #68F8F8"
                },
              }}
            >
              <TelegramIcon sx={{ color: "#68F8F8", width: 50, height: 50 }} />
              <Typography
                variant="h6"
                color="white"
                sx={{
                  mt: 4,
                  fontWeight: "bold",
                  fontSize: "1.1rem",
                  paddingBottom: "25px",
                  "&:before": {
                    content: "''",
                    position: "absolute",
                    bottom: "-2.5rem",
                    // left: "20rem",
                    display: "block",
                    borderBottom: "2px solid #68F8F8",
                    width: "3rem",
                    // borderColor: "#fff"
                  },
                }}
              >
                Des grande idee.
              </Typography>
              <Typography
                variant="subtitle"
                color="white"
                sx={{ pt: "15px", fontSize: "12px", opacity: 0.7 }}
              >
                Lorem ipsum, dolor sit amet consectetur adipisicing elit
                adipisicing elit.
              </Typography>
            </Box>
          </Grid>
          {/* 2 */}
          <Grid item>
            <Box
              sx={{
                bgcolor: "#101610",
                maxWidth: "260px",
                p: 5,
                "&:hover": {
                  // border: "2px solid #68F8F8"
                },
              }}
            >
              <TrendingUpIcon sx={{ color: "#68F8F8", width: 50, height: 50 }} />
              <Typography
                variant="h6"
                color="white"
                sx={{
                  mt: 4,
                  fontWeight: "bold",
                  fontSize: "1.1rem",
                  paddingBottom: "25px",
                  "&:before": {
                    content: "''",
                    position: "absolute",
                    bottom: "-2.5rem",
                    // left: "20rem",
                    display: "block",
                    borderBottom: "2px solid #68F8F8",
                    width: "3rem",
                    // borderColor: "#fff"
                  },
                }}
              >
                La penser du future.
              </Typography>
              <Typography
                variant="subtitle"
                color="white"
                sx={{ pt: "15px", fontSize: "12px", opacity: 0.7 }}
              >
                Lorem ipsum, dolor sit amet consectetur adipisicing elit
                adipisicing elit.
              </Typography>
            </Box>
          </Grid>
          {/* 3 */}
          <Grid item>
            <Box
              sx={{
                bgcolor: "#101610",
                maxWidth: "260px",
                p: 5,
                "&:hover": {
                  // border: "2px solid #68F8F8"
                },
              }}
            >
              <WbIncandescentOutlinedIcon sx={{ color: "#68F8F8", width: 50, height: 50 }} />
              <Typography
                variant="h6"
                color="white"
                sx={{
                  mt: 4,
                  fontWeight: "bold",
                  fontSize: "1.1rem",
                  paddingBottom: "25px",
                  "&:before": {
                    content: "''",
                    position: "absolute",
                    bottom: "-2.5rem",
                    // left: "20rem",
                    display: "block",
                    borderBottom: "2px solid #68F8F8",
                    width: "3rem",
                    // borderColor: "#fff"
                  },
                }}
              >
                Des Solutions Creatif.
              </Typography>
              <Typography
                variant="subtitle"
                color="white"
                sx={{ pt: "15px", fontSize: "12px", opacity: 0.7 }}
              >
                Lorem ipsum, dolor sit amet consectetur adipisicing elit
                adipisicing elit.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HeroSection;
