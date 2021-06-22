import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Box, Grid, Typography } from "@material-ui/core";

import { Container } from "@material-ui/core";

const OurServicesCarousel = () => {
  return (
    <Box sx={{ width: "100vw", bgcolor: "#000", mt: -1 }}>
      <Container maxWidth="md" sx={{ pt: "7rem" }}>
        <Grid container justifyContent="center">
          <Grid item sx={{ position: "relative" }}>
            <Typography
              variant="h2"
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

      <Container maxWidth="xs">
        <Grid container>
          <Link href="#" >
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
                      <Grid item sx={{ bgcolor: "#68F8F8", borderRadius: 2 }}>
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
                      Nisi cumque in necessitatibus molestiae eaque excepturi
                      ab. Laboriosam ipsam voluptatem voluptatibus labore quam
                      nihil. Quasi occaecati quos ratione quia aut molestiae
                      velit et
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
            </a>
          </Link>
        </Grid>
      </Container>
    </Box>
  );
};

export default OurServicesCarousel;
