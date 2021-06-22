import React from "react";
import { Carousel } from "react-bootstrap";
import Image from "next/image";
import { Grid, Typography } from "@material-ui/core";

const BootstrpCarousel = () => {
  return (
    <Carousel fade>
      <Carousel.Item style={{ position: "relative" }}>
        <Image
          width={3000}
          priority
          height={1200}
          src="/images/bgcolor.png"
          alt="1"
        />
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          sx={{
            bgcolor: "",
            position: "absolute",
            zIndex: 1,
            top: 1,
            width: "auto",
            minHeight: "100%  ",
          }}
        >
          <Grid item md={5}>
            <Typography
              sx={{
                color: "#fff",
                fontFamily: "Rubik",
                fontSize: "2.6rem",
                fontWeight: 700,
                width: "90%",
                lineHeight: "50px",
                ml: 14,
              }}
            >
              QUAND L EST FAIT POUR PARLER VOTRE MÉTIER
            </Typography>
          </Grid>

          <Grid
            item
            md={6}
            sx={{ bgcolor: "", display: "flex", justifyContent: "flex-end" }}
          >
            <Image
              //   style={{ margin: "0px 10px, 0px 0px" }}
              src="/images/header-ilustration.png"
              alt="header-image"
              priority
              width={500}
              height={500}
            />
          </Grid>
        </Grid>
      </Carousel.Item>
      <Carousel.Item style={{ position: "relative" }}>
        <Image
          width={3000}
          priority
          height={1200}
          src="/images/christina.jpg"
          alt="1"
        />
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          sx={{
            bgcolor: "",
            position: "absolute",
            zIndex: 1,
            top: 1,
            width: "auto",
            minHeight: "100%  ",
          }}
        >
          <Grid item md={5}>
            <Typography
              sx={{
                color: "#fff",
                fontFamily: "Rubik",
                fontSize: "2.6rem",
                fontWeight: 700,
                width: "90%",
                lineHeight: "50px",
                ml: 14,
              }}
            >
              QUAND  EST FAIT POUR PARLER VOTRE MÉTIER
            </Typography>
          </Grid>

          {/* <Grid
            item
            md={6}
            sx={{ bgcolor: "", display: "flex", justifyContent: "flex-end" }}
          >
            <Image
              //   style={{ margin: "0px 10px, 0px 0px" }}
              src="/images/header-ilustration.png"
              alt="header-image"
              priority
              width={500}
              height={500}
            />
          </Grid> */}
        </Grid>
      </Carousel.Item>
      <Carousel.Item>
        <Image
          width={3000}
          priority
          height={1200}
          src="/images/light.jpg"
          alt="1"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default BootstrpCarousel;
