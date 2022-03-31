import React from "react";
import { Container, Grid, Typography } from "@mui/material";
import FourthSection from "../components/FourthSection";
import { Box } from "@mui/system";

const FourthSectionScreen = () => {
  return (
    <div className="fourthscreen">
      <Box style={{ display: "flex", justifyContent: "center" }}>
        <div className="circle"></div>
        <div className="get">
          <Typography
            style={{ fontWeight: "bolder", fontSize: "35px", lineHeight: "60px",paddingTop: "10rem" }}
          >
            Getting Started
           
          </Typography>
          <Typography style={{paddingRight:"5px"}}>Your questions answered</Typography>
        </div>
        <div className="circle"></div>
      </Box>

      <Container>
        <Grid container spacing={5}>
          <FourthSection />
        </Grid>
      </Container>
    </div>
  );
};

export default FourthSectionScreen;
