import React from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
const OwlCarousel = dynamic(import("react-owl-carousel"), {
  ssr: false,
});
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import { Box, Grid, Typography } from "@material-ui/core";
import { useTheme } from "@material-ui/core";
import { Container } from "@material-ui/core";

const options = {
  responsive: {
    0: {
      items: 1,
      center: false,
      margin: 0,
      stagePadding: 0,
    },
    600: {
      items: 1,
      center: false,
    },
    700: {
      items: 2,
      // nav: true,
      center: false,
    },
    1000: {
      items: 3,
      center: false,
      nav: true,
    },
    1200: {
      items: 3,
      nav: true,
      dots: true,
    },
  },
};

const OurServicesCarousel = () => {
  const theme = useTheme();
  const xs = theme.breakpoints.down("sm");
  return (
    <Box sx={{ width: "100vw", bgcolor: "#000", mt: -1 }}>
      <Container maxWidth="md" sx={{ pt: "7rem", pb: "7rem" }}>
        <Grid container justifyContent="center">
          <Grid item sx={{ position: "relative" }}>
            <Typography
              variant="h3"
              color="white"
              sx={{
                fontWeight: 500,
                fontFamily: "Rubik",
                // pb: 2,
                "&:before": {
                  content: "''",
                  position: "absolute",
                  display: "block",
                  borderBottom: 2,
                  left: "75px",
                  bottom: -15,
                  width: "50%",
                  color: "#68F8F8",
                },
              }}
            >
              Nos Service
            </Typography>
          </Grid>
        </Grid>
      </Container>

      <Container maxWidth="lg">
        <Grid container>
          <OwlCarousel
            {...options}
            items={2}
            center
            // dotsEach={true}
            className="owl-theme"
            autoplay={true}
            loop={true}
            startPosition={1}
            margin={50}
            stagePadding={xs ? 0 : 50}
            slideBy={1}
            autoplayTimeout={3000}
            autoplayHoverPause
            dots
            navText={[
              '<i class="fas fa-arrow-left" style="position: absolute; left: -2rem; bottom: 22rem; color: white "></i>',
              '<i class="fas fa-arrow-right" style="position: absolute; right: -2rem; bottom: 22rem;"></i>',
            ]}
            // nav
            style={{ paddingBottom: 20 }}
          >
            <Link href="#">
              <a style={{ textDecoration: "none" }}>
                <Box
                  sx={{
                    bgcolor: "blcak",
                    transition: "background-color 500ms linear",
                    p: 4,
                    "&:hover": {
                      bgcolor: "#68F8F8",
                      "& *": {
                        color: "black",
                      },
                    },
                  }}
                >
                  <Grid container direction="column">
                    <Grid item>
                      <Grid
                        container
                        justifyContent="flex-start"
                        alignItems="center"
                      >
                        <Grid
                          item
                          sx={{
                            bgcolor: "#68F8F8",
                            borderRadius: 2,
                          }}
                        >
                          <Image
                            src="/images/graph.png"
                            priority
                            alt="graph"
                            width={50}
                            height={50}
                          />
                        </Grid>
                        <Grid item>
                          <Typography
                            variant="h6"
                            sx={{
                              color: "white",
                              ml: 3,
                              fontWeight: 500,
                              fontFamily: "Rubik",
                              "&:hover": { color: "black" },
                            }}
                          >
                            CRM Practice Lead
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>

                    <Grid item sx={{ mt: 3 }}>
                      <Typography
                        color="white"
                        sx={{
                          opacity: 0.7,
                          fontFamily: "Roboto",
                          lineHeight: 1.5,
                          "&:hover": { color: "black" },
                        }}
                      >
                        Elaboration de votre patrimoine de fonctionnalités et
                        favoriser la transformation dans toute application
                        choisie par vos soins
                      </Typography>
                    </Grid>
                  </Grid>
                </Box>
              </a>
            </Link>

            <Link href="#">
              <a style={{ textDecoration: "none" }}>
                <Box
                  sx={{
                    bgcolor: "blcak",
                    transition: "background-color 500ms linear",
                    p: 4,
                    "&:hover": {
                      bgcolor: "#68F8F8",
                      "& *": {
                        color: "black",
                      },
                    },
                  }}
                >
                  <Grid container direction="column">
                    <Grid item>
                      <Grid
                        container
                        justifyContent="flex-start"
                        alignItems="center"
                      >
                        <Grid
                          item
                          sx={{
                            bgcolor: "#68F8F8",
                            borderRadius: 2,
                          }}
                        >
                          <Image
                            src="/images/digitalservice.png"
                            priority
                            alt="digital"
                            width={50}
                            height={50}
                          />
                        </Grid>
                        <Grid item>
                          <Typography
                            variant="h6"
                            sx={{
                              color: "white",
                              ml: 3,
                              fontWeight: 500,
                              fontFamily: "Rubik",
                              "&:hover": { color: "black" },
                            }}
                          >
                            Digital Web Services
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>

                    <Grid item sx={{ mt: 3 }}>
                      <Typography
                        color="white"
                        sx={{
                          opacity: 0.7,
                          fontFamily: "Roboto",
                          lineHeight: 1.5,
                          "&:hover": { color: "black" },
                        }}
                      >
                        Des solutions omnicanales, une fluidité et un caractère
                        intuitif privilégié dans notre approche
                      </Typography>
                    </Grid>
                  </Grid>
                </Box>
              </a>
            </Link>

            <Link href="#">
              <a style={{ textDecoration: "none" }}>
                <Box
                  sx={{
                    bgcolor: "blcak",
                    transition: "background-color 500ms linear",
                    p: 4,
                    "&:hover": {
                      bgcolor: "#68F8F8",
                      "& *": {
                        color: "black",
                      },
                    },
                  }}
                >
                  <Grid container direction="column">
                    <Grid item>
                      <Grid
                        container
                        justifyContent="flex-start"
                        alignItems="center"
                      >
                        <Grid
                          item
                          sx={{
                            bgcolor: "#68F8F8",
                            borderRadius: 2,
                          }}
                        >
                          <Image
                            src="/images/sap.png"
                            priority
                            alt="graph"
                            width={50}
                            height={50}
                          />
                        </Grid>
                        <Grid item>
                          <Typography
                            variant="h6"
                            sx={{
                              color: "white",
                              ml: 3,
                              fontWeight: 500,
                              fontFamily: "Rubik",
                              "&:hover": { color: "black" },
                            }}
                          >
                            Expertise SAP CRM
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>

                    <Grid item sx={{ mt: 3 }}>
                      <Typography
                        color="white"
                        sx={{
                          opacity: 0.7,
                          fontFamily: "Roboto",
                          lineHeight: 1.5,
                          "&:hover": { color: "black" },
                        }}
                      >
                        Expertise 360° du cadrage à l’intégration à votre
                        périmètre SI
                      </Typography>
                    </Grid>
                  </Grid>
                </Box>
              </a>
            </Link>

            <Link href="#">
              <a style={{ textDecoration: "none" }}>
                <Box
                  sx={{
                    bgcolor: "blcak",
                    transition: "background-color 500ms linear",
                    p: 4,
                    "&:hover": {
                      bgcolor: "#68F8F8",
                      "& *": {
                        color: "black",
                      },
                    },
                  }}
                >
                  <Grid container direction="column">
                    <Grid item>
                      <Grid
                        container
                        justifyContent="flex-start"
                        alignItems="center"
                      >
                        <Grid
                          item
                          sx={{
                            bgcolor: "#68F8F8",
                            borderRadius: 2,
                          }}
                        >
                          <Image
                            src="/images/web.png"
                            priority
                            alt="graph"
                            width={50}
                            height={50}
                          />
                        </Grid>
                        <Grid item>
                          <Typography
                            variant="h6"
                            sx={{
                              color: "white",
                              ml: 3,
                              fontWeight: 500,
                              fontFamily: "Rubik",
                              "&:hover": { color: "black" },
                            }}
                          >
                             Application Web
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>

                    <Grid item sx={{ mt: 3 }}>
                      <Typography
                        color="white"
                        sx={{
                          opacity: 0.7,
                          fontFamily: "Roboto",
                          lineHeight: 1.5,
                          "&:hover": { color: "black" },
                        }}
                      >
                        Dévelopement des applications web pour boustez votre productivite 
                      </Typography>
                    </Grid>
                  </Grid>
                </Box>
              </a>
            </Link>

            <Link href="#">
              <a style={{ textDecoration: "none" }}>
                <Box
                  sx={{
                    bgcolor: "blcak",
                    transition: "background-color 500ms linear",
                    p: 4,
                    "&:hover": {
                      bgcolor: "#68F8F8",
                      "& *": {
                        color: "black",
                      },
                    },
                  }}
                >
                  <Grid container direction="column">
                    <Grid item>
                      <Grid
                        container
                        justifyContent="flex-start"
                        alignItems="center"
                      >
                        <Grid
                          item
                          sx={{
                            bgcolor: "#68F8F8",
                            borderRadius: 2,
                          }}
                        >
                          <Image
                            src="/images/design.png"
                            priority
                            alt="graph"
                            width={50}
                            height={50}
                          />
                        </Grid>
                        <Grid item>
                          <Typography
                            variant="h6"
                            sx={{
                              color: "white",
                              ml: 3,
                              fontWeight: 500,
                              fontFamily: "Rubik",
                              "&:hover": { color: "black" },
                            }}
                          >
                            UI/UX Design
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>

                    <Grid item sx={{ mt: 3 }}>
                      <Typography
                        color="white"
                        sx={{
                          opacity: 0.7,
                          fontFamily: "Roboto",
                          lineHeight: 1.5,
                          "&:hover": { color: "black" },
                        }}
                      >
                        Ergonomie simplicité et fluidité des solutions proposées
                      </Typography>
                    </Grid>
                  </Grid>
                </Box>
              </a>
            </Link>

            <Link href="#">
              <a style={{ textDecoration: "none" }}>
                <Box
                  sx={{
                    bgcolor: "blcak",
                    transition: "background-color 500ms linear",
                    p: 4,
                    "&:hover": {
                      bgcolor: "#68F8F8",
                      "& *": {
                        color: "black",
                      },
                    },
                  }}
                >
                  <Grid container direction="column">
                    <Grid item>
                      <Grid
                        container
                        justifyContent="flex-start"
                        alignItems="center"
                      >
                        <Grid
                          item
                          sx={{
                            bgcolor: "#68F8F8",
                            borderRadius: 2,
                          }}
                        >
                          <Image
                            src="/images/web.png"
                            priority
                            alt="graph"
                            width={50}
                            height={50}
                          />
                        </Grid>
                        <Grid item>
                          <Typography
                            variant="h6"
                            sx={{
                              color: "white",
                              ml: 3,
                              fontWeight: 500,
                              fontFamily: "Rubik",
                              "&:hover": { color: "black" },
                            }}
                          >
                            Application Desktop
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>

                    <Grid item sx={{ mt: 3 }}>
                      <Typography
                        color="white"
                        sx={{
                          opacity: 0.7,
                          fontFamily: "Roboto",
                          lineHeight: 1.5,
                          "&:hover": { color: "black" },
                        }}
                      >
                        Des solutions adaptées à tout type de système d’exploitation
                      </Typography>
                    </Grid>
                  </Grid>
                </Box>
              </a>
            </Link>
          </OwlCarousel>
        </Grid>
      </Container>
    </Box>
  );
};

export default OurServicesCarousel;
