import React, { useState } from 'react'
import {AppBar,Box,Toolbar, Tabs, Tab} from '@mui/material';
const Header = () => {
  const[value,setValue]= useState();
  return (
      <>
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="fixed" style={{background:"white"}}>
      <Toolbar >
        
        <img src='./images/logo.png' style={{marginLeft:"15px"}}/>
            
               <Tabs sx={{marginLeft:"auto" }}textColor='red' value ={value} onChange={(e,value)=>setValue(value)} indicatorColor="primary">
                       <Tab sx={{ color:"black"}} label ="DriveX for learners"/>
                       <Tab  sx={{color:"black"}}label ="DriveX for Instructor"/>

               </Tabs>
       
       
      </Toolbar>
      
    </AppBar>
  </Box>
  </>
  )
}

export default Header