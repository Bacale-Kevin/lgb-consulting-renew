import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import { Grid, Typography, Container } from "@material-ui/core";
import { Fade } from "react-reveal";
import Link from "next/link";

const CarouselSlider = () => {
  const [state, setState] = useState(0);
  console.log({ state });
  return (
    <Carousel
      infiniteLoop
      autoPlay
      interval={4000}
      showStatus={false}
      showThumbs={false}
      onChange={(index) => setState(index)}
    >
      {/* 1 */}

      {state === 0 ? (
        <>
          <Link href="#">
            <a>
              <Grid container>
                <Image
                  width={3000}
                  priority
                  height={1200}
                  src="/images/carlos.jpg"
                  alt="1"
                />

                <Container>
                  <Grid
                    container
                    sx={{
                      position: "absolute",
                      zIndex: 1,
                      top: "140px",
                      ml: 5,
                      //   bgcolor: "tomato",
                    }}
                  >
                    {/* first item */}
                    <Grid item md={12} sx={{}}>
                      <Grid
                        container
                        direction="column"
                        justifyContent="center"
                        alignItems="flex-end"
                      >
                        <Fade top delay={1500}>
                          <Grid xs={12} md={5} item sx={{ mr: 20 }}>
                            <Typography
                              align="start"
                              sx={{
                                color: "#fff",
                                fontFamily: "Rubik",
                                fontSize: "2.7rem",
                                fontWeight: 700,
                                width: "100%",
                                lineHeight: "50px",
                              }}
                            >
                              EXPERTISE SAP CRM
                            </Typography>
                          </Grid>
                        </Fade>
                        <Fade top delay={1700}>
                          <Grid item color="white" sx={{ pt: 5, mr: 22 }}>
                            Expertise 360° du cadrage à l’intégration à votre
                            périmètre SI
                          </Grid>
                        </Fade>
                      </Grid>
                    </Grid>

                    {/* second item */}

                    <Grid item md={6} sx={{ mt: -10, mr: 4 }}>
                      {/* <Image
                        src="/images/analysis.jpg"
                        alt="header-image"
                        priority
                        width={500}
                        height={500}
                      /> */}
                    </Grid>
                  </Grid>
                </Container>
              </Grid>
            </a>
          </Link>
        </>
      ) : null}

      {/* 2 */}
      {state === 1 ? (
        <div>
          <Image
            width={3000}
            priority
            height={1200}
            src="/images/analysis1.png"
            alt="1"
          />
          <Container>
            <Grid
              container
              sx={{
                position: "absolute",
                zIndex: 1,
                top: "140px",
                ml: 5,
                //   bgcolor: "tomato",
              }}
            >
              {/* first item */}
              <Grid item md={12} sx={{}}>
                <Grid
                  container
                  direction="column"
                  justifyContent="center"
                  alignItems="flex-end"
                  sx={{ bgcolor: "rgba(0,0,0,0.5)", width: "50%", py: 7 }}
                >
                  <Fade right delay={1000}>
                    <Grid xs={12} item sx={{ mr: 20 }}>
                      <Typography
                        align="start"
                        sx={{
                          color: "#fff",
                          fontFamily: "Rubik",
                          fontSize: "2.7rem",
                          fontWeight: 700,
                          width: "120%",
                          lineHeight: "50px",
                          // opacity: 1
                        }}
                      >
                        CRM PRACTISE LEAD
                      </Typography>
                    </Grid>
                  </Fade>
                  <Fade right delay={1200}>
                    <Grid item sx={{ pt: 2 }}>
                      <Typography
                        align="left"
                        color="white"
                        sx={{ width: "80%", ml: 8 }}
                      >
                        Elaboration de votre patrimoine de fonctionnalités et
                        favoriser la transformation dans toute application
                        choisie par vos soins
                      </Typography>
                    </Grid>
                  </Fade>
                </Grid>
              </Grid>
              {/* second item */}

              <Grid item md={6} sx={{ mt: -10, mr: 4 }}>
                {/* <Image
                    src="/images/analysis.jpg"
                    alt="header-image"
                    priority
                    width={500}
                    height={500}
                  /> */}
              </Grid>
            </Grid>
          </Container>
        </div>
      ) : null}

      {state === 2 ? (
        <div>
          <Image
            width={3000}
            priority
            height={1200}
            src="/images/laptop.jpg"
            alt="1"
          />
          <Container>
            <Grid
              container
              sx={{
                position: "absolute",
                zIndex: 1,
                top: "140px",
                ml: 5,
                //   bgcolor: "tomato",
              }}
            >
              {/* first item */}
              <Grid item md={12} sx={{}}>
                <Grid
                  container
                  direction="column"
                  justifyContent="center"
                  alignItems="flex-start"
                  sx={{}}
                >
                  <Fade left delay={700}>
                    <Grid xs={12} item sx={{}}>
                      <Typography
                        align="start"
                        sx={{
                          color: "#fff",
                          fontFamily: "Rubik",
                          fontSize: "2.7rem",
                          fontWeight: 700,
                          width: "90%",
                          lineHeight: "50px",
                          // opacity: 1
                        }}
                      >
                        DEVELOPEMENT DES APPLICATION
                      </Typography>
                    </Grid>
                  </Fade>
                  <Fade left delay={1500}>
                    <Grid item sx={{ pt: 2 }}>
                      <Typography
                        align="left"
                        color="white"
                        sx={{
                          width: "80%",
                          ml: 8,
                          opacity: 0.9,
                          fontFamily: "Rubik",
                          fontSize: "1.7rem",
                          fontWeight: 500,
                        }}
                      >
                        WEB
                      </Typography>
                    </Grid>
                  </Fade>

                  <Fade left delay={1700}>
                    <Grid item sx={{ pt: 1 }}>
                      <Typography
                        align="left"
                        color="white"
                        sx={{
                          width: "80%",
                          ml: 17,
                          fontFamily: "Rubik",
                          fontSize: "1.7rem",
                          opacity: 0.9,
                          fontWeight: 500,
                        }}
                      >
                        MOBILE
                      </Typography>
                    </Grid>
                  </Fade>

                  <Fade left delay={1900}>
                    <Grid item sx={{ pt: 1 }}>
                      <Typography
                        align="left"
                        color="white"
                        sx={{
                          width: "80%",
                          ml: 30,
                          opacity: 0.9,
                          fontFamily: "Rubik",
                          fontSize: "1.7rem",
                          fontWeight: 500,
                        }}
                      >
                        DESKTOP
                      </Typography>
                    </Grid>
                  </Fade>
                </Grid>
              </Grid>
              {/* second item */}

              <Grid item md={6} sx={{ mt: -10, mr: 4 }}>
                {/* <Image
                      src="/images/analysis.jpg"
                      alt="header-image"
                      priority
                      width={500}
                      height={500}
                    /> */}
              </Grid>
            </Grid>
          </Container>
        </div>
      ) : null}

      {state === 3 ? (
        <div>
          <Image
            width={3000}
            priority
            height={1200}
            src="/images/team.jpg"
            alt="1"
          />
          <Container>
            <Grid
              container
              sx={{
                position: "absolute",
                zIndex: 1,
                top: "140px",
                ml: 5,
                //   bgcolor: "tomato",
              }}
            >
              {/* first item */}
              <Grid item md={12} sx={{}}>
                <Grid
                  container
                  direction="column"
                  justifyContent="center"
                  alignItems="flex-start"
                  sx={{ bgcolor: "rgba(0,0,0,0.5)", width: "50%", py: 7 }}
                >
                  <Fade bottom delay={1000}>
                    <Grid
                      xs={12}
                      item
                      sx={{ display: "flex", justifyContent: "center" }}
                    >
                      <Typography
                        // align="left"
                        sx={{
                          color: "#fff",
                          fontFamily: "Rubik",
                          fontSize: "2.7rem",
                          fontWeight: 700,
                          width: "100%",
                          lineHeight: "50px",
                          //   mr: 50,
                          ml: 8,
                          // opacity: 1
                        }}
                      >
                        IT CONSULTING
                      </Typography>
                    </Grid>
                  </Fade>
                  <Fade bottom delay={1200}>
                    <Grid item sx={{ pt: 2 }}>
                      <Typography
                        align="left"
                        color="white"
                        sx={{ width: "80%", ml: 8 }}
                      >
                        Elaboration de votre patrimoine de fonctionnalités et
                        favoriser la transformation dans toute application
                        choisie par vos soins
                      </Typography>
                    </Grid>
                  </Fade>
                </Grid>
              </Grid>
              {/* second item */}

              <Grid item md={6} sx={{ mt: -10, mr: 4 }}>
                {/* <Image
                      src="/images/analysis.jpg"
                      alt="header-image"
                      priority
                      width={500}
                      height={500}
                    /> */}
              </Grid>
            </Grid>
          </Container>
        </div>
      ) : null}

      {state === 4 ? (
        <div>
          <Image
            width={3000}
            priority
            height={1200}
            src="/images/startup.jpg"
            alt="1"
          />
          <Container>
            <Grid
              container
              sx={{
                position: "absolute",
                zIndex: 1,
                top: "140px",
                ml: 5,
                //   bgcolor: "tomato",
              }}
            >
              {/* first item */}
              <Grid item md={12} sx={{}}>
                <Grid
                  container
                  direction="column"
                  justifyContent="center"
                  alignItems="flex-end"
                  sx={{ bgcolor: "rgba(0,0,0,0.5)", width: "50%", py: 7 }}
                >
                  <Fade right delay={1000}>
                    <Grid xs={12} item sx={{ mr: 20 }}>
                      <Typography
                        align="start"
                        sx={{
                          color: "#fff",
                          fontFamily: "Rubik",
                          fontSize: "2.7rem",
                          fontWeight: 700,
                          width: "120%",
                          lineHeight: "50px",
                          // opacity: 1
                        }}
                      >
                        UX/UX DESIGN
                      </Typography>
                    </Grid>
                  </Fade>
                  <Fade right delay={1200}>
                    <Grid item sx={{ pt: 2 }}>
                      <Typography
                        align="left"
                        color="white"
                        sx={{ width: "80%", ml: 8 }}
                      >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Sed consectetur,
                      </Typography>
                    </Grid>
                  </Fade>
                </Grid>
              </Grid>
              {/* second item */}

              <Grid item md={6} sx={{ mt: -10, mr: 4 }}>
                {/* <Image
                      src="/images/analysis.jpg"
                      alt="header-image"
                      priority
                      width={500}
                      height={500}
                    /> */}
              </Grid>
            </Grid>
          </Container>
        </div>
      ) : null}
    </Carousel>
  );
};

export default CarouselSlider;
