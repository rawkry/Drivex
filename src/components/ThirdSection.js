import React from "react";
import { Typography, Grid, Box, Paper, Button } from "@mui/material";

const ThirdSection = () => {
  return (
    <>
    {/* <div className="sectn"></div> */}
   

  
      <Grid item xs={6}>
        <Box padding={6}>
          
            <div className="imgg">
              <img
                src="./images/mobo.png"
                style={{
                  height:"40rem",
                 position:"absolute",
                 top:"100rem",
                 left:"1rem"
                  
                  
                }}
              />
            </div>
            <Paper
              sx={{
                width: "11rem",
                position: "absolute",
                top: "113rem",
                left: "4rem",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                flexDirection: "column",
                boxShadow: "5px 7px 30px rgba(1, 179, 154, 0.2)",
                borderRadius: "20px",
              }}
            >
              <img
                src="./images/person.png"
                style={{
                  marginTop: "15px",
                }}
              />
              <Typography
                style={{
                  marginTop: "15px",
                  fontWeight: "bolder",
                  fontSize: "14px",
                  lineHeight: "24px",
                }}
              >
                Anton Chekov
              </Typography>
              <Typography
                style={{
                  fontFamily: "Rubik",
                  fontStyle: "normal",
                  fontWeight: "300",
                  fontSize: "12px",
                  lineHeight: "14px",

                  color: "#646464",
                }}
              >
                Manual- Mercedes B
              </Typography>
              <Typography
                style={{
                  fontFamily: "Rubik",
                  fontStyle: "normal",
                  fontWeight: "bolder",
                  fontSize: "14px",
                  lineHeight: "24px",
                  /* identical to box height, or 171% */

                  letterSpacing: "-0.011em",

                  color: "#01B39A",
                }}
              >
                From $20.00
              </Typography>
            </Paper>

            {/* <div className="smallCard">
              <img src="./images/person.png" />
            </div> */}

            <div className="msg">
              <Typography
                variant="h4"
                component="h1"
                style={{
                  marginTop: "13px",
                  fontFamily: "SF Pro Text",
                  fontStyle: "normal",
                  fontWeight: "400",
                  fontSize: "12px",
                  lineHeight: "21px",
                  background: "rgba(0, 0, 0, 0.6)",
                  borderRadius: "8px",
                  width: "3rem",
                  color: "white",
                  textAlign:"center"
                }}
              >
                may 7
              </Typography>
              <div className="a">
                <Typography
                  variant="h4"
                  component="h1"
                  style={{
                    textAlign: "center",
                    margin: "2px",
                    border: "1px solid #ECEBEB",
                    boxSizing: "border-box",
                    
                    background: "#ECEBEB",
                    borderRadius: "16px 16px 0px 16px",
                    fontWeight: "500",
                    fontSize: "14px",
                    lineHeight: "23px",
                    
                    width: "4rem",
                    height: "1.5rem",
                  }}
                >
                  Hello
                </Typography>
                <Typography
                  variant="h4"
                  component="h1"
                  style={{
                    margin: "2px",
                    fontFamily: "SF Pro Text",
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: "12px",
                    lineHeight: "14px",

                    width: "4rem",
                  }}
                >
                  ☑️ 3.00PM
                </Typography>
              </div>
              <div className="b">
                <div className="bb">
                  <Typography
                    variant="h4"
                    component="h1"
                    style={{
                      textAlign: "center",
                      margin: "2px",
                      border: "1px solid #ECEBEB",
                    
                      
                      boxSizing: "border-box",
                      borderRadius: "16px",
                      fontFamily: "SF Pro Text",
                      fontStyle: "normal",
                      fontWeight: "500",
                      fontSize: "14px",
                      lineHeight: "23px",
                      width: "4rem",
                      height: "1.5rem",
                    }}
                  >
                    Hello!
                  </Typography>

                  <Typography
                    variant="h4"
                    component="h1"
                    style={{
                      textAlign: "center",
                      margin: "2px",
                      border: "1px solid #ECEBEB",
                      boxSizing: "border-box",
                      padding: "2px",
                      borderRadius: "16px 16px 16px 0px",
                      fontFamily: "SF Pro Text",
                      fontStyle: "normal",
                      fontWeight: "525",
                      fontSize: "16px",
                      lineHeight: "17px",
                      width: "7rem",
                      height: "1.5rem",
                    }}
                  >
                    Lesson time?
                  </Typography>
                  <Typography
                    variant="h4"
                    component="h1"
                    style={{
                      margin: "2px",
                      fontFamily: "SF Pro Text",
                      fontStyle: "normal",
                      fontWeight: "400",
                      fontSize: "12px",
                      lineHeight: "14px",
                      textAlign: "center",
                      width: "4rem",
                    }}
                  >
                    3.00PM
                  </Typography>
                </div>

                <img
                  src="./images/girl.png"
                  style={{
                    position: "absolute",
                    left: "3px",
                    top: "30px",
                    borderRadius: "50%",
                  }}
                />
              </div>
              <div className="c">
                <Typography
                  variant="h4"
                  component="h1"
                  style={{
                    margin: "2px",
                    fontFamily: "SF Pro Text",
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: "12px",
                    lineHeight: "23px",
                    textAlign: "center",
                    width: "6rem",
                    background: "#ECEBEB",
                    borderRadius: "16px 16px 0px 16px",
                    height: "1.5rem",
                  }}
                >
                  Around 10 AM
                </Typography>
                <Typography
                  variant="h4"
                  component="h1"
                  style={{
                    margin: "2px",
                    fontFamily: "SF Pro Text",
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: "12px",
                    lineHeight: "14px",

                    width: "4rem",
                  }}
                >
                  ☑️ 3.00PM
                </Typography>
              </div>
            </div>
          
        </Box>
      </Grid>
     
      <Grid item xs={6}>
        <Typography
          style={{
            marginTop:"30px",
            color: "#01B39A",
            fontWeight: "500",
            fontSize: "35px",
            lineHeight: "50px",
          }}
        >
          Perfect Match{" "}
          <span style={{ color: "black" }}>Driving <br/>Instructors</span>
        </Typography>

        <Typography style={{
          fontFamily: 'Raleway',
          fontWeight: "300",
          fontSize: "20px",
          lineHeight: "34px",
          /* or 170% */
         color: "#646464",
         marginTop:"10px"

        }}>
          Find ‘perfect match’ driving instructors by different criteria,
          depending on what’s important to you. Browse, search and sort: by
          location; according to what times they have free slots; by price; car
          brand; transmission type; and more. Getting behind the steering wheel
          much easier.
        </Typography>

        <Typography style={{
          fontFamily: 'Raleway',
          fontWeight: "300",
          fontSize: "20px",
          lineHeight: "34px",
          /* or 170% */
          color: "#646464",
          marginTop:"10px"
        }}>
         📴 Smart communication system helps you get response<br/> quick and
          convenient.
        </Typography>

        <Typography style={{
          fontFamily: 'Raleway',
          fontWeight: "300",
          fontSize: "20px",
          lineHeight: "34px",
          /* or 170% */
          color: "#646464",
          marginTop:"10px"
          }}>
         🔓 Access all the instructor's free slots around you, make<br/> different
          bookings by your needs.
        </Typography>

        <Button variant="contained" style={{marginTop:"20px"}}>Contained</Button>
      </Grid>
    </>
  );
};

export default ThirdSection;
