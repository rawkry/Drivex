import React from 'react'
import { Typography,Box,Grid } from '@mui/material'

const FourthSection = () => {
    
  return (
      <>
    <Grid item xs={6}   >
        <Box margin={8}>
             <Typography className='tx'>How do I sign up? <img src="./images/Shape.png"style={{marginRight:"10px"}}/></Typography>
             <Typography className='tx'>What areas does Drive X cover? <img src="./images/Shape.png"/></Typography>
             <Typography className='tx'>Are the driving instructors on Drive X certified? <img src="./images/Shape.png"/></Typography>
             <Typography className='tx'>What areas does Drive X cover?  <img src="./images/Shape.png"/></Typography>
 
             </Box>

              </Grid>
               <Grid item xs={6}>
               <Box margin={8}>
  <Typography className='tx'>Can I choose my driving instructor? <img src="./images/Shape.png"/></Typography>
  <Typography className='tx' >How do I pay for my lessons? <img src="./images/Shape.png"/></Typography>
  <Typography className='tx'>How do I communicate with my instructors? <img src="./images/Shape.png"/></Typography>
  <Typography className='tx'>Where do driving lessons take place? <img src="./images/Shape.png"/></Typography>
  </Box>
                </Grid>
                </>
  )
}

export default FourthSection