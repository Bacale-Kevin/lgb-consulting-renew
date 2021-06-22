import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import { Grid, Typography, Container } from "@material-ui/core";
import { Fade } from "react-reveal";
import Link from "next/link";
import { Box } from "@material-ui/core";

const CarouselSlider = () => {
  const [state, setState] = useState(0);
  console.log({ state });
  return (
    <Carousel
      autoPlay={true}
      showArrows
      showThumbs={false}
      stopOnHover={false}
      dynamicHeight={false}
      infiniteLoop
      transitionTime={1000}
      interval={7000}
      showIndicators={true}
      showStatus={false}
      onChange={(index) => setState(index)}
    >
      <Box sx={{ width: "100vw", position: "relative" }}>
        <Image width={3000} height={1300} src="/images/carlos.jpg" alt="1" />
        {state === 0 && (
          <Container
            sx={{
            //   bgcolor: "tomato",
              position: "absolute",
              zIndex: 1,
              top: "7rem",
              right: "1rem",
              width: "70%",
              ml: "8rem",
            }}
          >
            <Grid container direction="row-reverse" spacing={5} justifyContent="center" sx={{}}>
              <Grid item lg={5}>
                <Grid container>
                  <Fade top delay={700}>
                    <Grid item>
                      <Typography
                        align="left"
                        color="white"
                        sx={{
                          fontFamily: "Rubik",
                          fontWeight: 500,
                          fontSize: "2.7rem",
                        }}
                      >
                        CRM PRACTICE LEAD
                      </Typography>
                    </Grid>
                  </Fade>

                  <Fade bottom delay={1000}>
                    <Grid item>
                      <Typography
                        align="left"
                        variant="subtitle1"
                        color="white"
                        sx={{ opacity: 1 }}
                      >
                        Elaboration de votre patrimoine de fonctionnalités et
                        favoriser la transformation dans toute application
                        choisie par vos soins
                      </Typography>
                    </Grid>
                  </Fade>
                </Grid>
              </Grid>

              <Fade left delay={2200}>
                <Grid item>
                  <Image
                    src="/images/graph.png"
                    alt="graph"
                    width={300}
                    height={300}
                    priority
                  />
                </Grid>
              </Fade>
            </Grid>
          </Container>
        )}
      </Box>

      <Box sx={{ width: "100vw" }}>
        <Image width={3000} height={1300} src="/images/analysis1.png" alt="1" />
        {state === 1 && (
          <Container
          sx={{
            bgcolor: "rgba(0,0,0,0.5)",
            pt: 5,
            pb:5,
            position: "absolute",
            zIndex: 1,
            top: "7rem",
            left: "1rem",
            width: "70%",
            // ml: "8rem",
          }}
        >
          <Grid container direction="row" alignItems="center" spacing={0} justifyContent="center" sx={{}}>
            <Grid item lg={5}>
              <Grid container>
                <Fade top delay={700}>
                  <Grid item>
                    <Typography
                      align="left"
                      color="white"
                      sx={{
                        fontFamily: "Rubik",
                        fontWeight: 500,
                        fontSize: "2.7rem",
                      }}
                    >
                      Expertise SAP CRM
                    </Typography>
                  </Grid>
                </Fade>

                <Fade bottom delay={1000}>
                  <Grid item>
                    <Typography
                      align="left"
                      variant="subtitle1"
                      color="white"
                      sx={{ opacity: 1 }}
                    >
                     Expertise 360° du cadrage à l’intégration à votre périmètre SI
                    </Typography>
                  </Grid>
                </Fade>
              </Grid>
            </Grid>

            <Fade right delay={2200}>
              <Grid item sx={{ bgcolor: "rgba(255,255,255,0.7)", p: 1}}>
                <Image
                  src="/images/sap.png"
                  alt="graph"
                  width={300}
                  height={250}
                  priority
                />
              </Grid>
            </Fade>
          </Grid>
        </Container>
        )}
      </Box>

      <Box sx={{ width: "100vw" }}>
        <Image width={3000} height={1300} src="/images/chair.jpg" alt="1" />
        {state === 2 && (
              <Container
              sx={{
                // bgcolor: "rgba(0,0,0,0.5)",
                pt: 5,
                pb:5,
                position: "absolute",
                zIndex: 1,
                top: "7rem",
                left: "1rem",
                width: "90%",
                // ml: "8rem",
              }}
            >
              <Grid container direction="row" alignItems="center" spacing={0} justifyContent="center" sx={{}}>
                <Grid item lg={6}>
                  <Grid container>
                    <Fade top delay={700}>
                      <Grid item>
                        <Typography
                          align="left"
                          color="white"
                          sx={{
                            fontFamily: "Rubik",
                            fontWeight: 500,
                            fontSize: "2.7rem",
                          }}
                        >
                          DEVELOPEMENT DES APPLICATION
                        </Typography>
                      </Grid>
                    </Fade>
    
                    <Fade bottom delay={1000}>
                      <Grid item>
                        <Typography
                          align="left"
                          variant="subtitle1"
                          color="white"
                          sx={{ opacity: 1 }}
                        >
                         Web, Mobile, Desktop
                        </Typography>
                      </Grid>
                    </Fade>
                  </Grid>
                </Grid>
    
                <Fade right delay={2200}>
                  <Grid item sx={{  p: 1}}>
                    <Image
                      src="/images/multi-platform.png"
                      alt="graph"
                      width={350}
                      height={300}
                      priority
                    />
                  </Grid>
                </Fade>
              </Grid>
            </Container>        
        )}
      </Box>

      {/* <Box sx={{ width: "100vw" }}>
        <Image width={3000} height={1300} src="/images/analysis1.png" alt="1" />
        {state === 0 && <></>}
      </Box>

      <Box sx={{ width: "100vw" }}>
        <Image width={3000} height={1300} src="/images/analysis1.png" alt="1" />
        {state === 0 && <></>}
      </Box> */}

    </Carousel>
  );
};

export default CarouselSlider;
