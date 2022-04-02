import React from 'react'
import { Box,Grid,Typography } from '@mui/material/'



  

const FirstSection = () => {
  return (
      <>
      
         <Grid item xs={7}>
             <Box paddingTop={5} marginTop={20}>
         <Typography  sx={{color:"white",
         fontWeight: "bolder",
         fontSize: "40px",
         lineHeight: "60px",
         
        }}>
         Find your ideal driving instructor.<br/> <span style={{color:"black"}}>In minutes.</span>
</Typography>

<Typography variant="h5" component="h2" sx={{
  paddingTop:"10px",
  fontWeight: "400",
fontSize: "20px",
fontFamily: 'Raleway',
lineHeight: "35px",
/* or 175% */


color: "rgba(255, 255, 255, 0.97)"
  }}>
Compare independent driving instructors in your area. Find <br/> your ideal driving instructor. In minutes.
Book, reschedule<br/> and cancel lessons on the go.

</Typography>

<Grid container spacing={1} marginTop={5}>
  <Grid item xs={4}>
  <img src='./images/Group.png' style={{height:"50.98px",width:"171.74px"}}/>
  </Grid>

  <Grid item xs={6}>
  <img src='./images/googleply.png' style={{height:"50.98px",width:"171.74px"}}/>
  </Grid>

  </Grid>

    

</Box>
 
 


              </Grid>
               <Grid container xs={8} sm={4} md={4} lg={1} >
               <img src='./images/Rectangle.png' style={{
  height: "59rem",
  width: "60rem",
  position:"absolute",
  left:"20rem",
  top:"-2rem",
  
  
  




}}/>
  
  
                </Grid>

                
  </>
  )
}

export default FirstSection