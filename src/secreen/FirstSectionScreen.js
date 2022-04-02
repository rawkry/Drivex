import React from 'react'
import{Container, Grid} from "@mui/material"
import FirstSection from '../components/FirstSection'


const FirstSectionScreen = () => {
  return (
    <div className='fistScreen' style={{background: "linear-gradient(107.64deg, #01B39A 0%, #00C1A6 100%",
        
        height:"100vh"
        }}>
    <Container>
        
        <Grid container spacing={5} direction="column"  >
        <FirstSection/>

        </Grid>
    </Container>

    </div>
  )
}

export default FirstSectionScreen