import React from "react";
import Link from "next/link";
import { Typography, Container, Grid, Box } from "@material-ui/core";
import { motion } from "framer-motion";
import BorderColorOutlinedIcon from "@material-ui/icons/BorderColorOutlined";
import DevicesIcon from "@material-ui/icons/Devices";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import ChromeReaderModeIcon from "@material-ui/icons/ChromeReaderMode";
import CompareArrowsIcon from "@material-ui/icons/CompareArrows";
import ColorizeIcon from "@material-ui/icons/Colorize";


const OurServices = () => {
  return (
    <Box maxWidth="xl" sx={{ bgcolor: "#0A0D12", width: "100vw", pb: "5rem" }}>
      <Container maxWidth="md">
        <Grid container direction="column" sx={{ ml: 8, pt: 10 }}>
          {/* our services */}
          <Grid item sx={{ position: "relative" }}>
            <Typography
              variant="h3"
              color="white"
              sx={{
                ml: 8,
                fontSize: "2.2rem",
                fontWeight: 900,
                "&:before": {
                  content: "''",
                  position: "absolute",
                  borderBottom: "2px solid #68F8F8",
                  display: "inline-block",
                  width: "3rem",
                  left: "5px",
                  bottom: "20px",
                },
              }}
            >
              Service
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="caption"
              color="#68F8F8"
              sx={{ textTransform: "uppercase", fontWeight: "bold" }}
            >
              Nos service pour client
            </Typography>
          </Grid>
        </Grid>

        {/* grid */}
        <Grid
          container
          justifyContent="center"
          spacing={1}
          alignItems="center"
          sx={{ mt: "5rem" }}
        >
          {/* 1 */}
          <Grid item>
            <Link href="#">
              <a style={{ textDecoration: "none" }}>
                <Box
                  sx={{
                    bgcolor: "black",
                    opacity: 1,
                    maxWidth: "260px",
                    maxHeight: "250px",
                    transition: "background-color 500ms linear",
                    borderBottom: "3px solid white",
                    p: 5,
                    pb: 4,
                    "&:hover": {
                      bgcolor: "#68F8F8",
                      "& *": {
                        color: "black",
                      },
                    },
                  }}
                >
                  <BorderColorOutlinedIcon
                    sx={{
                      color: "#68F8F8",
                      width: 30,
                      height: 30,
                      mt: "-12px",
                    }}
                  />
                  <Typography
                    variant="h6"
                    color="white"
                    sx={{
                      mt: 2,
                      fontWeight: "bold",
                      fontSize: "1.1rem",
                      fontWeight: 600,
                      letterSpacing: "1px",
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
                    UX-UI DESIGN
                  </Typography>
                  <Typography
                    variant="subtitle"
                    color="white"
                    sx={{ pt: "12px", fontSize: "12px", opacity: 0.7 }}
                  >
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit
                    adipisicing elit.
                  </Typography>
                </Box>
              </a>
            </Link>
          </Grid>

          {/* 2 */}
          <Grid item>
            <Link href="#">
              <a style={{ textDecoration: "none" }}>
                <Box
                  sx={{
                    bgcolor: "black",
                    opacity: 1,
                    maxWidth: "260px",
                    maxHeight: "250px",
                    borderBottom: "3px solid white",
                    transition: "background-color 500ms linear",

                    p: 5,
                    pb: 4,
                    "&:hover": {
                      bgcolor: "#68F8F8",
                      "& *": {
                        color: "black",
                      },
                    },
                  }}
                >
                  <CompareArrowsIcon
                    sx={{
                      color: "#68F8F8",
                      width: 30,
                      height: 30,
                      mt: "-12px",
                    }}
                  />
                  <Typography
                    variant="h6"
                    color="white"
                    sx={{
                      mt: 2,
                      fontWeight: "bold",
                      fontSize: "1.1rem",
                      fontWeight: 600,
                      letterSpacing: "1px",
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
                    IT CONSULTING
                  </Typography>
                  <Typography
                    variant="subtitle"
                    color="white"
                    sx={{ pt: "12px", fontSize: "12px", opacity: 0.7 }}
                  >
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit
                    adipisicing elit.
                  </Typography>
                </Box>
              </a>
            </Link>
          </Grid>

          {/* 3 */}
          <Grid item>
            <Link href="#">
              <a style={{ textDecoration: "none" }}>
                <Box
                  sx={{
                    bgcolor: "black",
                    opacity: 1,
                    maxWidth: "260px",
                    maxHeight: "250px",
                    borderBottom: "3px solid white",
                    transition: "background-color 500ms linear",

                    p: 5,
                    pb: 4,
                    "&:hover": {
                      bgcolor: "#68F8F8",
                      "& *": {
                        color: "black",
                      },
                    },
                  }}
                >
                  <DevicesIcon
                    sx={{
                      color: "#68F8F8",
                      width: 30,
                      height: 30,
                      mt: "-12px",
                    }}
                  />
                  <Typography
                    variant="h6"
                    color="white"
                    sx={{
                      mt: 2,
                      fontWeight: "bold",
                      fontSize: "1.1rem",
                      fontWeight: 600,
                      letterSpacing: "1px",
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
                    APPLICATION WEB
                  </Typography>
                  <Typography
                    variant="subtitle"
                    color="white"
                    sx={{ pt: "12px", fontSize: "12px", opacity: 0.7 }}
                  >
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit
                    adipisicing elit.
                  </Typography>
                </Box>
              </a>
            </Link>
          </Grid>

          {/* 4 */}
          <Grid item>
            <Link href="#">
              <a style={{ textDecoration: "none" }}>
                <Box
                  sx={{
                    bgcolor: "black",
                    transition: "black 2s linear 1000s",
                    opacity: 1,
                    maxWidth: "260px",
                    maxHeight: "250px",
                    borderBottom: "3px solid white",
                    p: 5,
                    pb: 4,
                    transition: "background-color 500ms linear",
                    "&:hover": {
                      bgcolor: "#68F8F8",
                      "& *": {
                        color: "black",
                      },
                    },
                  }}
                >
                  <ColorizeIcon
                    sx={{
                      color: "#68F8F8",
                      width: 30,
                      height: 30,
                      mt: "-12px",
                    }}
                  />
                  <Typography
                    variant="h6"
                    color="white"
                    sx={{
                      mt: 2,
                      fontWeight: "bold",
                      fontSize: "1.1rem",
                      fontWeight: 600,
                      letterSpacing: "1px",
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
                    LOGO-DESIGN
                  </Typography>
                  <Typography
                    variant="subtitle"
                    color="white"
                    sx={{ pt: "12px", fontSize: "12px", opacity: 0.7 }}
                  >
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit
                    adipisicing elit.
                  </Typography>
                </Box>
              </a>
            </Link>
          </Grid>
          {/* 5 */}
          <Grid item>
            <Link href="">
              <a style={{ textDecoration: "none" }}>
                <Box
                  sx={{
                    bgcolor: "black",
                    opacity: 1,
                    maxWidth: "260px",
                    maxHeight: "250px",
                    borderBottom: "3px solid white",
                    p: 5,
                    pb: 4,
                    transition: "background-color 500ms linear",
                    "&:hover": {
                      bgcolor: "#68F8F8",
                      "& *": {
                        color: "black",
                      },
                    },
                  }}
                >
                  <ChromeReaderModeIcon
                    sx={{
                      color: "#68F8F8",
                      width: 30,
                      height: 30,
                      mt: "-12px",
                    }}
                  />
                  <Typography
                    variant="h6"
                    color="white"
                    sx={{
                      mt: 2,
                      fontWeight: "bold",
                      fontSize: "1.1rem",
                      fontWeight: 600,
                      letterSpacing: "1px",
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
                    SITE-WEB
                  </Typography>
                  <Typography
                    variant="subtitle"
                    color="white"
                    sx={{ pt: "12px", fontSize: "12px", opacity: 0.7 }}
                  >
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit
                    adipisicing elit.
                  </Typography>
                </Box>
              </a>
            </Link>
          </Grid>

          {/* 6 */}
          <Grid item>
            <Link href="">
              <a style={{ textDecoration: "none" }}>
                <Box
                  sx={{
                    bgcolor: "black",
                    opacity: 1,
                    maxWidth: "260px",
                    maxHeight: "250px",
                    borderBottom: "3px solid white",
                    p: 5,
                    pb: 4,
                    transition: "background-color 500ms linear",
                    "&:hover": {
                      bgcolor: "#68F8F8",
                      "& *": {
                        color: "black",
                      },
                    },
                  }}
                >
                  <ShoppingCartIcon
                    sx={{
                      color: "#68F8F8",
                      width: 30,
                      height: 30,
                      mt: "-12px",
                    }}
                  />
                  <Typography
                    variant="h6"
                    color="white"
                    sx={{
                      mt: 2,
                      fontWeight: "bold",
                      fontSize: "1.1rem",
                      fontWeight: 600,
                      letterSpacing: "1px",
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
                    E-COMMERCE
                  </Typography>
                  <Typography
                    variant="subtitle"
                    color="white"
                    sx={{ pt: "12px", fontSize: "12px", opacity: 0.7 }}
                  >
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit
                    adipisicing elit.
                  </Typography>
                </Box>
              </a>
            </Link>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default OurServices;
