import { Typography,Box,Grid, Container } from '@mui/material'
import React from 'react'
import SecondSection from '../components/SecondSection'
import data from '../data'
const SecondSectionScreen = () => {
  return (
    <div className='secondscreen'>
       <Box padding={6}>
         <Typography style={{fontWeight:"bolder",
fontSize: "40px",
lineHeight:"60px",
textAlign:"center"}}>
         Why Drive X?
</Typography>

<Typography style={{fontWeight:"300",
fontFamily: 'Raleway',
fontSize: "20px",
lineHeight:"34px",
textAlign:"center"}}>
A data-oriented learn to drive experiences from download Drive X Apps. Smart <br/> theory app, find instructors, book different type lessons by your convenience, track<br/> your learning, all in one account 

</Typography>
</Box>
<Container>
<Grid container spacing={3}>


          {data.map((dat) => (
           
              <SecondSection dat={dat} />
           
          ))}
       


</Grid>

</Container>





    </div>
    

  )
}

export default SecondSectionScreen