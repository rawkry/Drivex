import React from "react";
import { Box, Grid, Typography } from "@mui/material/";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
// import { makeStyles } from '@mui/styles';
// const useStyles = makeStyles((theme)=>({

// rect:{

//   [theme.breakpoints.down("md")]:{
//     height:"10rem",

//   }
// }

// }))

const FirstSection = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("xs"));
  // const classes = useStyles();
  return (
    <Grid container justifyContent={matches ? "center":"flex-start"} >
      <Grid item xs={12} md={6} xl={3}
      
      
      >
        <Box paddingTop={4} marginTop={20}>
          <Typography
          xs={12} md={6} xl={3} 

            sx={{
              color: "white",
              fontWeight: "bolder",
              fontSize: "35px",
              lineHeight: "60px",
            }}
          >
            Find your ideal driving instructor.
            <br /> <span style={{ color: "black" }}>In minutes.</span>
          </Typography>

          <Typography
            sx={{
              paddingTop: "10px",
              fontWeight: "400",
              fontSize: "20px",
              fontFamily: "Raleway",
              lineHeight: "35px",
              /* or 175% */

              color: "rgba(255, 255, 255, 0.97)",
            }}
          >
            Compare independent driving instructors in your area. Find <br />{" "}
            your ideal driving instructor. In minutes. Book, reschedule
            <br /> and cancel lessons on the go.
          </Typography>
        </Box>
        <Grid item container sx={3} paddingTop={8} spacing={2}>
          <img
            src="./images/Group.png"
            style={{ height: "50.98px", width: "171.74px" }}
          />

          <img
            src="./images/googleply.png"
            style={{ height: "50.98px", width: "171.74px", paddingLeft: "5px" }}
          />
        </Grid>
      </Grid>

      <Grid item xs={6}  >
        <img
          className="rect"
          src="./images/Rectangle.png"
          style={{ height: "40rem" }}
        />
      </Grid>
    </Grid>
  );
};

export default FirstSection;
