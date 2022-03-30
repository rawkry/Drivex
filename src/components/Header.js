import React from 'react'
import {AppBar,Box,Toolbar,Button} from '@mui/material';
const Header = () => {
  return (
      <>
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="fixed" style={{background:"white"}}>
      <Toolbar style={{display:"flex",
      justifyContent:"space-between",
      alignItems:"center",
    }}>
        
        <img src='./images/logo.png' style={{marginLeft:"15px"}}/>
             <div className='btn' style={{marginRight:"4rem"}}>
       <Button  variant="text" style={{marginRight:"4rem", color:"#AAAAAA"}}>DriveX for learners</Button>
       <Button variant="text" style={{color:"#AAAAAA" }}>DriveX for Instructor</Button>
       </div>
      </Toolbar>
      
    </AppBar>
  </Box>
  </>
  )
}

export default Header