import React from "react";
import { Typography, Box, Container, Grid } from "@mui/material";
import ThirdSection from "../components/ThirdSection";

const ThirdSectionScreen = () => {
  return (
    <div className="thirdscreen" style={{ background: "#F1F7F6", marginTop:"10rem" }}>
      <Box padding={6}>
        <Typography
          variant="h4"
          component="h1"
          sx={{
            textAlign: "center",
            fontWeight: "500",
            fontSize: "35px",
            lineHeight: "60px",
          }}
        >
          Awesome & Unique App Functionality
        </Typography>

        <Typography variant="h5" component="h2" sx={{ 
          textAlign: "center",
          fontWeight: "300",
          fontSize: "20px",
          lineHeight: "34px",
           }}>
          Learners will benefit from our data oriented learning process with
          diving instructors <br />
          to get the most of the flexibilty and cost-effectivity.
        </Typography>
      </Box>
      <Container>
        <Grid container spacing={3}>
          <ThirdSection />
        </Grid>
      </Container>
    </div>
  );
};

export default ThirdSectionScreen;
