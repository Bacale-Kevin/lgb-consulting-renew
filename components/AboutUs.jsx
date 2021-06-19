import React from "react";
import { Box, Container, Grid, Typography, Paper } from "@material-ui/core";
import Image from "next/image";

const AboutUs = () => {
  return (
    <Box sx={{ width: "100vw", bgcolor: "black", pb: "5rem" }}>
      <Container maxWidth="md" direction="column" sx={{ pt: "5rem" }}>
        {/* about us */}
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
            A Propos
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            variant="caption"
            color="#68F8F8"
            sx={{ textTransform: "uppercase", fontWeight: "bold", ml: 8 }}
          >
            Nous sommes plus qu'une entrepise de consulting
          </Typography>
        </Grid>
      </Container>

      {/* image grid */}
      <Container maxWidth="md" sx={{ pt: "5rem" }}>
        <Grid container justifyContent="center" alignItems="center" spacing={2}>
          {/* 1 */}
          <Grid item sx={{ position: "relative", bgcolor: "" }}>
            <Image
              src="/images/christina1.png"
              alt="bulb"
              width={390}
              height={500}
            />
            <Grid
              container
              direction="column"
              sx={{
                position: "absolute",
                left: "50px",
                bottom: "5rem",
                zIndex: 1,
              }}
            >
              <Grid item>
                <Typography color="white">Team Work</Typography>
              </Grid>
              <Grid item>
                <Typography color="white">Committed and creative</Typography>
              </Grid>
            </Grid>
          </Grid>
          {/* 2 */}
          <Grid item>
            <Grid container direction="column">
              {/* nested 1 */}
              <Grid item sx={{ position: "relative" }}>
                <Image
                  src="/images/christina1.png"
                  alt="bulb"
                  width={390}
                  height={250}
                />
                <Grid
                  container
                  direction="column"
                  sx={{
                    position: "absolute",
                    left: "50px",
                    bottom: "5rem",
                    zIndex: 1,
                  }}
                >
                    <Grid item>
                      <Typography sx={{ opacity: 1, fontWeight: 900 }} color="white">Team Work</Typography>
                    </Grid>
                    <Grid item>
                      <Typography sx={{ opacity: 1 }} color="white" variant="subtitle">Committed and creative</Typography>
                    </Grid>
                </Grid>
              </Grid>

              {/* nested 2 */}
              <Grid item sx={{ position: "relative" }}>
                <Image
                  src="/images/christina1.png"
                  alt="bulb"
                  width={390}
                  height={243}
                />
                <Grid
                  container
                  direction="column"
                  sx={{
                    position: "absolute",
                    left: "50px",
                    bottom: "5rem",
                    zIndex: 1,
                  }}
                >
                  <Grid item>
                    <Typography color="white">Team Work</Typography>
                  </Grid>
                  <Grid item>
                    <Typography color="white">
                      Committed and creative
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>

      {/* description */}
      <Container maxWidth="md">
        <Grid container sx={{ mx: 8 }}>
          <Grid item md={4} sx={{ position: "relative" }}>
            <Typography color="white" sx={{ mt: 2 }}>
              Qui somme nous
            </Typography>
            <Typography
              color="white"
              sx={{ fontSize: 12, maxWidth: "80%", mt: 1, opacity: 0.7 }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
              aspernatur saepe adipisicing elit. Assumenda aspernatur saepe
            </Typography>
          </Grid>

          <Grid
            item
            md={4}
            sx={{ borderLeft: "2px solid teal", pl: 2, ml: "-40px" }}
          >
            <Typography color="white" sx={{ mt: 2 }}>
              Comment nous travaillon
            </Typography>
            <Typography
              color="white"
              sx={{ fontSize: 12, maxWidth: "80%", mt: 1, opacity: 0.7 }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
              aspernatur saepe
            </Typography>
          </Grid>

          <Grid
            item
            md={4}
            sx={{ borderLeft: "2px solid teal", pl: 2, ml: "-15px" }}
          >
            <Typography color="white" sx={{ mt: 2 }}>
              Notre Phylosolphie
            </Typography>
            <Typography
              color="white"
              sx={{ fontSize: 12, maxWidth: "80%", mt: 1, opacity: 0.7 }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
              aspernatur saepe
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutUs;
